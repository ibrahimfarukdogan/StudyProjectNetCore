using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class ServicesData
    {
        [Key]
        public int Id { get; set; }
        public required string ImagePath { get; set; }
        public required string Title { get; set; }
        public required string Text { get; set; }
        public int ServicesItemId { get; set; }
        public ServicesItem? ServicesItem { get; set; }
    }
}
