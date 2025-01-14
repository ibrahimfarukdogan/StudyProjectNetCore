using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class PricingItem
    {
        [Key]
        public int Id { get; set; }
        public required int price { get; set; }
        public required string title { get; set; }
        public required string description { get; set; }
        public required string totaltime { get; set; }
        public bool IsActive { get; set; } = true;
    }
}
