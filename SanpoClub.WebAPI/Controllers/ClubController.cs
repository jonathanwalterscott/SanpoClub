using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using SanpoClub.WebAPI.Models;
using Microsoft.AspNetCore.Cors;
using System;

namespace SanpoClub.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClubController : Controller
    {
        private SanpoClubDbContext _DbContext;

        public ClubController(SanpoClubDbContext dbContext)
        {
            _DbContext = dbContext;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Club>> Index(string id)
        {
            var club = await this._DbContext.Clubs.SingleOrDefaultAsync(club => club.Id == id);
            if (club == null)
            {
                return NotFound(id);
            }
            return club;
        }

        [HttpPost]
        [Route("add")]
        public ActionResult<Club> CreateClub(Club newClub)
        {
            newClub.Id = Guid.NewGuid().ToString();
            var thisClub = _DbContext.Clubs.Add(newClub);
            _DbContext.SaveChanges();
            var returnValue = CreatedAtAction("Index", new { id = newClub.Id }, newClub);
            return returnValue;
        }
    }

}
