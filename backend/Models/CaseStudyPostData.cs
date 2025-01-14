using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class CaseStudyPostData
    {
        [Key]
        public int Id { get; set; }
        public string? Type { get; set; }
        public string?  Content { get; set; }
        public int CaseStudyPostItemId { get; set; }
        public CaseStudyPostItem? CaseStudyPostItem { get; set; }
    }
}
