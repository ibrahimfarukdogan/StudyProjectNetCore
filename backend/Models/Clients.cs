using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Clients
    {
        [Key]
        public int Id { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public string? ImagePath { get; set; }
        public required string Name { get; set; }
        public string? OwnDescription { get; set; }
        public string? ExperienceDescription { get; set; }
        public required string Position { get; set; }
        public string? Facebook { get; set; }
        public string? Twitter { get; set; }
        public string? Instagram { get; set; }
        public string? Linkedin { get; set; }
        public bool IsDeleted { get; set; } = false;
        public DateTime CreationDate { get; set; } = DateTime.Now;
    }
}
