using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class aspnet_PersonalizationPerUserMap : EntityTypeConfiguration<aspnet_PersonalizationPerUser>
    {
        public aspnet_PersonalizationPerUserMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            this.Property(t => t.PageSettings)
                .IsRequired();

            // Table & Column Mappings
            this.ToTable("aspnet_PersonalizationPerUser");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.PathId).HasColumnName("PathId");
            this.Property(t => t.UserId).HasColumnName("UserId");
            this.Property(t => t.PageSettings).HasColumnName("PageSettings");
            this.Property(t => t.LastUpdatedDate).HasColumnName("LastUpdatedDate");

            // Relationships
            this.HasOptional(t => t.aspnet_Paths)
                .WithMany(t => t.aspnet_PersonalizationPerUser)
                .HasForeignKey(d => d.PathId);
            this.HasOptional(t => t.aspnet_Users)
                .WithMany(t => t.aspnet_PersonalizationPerUser)
                .HasForeignKey(d => d.UserId);

        }
    }
}
