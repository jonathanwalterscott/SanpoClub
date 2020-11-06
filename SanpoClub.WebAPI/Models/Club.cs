using System.ComponentModel.DataAnnotations;

namespace SanpoClub.WebAPI.Models
{
    public class Club
    {
        [Key]
        public string Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
    }
}
