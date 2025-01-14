using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class CommentItem
    {
        [Key]
        public int Id { get; set; }
        public string? Text { get; set; }
        public int ClientsId { get; set; }
        public Clients? Clients { get; set; }
    }
}
