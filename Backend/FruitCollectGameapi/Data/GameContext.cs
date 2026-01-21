using FruitCollectGameapi.Models;
using Microsoft.EntityFrameworkCore;

namespace FruitCollectGameapi.Data
{
    public class GameContext : DbContext
    {
        public GameContext(DbContextOptions<GameContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Score> Scores { get; set; }
    }
}
