namespace FruitCollectGameapi.Models
{
    public class Score
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int Points { get; set; }
        public int Level { get; set; }
        public DateTime Date { get; set; } = DateTime.UtcNow;
    }
}
