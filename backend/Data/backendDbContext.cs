using backend.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace backend.Data
{
    public class backendDbContext: DbContext
    {
        public backendDbContext(DbContextOptions<backendDbContext> options) : base(options) { }
        public DbSet<NavbarItem> NavbarItems { get; set; }
        public DbSet<ServicesData> ServicesDatas { get; set; }
        public DbSet<ServicesItem> ServicesItems { get; set; }
        public DbSet<Members> Members { get; set; }
        public DbSet<BlogData> BlogDatas { get; set; }
        public DbSet<BlogItem> BlogItems { get; set; }
        public DbSet<CaseStudyCategoryItem> CaseStudyCategoryItems { get; set; }
        public DbSet<CaseStudyPostData> CaseStudyPostDatas { get; set; }
        public DbSet<CaseStudyPostItem> CaseStudyPostItems { get; set; }
        public DbSet<AlternativeMods> AlternativeMods { get; set; }
        public DbSet<backend.Models.Clients> Clients { get; set; } = default!;
        public DbSet<backend.Models.CommentItem> CommentItem { get; set; } = default!;
        public DbSet<backend.Models.PricingItem> PricingItem { get; set; } = default!;
    }
}
