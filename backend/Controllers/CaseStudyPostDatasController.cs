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
    public class CaseStudyPostDatasController : ControllerBase
    {
        private readonly backendDbContext _context;

        public CaseStudyPostDatasController(backendDbContext context)
        {
            _context = context;
        }

        // GET: api/CaseStudyPostDatas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CaseStudyPostData>>> GetCaseStudyPostDatas()
        {
            return await _context.CaseStudyPostDatas.ToListAsync();
        }

        // GET: api/CaseStudyPostDatas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CaseStudyPostData>> GetCaseStudyPostData(string id)
        {
            var caseStudyPostData = await _context.CaseStudyPostDatas.FindAsync(id);

            if (caseStudyPostData == null)
            {
                return NotFound();
            }

            return caseStudyPostData;
        }

        // PUT: api/CaseStudyPostDatas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCaseStudyPostData(string id, CaseStudyPostData caseStudyPostData)
        {
            if (id != caseStudyPostData.Type)
            {
                return BadRequest();
            }

            _context.Entry(caseStudyPostData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CaseStudyPostDataExists(id))
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

        // POST: api/CaseStudyPostDatas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CaseStudyPostData>> PostCaseStudyPostData(CaseStudyPostData caseStudyPostData)
        {
            _context.CaseStudyPostDatas.Add(caseStudyPostData);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CaseStudyPostDataExists(caseStudyPostData.Type))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCaseStudyPostData", new { id = caseStudyPostData.Type }, caseStudyPostData);
        }

        // DELETE: api/CaseStudyPostDatas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCaseStudyPostData(string id)
        {
            var caseStudyPostData = await _context.CaseStudyPostDatas.FindAsync(id);
            if (caseStudyPostData == null)
            {
                return NotFound();
            }

            _context.CaseStudyPostDatas.Remove(caseStudyPostData);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CaseStudyPostDataExists(string id)
        {
            return _context.CaseStudyPostDatas.Any(e => e.Type == id);
        }
    }
}
