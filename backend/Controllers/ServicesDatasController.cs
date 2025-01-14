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
    public class ServicesDatasController : ControllerBase
    {
        private readonly backendDbContext _context;

        public ServicesDatasController(backendDbContext context)
        {
            _context = context;
        }

        // GET: api/ServicesDatas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ServicesData>>> GetServicesDatas()
        {
            return await _context.ServicesDatas.ToListAsync();
        }

        // GET: api/ServicesDatas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ServicesData>> GetServicesData(string id)
        {
            var servicesData = await _context.ServicesDatas.FindAsync(id);

            if (servicesData == null)
            {
                return NotFound();
            }

            return servicesData;
        }

        // PUT: api/ServicesDatas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutServicesData(string id, ServicesData servicesData)
        {
            if (id != servicesData.ImagePath)
            {
                return BadRequest();
            }

            _context.Entry(servicesData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServicesDataExists(id))
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

        // POST: api/ServicesDatas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ServicesData>> PostServicesData(ServicesData servicesData)
        {
            _context.ServicesDatas.Add(servicesData);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ServicesDataExists(servicesData.ImagePath))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetServicesData", new { id = servicesData.ImagePath }, servicesData);
        }

        // DELETE: api/ServicesDatas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteServicesData(string id)
        {
            var servicesData = await _context.ServicesDatas.FindAsync(id);
            if (servicesData == null)
            {
                return NotFound();
            }

            _context.ServicesDatas.Remove(servicesData);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ServicesDataExists(string id)
        {
            return _context.ServicesDatas.Any(e => e.ImagePath == id);
        }
    }
}
