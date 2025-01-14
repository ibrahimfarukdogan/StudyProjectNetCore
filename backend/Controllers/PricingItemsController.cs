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
    public class PricingItemsController : ControllerBase
    {
        private readonly backendDbContext _context;

        public PricingItemsController(backendDbContext context)
        {
            _context = context;
        }

        // GET: api/PricingItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PricingItem>>> GetPricingItem()
        {
            return await _context.PricingItem.ToListAsync();
        }

        // GET: api/PricingItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PricingItem>> GetPricingItem(int id)
        {
            var pricingItem = await _context.PricingItem.FindAsync(id);

            if (pricingItem == null)
            {
                return NotFound();
            }

            return pricingItem;
        }

        // PUT: api/PricingItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPricingItem(int id, PricingItem pricingItem)
        {
            if (id != pricingItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(pricingItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PricingItemExists(id))
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

        // POST: api/PricingItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PricingItem>> PostPricingItem(PricingItem pricingItem)
        {
            _context.PricingItem.Add(pricingItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPricingItem", new { id = pricingItem.Id }, pricingItem);
        }

        // DELETE: api/PricingItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePricingItem(int id)
        {
            var pricingItem = await _context.PricingItem.FindAsync(id);
            if (pricingItem == null)
            {
                return NotFound();
            }

            _context.PricingItem.Remove(pricingItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PricingItemExists(int id)
        {
            return _context.PricingItem.Any(e => e.Id == id);
        }
    }
}
