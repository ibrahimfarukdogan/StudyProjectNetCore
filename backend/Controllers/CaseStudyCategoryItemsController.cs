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
    public class CaseStudyCategoryItemsController : ControllerBase
    {
        private readonly backendDbContext _context;

        public CaseStudyCategoryItemsController(backendDbContext context)
        {
            _context = context;
        }

        // GET: api/CaseStudyCategoryItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CaseStudyCategoryItem>>> GetCaseStudyCategoryItems()
        {
            return await _context.CaseStudyCategoryItems.ToListAsync();
        }

        // GET: api/CaseStudyCategoryItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CaseStudyCategoryItem>> GetCaseStudyCategoryItem(int id)
        {
            var caseStudyCategoryItem = await _context.CaseStudyCategoryItems.FindAsync(id);

            if (caseStudyCategoryItem == null)
            {
                return NotFound();
            }

            return caseStudyCategoryItem;
        }

        // PUT: api/CaseStudyCategoryItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCaseStudyCategoryItem(int id, CaseStudyCategoryItem caseStudyCategoryItem)
        {
            if (id != caseStudyCategoryItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(caseStudyCategoryItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CaseStudyCategoryItemExists(id))
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

        // POST: api/CaseStudyCategoryItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CaseStudyCategoryItem>> PostCaseStudyCategoryItem(CaseStudyCategoryItem caseStudyCategoryItem)
        {
            _context.CaseStudyCategoryItems.Add(caseStudyCategoryItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCaseStudyCategoryItem", new { id = caseStudyCategoryItem.Id }, caseStudyCategoryItem);
        }

        // DELETE: api/CaseStudyCategoryItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCaseStudyCategoryItem(int id)
        {
            var caseStudyCategoryItem = await _context.CaseStudyCategoryItems.FindAsync(id);
            if (caseStudyCategoryItem == null)
            {
                return NotFound();
            }

            _context.CaseStudyCategoryItems.Remove(caseStudyCategoryItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CaseStudyCategoryItemExists(int id)
        {
            return _context.CaseStudyCategoryItems.Any(e => e.Id == id);
        }
    }
}
