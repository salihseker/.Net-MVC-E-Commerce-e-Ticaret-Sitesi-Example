using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class vw_aspnet_WebPartState_PathsMap : EntityTypeConfiguration<vw_aspnet_WebPartState_Paths>
    {
        public vw_aspnet_WebPartState_PathsMap()
        {
            // Primary Key
            this.HasKey(t => new { t.ApplicationId, t.PathId, t.Path, t.LoweredPath });

            // Properties
            this.Property(t => t.Path)
                .IsRequired()
                .HasMaxLength(256);

            this.Property(t => t.LoweredPath)
                .IsRequired()
                .HasMaxLength(256);

            // Table & Column Mappings
            this.ToTable("vw_aspnet_WebPartState_Paths");
            this.Property(t => t.ApplicationId).HasColumnName("ApplicationId");
            this.Property(t => t.PathId).HasColumnName("PathId");
            this.Property(t => t.Path).HasColumnName("Path");
            this.Property(t => t.LoweredPath).HasColumnName("LoweredPath");
        }
    }
}
