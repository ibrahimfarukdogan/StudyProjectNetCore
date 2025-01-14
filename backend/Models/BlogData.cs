using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class BlogData
    {
        [Key]
        public int Id { get; set; }
        public string? Type { get; set; }
        public string? Content { get; set; }
        public int BlogItemId { get; set; }
        public BlogItem? BlogItem { get; set; }
    }
}
