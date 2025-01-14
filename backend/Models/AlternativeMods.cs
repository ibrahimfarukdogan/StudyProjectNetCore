using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class AlternativeMods
    {
        [Key]
        public int Id { get; set; }  // Primary Key
        public required string ComponentName { get; set; }  // Name of the component (e.g., Navbar)
        public bool AlternativeMod { get; set; } = false;
    }
}
