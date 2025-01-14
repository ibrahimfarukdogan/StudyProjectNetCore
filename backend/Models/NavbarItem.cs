using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class NavbarItem
    {
        [Key]
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Url { get; set; }
        public bool IsActive { get; set; } = true;
    }
}
