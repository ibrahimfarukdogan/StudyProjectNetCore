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
    public class CaseStudyPostItemsController : ControllerBase
    {
        private readonly backendDbContext _context;

        public CaseStudyPostItemsController(backendDbContext context)
        {
            _context = context;
        }

        // GET: api/CaseStudyPostItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CaseStudyPostItem>>> GetCaseStudyPostItems()
        {
            return await _context.CaseStudyPostItems.ToListAsync();
        }

        // GET: api/CaseStudyPostItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CaseStudyPostItem>> GetCaseStudyPostItem(int id)
        {
            var caseStudyPostItem = await _context.CaseStudyPostItems.FindAsync(id);

            if (caseStudyPostItem == null)
            {
                return NotFound();
            }

            return caseStudyPostItem;
        }

        // PUT: api/CaseStudyPostItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCaseStudyPostItem(int id, CaseStudyPostItem caseStudyPostItem)
        {
            if (id != caseStudyPostItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(caseStudyPostItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CaseStudyPostItemExists(id))
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

        // POST: api/CaseStudyPostItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CaseStudyPostItem>> PostCaseStudyPostItem(CaseStudyPostItem caseStudyPostItem)
        {
            _context.CaseStudyPostItems.Add(caseStudyPostItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCaseStudyPostItem", new { id = caseStudyPostItem.Id }, caseStudyPostItem);
        }

        // DELETE: api/CaseStudyPostItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCaseStudyPostItem(int id)
        {
            var caseStudyPostItem = await _context.CaseStudyPostItems.FindAsync(id);
            if (caseStudyPostItem == null)
            {
                return NotFound();
            }

            _context.CaseStudyPostItems.Remove(caseStudyPostItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CaseStudyPostItemExists(int id)
        {
            return _context.CaseStudyPostItems.Any(e => e.Id == id);
        }
    }
}
