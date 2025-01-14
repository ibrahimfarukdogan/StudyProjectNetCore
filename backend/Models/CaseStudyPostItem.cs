using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class CaseStudyPostItem
    {
        [Key]
        public int Id { get; set; }
        public required string Title { get; set; }
        public string? TitleImage { get; set; }
        public bool IsDeleted { get; set; } = false;
        public DateTime CreationDate { get; set; } = DateTime.Now;

        public int MemberId { get; set; }  // Foreign Key to the User table
        [ForeignKey("MemberId")]
        public virtual Members? Member { get; set; }  // Navigation property to User
        public int CategoryId { get; set; }  // Foreign Key to the User table
        [ForeignKey("CategoryId")]
        public virtual CaseStudyCategoryItem? CaseStudyCategoryItem { get; set; }  // Navigation property to User
    }
}