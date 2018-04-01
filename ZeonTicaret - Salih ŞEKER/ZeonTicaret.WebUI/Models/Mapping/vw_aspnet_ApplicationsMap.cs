using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class vw_aspnet_ApplicationsMap : EntityTypeConfiguration<vw_aspnet_Applications>
    {
        public vw_aspnet_ApplicationsMap()
        {
            // Primary Key
            this.HasKey(t => new { t.ApplicationName, t.LoweredApplicationName, t.ApplicationId });

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
            this.ToTable("vw_aspnet_Applications");
            this.Property(t => t.ApplicationName).HasColumnName("ApplicationName");
            this.Property(t => t.LoweredApplicationName).HasColumnName("LoweredApplicationName");
            this.Property(t => t.ApplicationId).HasColumnName("ApplicationId");
            this.Property(t => t.Description).HasColumnName("Description");
        }
    }
}
