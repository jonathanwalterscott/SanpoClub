using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SanpoClub.WebAPI.Models;

namespace SanpoClub.WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<SanpoClubDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("SanpoClubDatabase"));
            });
            services.AddControllers();
            services.AddCors(options =>
            {
                options.AddPolicy(name: "SanpoClub.Client",
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:55877").AllowAnyHeader().Build();
                    });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors("SanpoClub.Client");
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
