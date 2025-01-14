using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogDatasController : ControllerBase
    {
        private readonly backendDbContext _context;

        public BlogDatasController(backendDbContext context)
        {
            _context = context;
        }

        // GET: api/BlogDatas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogData>>> GetBlogDatas()
        {
            return await _context.BlogDatas.ToListAsync();
        }

        // GET: api/BlogDatas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BlogData>> GetBlogData(string id)
        {
            var blogData = await _context.BlogDatas.FindAsync(id);

            if (blogData == null)
            {
                return NotFound();
            }

            return blogData;
        }

        // PUT: api/BlogDatas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlogData(string id, BlogData blogData)
        {
            if (id != blogData.Type)
            {
                return BadRequest();
            }

            _context.Entry(blogData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogDataExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BlogDatas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BlogData>> PostBlogData(BlogData blogData)
        {
            _context.BlogDatas.Add(blogData);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BlogDataExists(blogData.Type))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetBlogData", new { id = blogData.Type }, blogData);
        }

        // DELETE: api/BlogDatas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlogData(string id)
        {
            var blogData = await _context.BlogDatas.FindAsync(id);
            if (blogData == null)
            {
                return NotFound();
            }

            _context.BlogDatas.Remove(blogData);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BlogDataExists(string id)
        {
            return _context.BlogDatas.Any(e => e.Type == id);
        }
    }
}
