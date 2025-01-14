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
    public class CommentItemsController : ControllerBase
    {
        private readonly backendDbContext _context;

        public CommentItemsController(backendDbContext context)
        {
            _context = context;
        }

        // GET: api/CommentItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CommentItem>>> GetCommentItem()
        {
            return await _context.CommentItem.ToListAsync();
        }

        // GET: api/CommentItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CommentItem>> GetCommentItem(string id)
        {
            var commentItem = await _context.CommentItem.FindAsync(id);

            if (commentItem == null)
            {
                return NotFound();
            }

            return commentItem;
        }

        // PUT: api/CommentItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCommentItem(string id, CommentItem commentItem)
        {
            if (id != commentItem.Text)
            {
                return BadRequest();
            }

            _context.Entry(commentItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommentItemExists(id))
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

        // POST: api/CommentItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CommentItem>> PostCommentItem(CommentItem commentItem)
        {
            _context.CommentItem.Add(commentItem);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CommentItemExists(commentItem.Text))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCommentItem", new { id = commentItem.Text }, commentItem);
        }

        // DELETE: api/CommentItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCommentItem(string id)
        {
            var commentItem = await _context.CommentItem.FindAsync(id);
            if (commentItem == null)
            {
                return NotFound();
            }

            _context.CommentItem.Remove(commentItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CommentItemExists(string id)
        {
            return _context.CommentItem.Any(e => e.Text == id);
        }
    }
}
