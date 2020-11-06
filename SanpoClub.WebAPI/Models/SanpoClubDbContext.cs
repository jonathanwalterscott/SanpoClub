using Microsoft.EntityFrameworkCore;

namespace SanpoClub.WebAPI.Models
{
    public class SanpoClubDbContext : DbContext
    {
        public SanpoClubDbContext(DbContextOptions<SanpoClubDbContext> options) : base(options)
        {
        }

        public DbSet<Club> Clubs { get; set; }
    }
}
