using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class CaseStudyCategoryItem
    {
        [Key]
        public int Id { get; set; }
        public required string categoryName { get; set; }
        public bool IsActive { get; set; } = true;
    }
}
