using FruitCollectGameapi.Data;
using FruitCollectGameapi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FruitCollectGameapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScoreController : ControllerBase
    {
        private readonly GameContext _context;

        public ScoreController(GameContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> SubmitScore([FromBody] Score score)
        {
            _context.Scores.Add(score);
            await _context.SaveChangesAsync();
            return Ok(score);
        }

        [HttpGet("highscores")]
        public async Task<IActionResult> GetHighScores()
        {
            var scores = await _context.Scores
                .OrderByDescending(s => s.Points)
                .Take(10)
                .ToListAsync();

            return Ok(scores);
        }
        
        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetUserScores(int userId)
        {
            var scores = await _context.Scores
                .Where(s => s.UserId == userId)
                .OrderByDescending(s => s.Date)
                .ToListAsync();
                
            return Ok(scores);
        }
    }
}
