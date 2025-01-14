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
    public class AlternativeModsController : ControllerBase
    {
        private readonly backendDbContext _context;

        public AlternativeModsController(backendDbContext context)
        {
            _context = context;
        }

        // GET: api/AlternativeMods
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AlternativeMods>>> GetAlternativeMods()
        {
            return await _context.AlternativeMods.ToListAsync();
        }

        // GET: api/AlternativeMods/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AlternativeMods>> GetAlternativeMods(int id)
        {
            var alternativeMods = await _context.AlternativeMods.FindAsync(id);

            if (alternativeMods == null)
            {
                return NotFound();
            }

            return alternativeMods;
        }

        // PUT: api/AlternativeMods/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAlternativeMods(int id, AlternativeMods alternativeMods)
        {
            if (id != alternativeMods.Id)
            {
                return BadRequest();
            }

            _context.Entry(alternativeMods).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AlternativeModsExists(id))
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

        [HttpPatch("toggle/{id}")]
        public async Task<IActionResult> PatchAlternativeMods(int id)
        {
            var mod = await _context.AlternativeMods.FindAsync(id);
            if (mod == null)
            {
                return NotFound(); // Return error if mod not found
            }

            mod.AlternativeMod = !mod.AlternativeMod; // Toggle the boolean value of 'mod'
            await _context.SaveChangesAsync(); // Save changes to the database

            return Ok(mod); // Return the updated mod data
        }

        // POST: api/AlternativeMods
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AlternativeMods>> PostAlternativeMods(AlternativeMods alternativeMods)
        {
            _context.AlternativeMods.Add(alternativeMods);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAlternativeMods", new { id = alternativeMods.Id }, alternativeMods);
        }

        // DELETE: api/AlternativeMods/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAlternativeMods(int id)
        {
            var alternativeMods = await _context.AlternativeMods.FindAsync(id);
            if (alternativeMods == null)
            {
                return NotFound();
            }

            _context.AlternativeMods.Remove(alternativeMods);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AlternativeModsExists(int id)
        {
            return _context.AlternativeMods.Any(e => e.Id == id);
        }
    }
}
