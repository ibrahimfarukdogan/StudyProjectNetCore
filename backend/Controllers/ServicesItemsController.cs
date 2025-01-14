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
    public class ServicesItemsController : ControllerBase
    {
        private readonly backendDbContext _context;

        public ServicesItemsController(backendDbContext context)
        {
            _context = context;
        }

        // GET: api/ServicesItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ServicesItem>>> GetServicesItems()
        {
            return await _context.ServicesItems.ToListAsync();
        }

        // GET: api/ServicesItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ServicesItem>> GetServicesItem(int id)
        {
            var servicesItem = await _context.ServicesItems.FindAsync(id);

            if (servicesItem == null)
            {
                return NotFound();
            }

            return servicesItem;
        }

        // PUT: api/ServicesItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutServicesItem(int id, ServicesItem servicesItem)
        {
            if (id != servicesItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(servicesItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServicesItemExists(id))
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

        // POST: api/ServicesItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ServicesItem>> PostServicesItem(ServicesItem servicesItem)
        {
            _context.ServicesItems.Add(servicesItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetServicesItem", new { id = servicesItem.Id }, servicesItem);
        }

        // DELETE: api/ServicesItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteServicesItem(int id)
        {
            var servicesItem = await _context.ServicesItems.FindAsync(id);
            if (servicesItem == null)
            {
                return NotFound();
            }

            _context.ServicesItems.Remove(servicesItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ServicesItemExists(int id)
        {
            return _context.ServicesItems.Any(e => e.Id == id);
        }
    }
}
