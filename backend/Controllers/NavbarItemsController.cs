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
    public class NavbarItemsController : ControllerBase
    {
        private readonly backendDbContext _context;

        public NavbarItemsController(backendDbContext context)
        {
            _context = context;
        }

        // GET: api/NavbarItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NavbarItem>>> GetNavbarItems()
        {
            return await _context.NavbarItems.ToListAsync();
        }

        // GET: api/NavbarItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NavbarItem>> GetNavbarItem(int id)
        {
            var navbarItem = await _context.NavbarItems.FindAsync(id);

            if (navbarItem == null)
            {
                return NotFound();
            }

            return navbarItem;
        }

        // PUT: api/NavbarItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNavbarItem(int id, NavbarItem navbarItem)
        {
            if (id != navbarItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(navbarItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NavbarItemExists(id))
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

        // POST: api/NavbarItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<NavbarItem>> PostNavbarItem(NavbarItem navbarItem)
        {
            _context.NavbarItems.Add(navbarItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNavbarItem", new { id = navbarItem.Id }, navbarItem);
        }

        // DELETE: api/NavbarItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNavbarItem(int id)
        {
            var navbarItem = await _context.NavbarItems.FindAsync(id);
            if (navbarItem == null)
            {
                return NotFound();
            }

            _context.NavbarItems.Remove(navbarItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NavbarItemExists(int id)
        {
            return _context.NavbarItems.Any(e => e.Id == id);
        }
    }
}
