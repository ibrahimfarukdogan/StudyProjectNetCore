using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace backend.Models
{
    public class BlogItem
    {
        [Key]
        public int Id { get; set; }
        public required string Title { get; set; }
        public string? TitleImage { get; set; }
        public string? Description { get; set; }

        public int MemberId { get; set; }
        public Members? Member { get; set; }
        public bool IsDeleted { get; set; } = false;
        public DateTime CreationDate { get; set; } = DateTime.Now;
    }
}