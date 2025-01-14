using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class ServicesItem
    {
        [Key]
        public int Id { get; set; }
        public required string ImagePath { get; set; }
        public required string Title { get; set; }
        public string? Description { get; set; }
        public bool IsDeleted { get; set; } = false;

    }
}