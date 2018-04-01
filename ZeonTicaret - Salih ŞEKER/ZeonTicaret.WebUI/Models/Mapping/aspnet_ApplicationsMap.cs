using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class aspnet_ApplicationsMap : EntityTypeConfiguration<aspnet_Applications>
    {
        public aspnet_ApplicationsMap()
        {
            // Primary Key
            this.HasKey(t => t.ApplicationId);

            // Properties
            this.Property(t => t.ApplicationName)
                .IsRequired()
                .HasMaxLength(256);

            this.Property(t => t.LoweredApplicationName)
                .IsRequired()
                .HasMaxLength(256);

            this.Property(t => t.Description)
                .HasMaxLength(256);

            // Table & Column Mappings
            this.ToTable("aspnet_Applications");
            this.Property(t => t.ApplicationName).HasColumnName("ApplicationName");
            this.Property(t => t.LoweredApplicationName).HasColumnName("LoweredApplicationName");
            this.Property(t => t.ApplicationId).HasColumnName("ApplicationId");
            this.Property(t => t.Description).HasColumnName("Description");
        }
    }
}
