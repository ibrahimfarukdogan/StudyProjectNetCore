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
    public class BlogItemsController : ControllerBase
    {
        private readonly backendDbContext _context;

        public BlogItemsController(backendDbContext context)
        {
            _context = context;
        }

        // GET: api/BlogItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogItem>>> GetBlogItems()
        {
            return await _context.BlogItems.ToListAsync();
        }

        // GET: api/BlogItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BlogItem>> GetBlogItem(int id)
        {
            var blogItem = await _context.BlogItems.FindAsync(id);

            if (blogItem == null)
            {
                return NotFound();
            }

            return blogItem;
        }

        // PUT: api/BlogItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlogItem(int id, BlogItem blogItem)
        {
            if (id != blogItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(blogItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogItemExists(id))
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

        // POST: api/BlogItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BlogItem>> PostBlogItem(BlogItem blogItem)
        {
            _context.BlogItems.Add(blogItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBlogItem", new { id = blogItem.Id }, blogItem);
        }

        // DELETE: api/BlogItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlogItem(int id)
        {
            var blogItem = await _context.BlogItems.FindAsync(id);
            if (blogItem == null)
            {
                return NotFound();
            }

            _context.BlogItems.Remove(blogItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BlogItemExists(int id)
        {
            return _context.BlogItems.Any(e => e.Id == id);
        }
    }
}
