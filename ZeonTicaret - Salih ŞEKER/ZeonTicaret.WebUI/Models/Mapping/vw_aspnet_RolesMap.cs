using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class vw_aspnet_RolesMap : EntityTypeConfiguration<vw_aspnet_Roles>
    {
        public vw_aspnet_RolesMap()
        {
            // Primary Key
            this.HasKey(t => new { t.ApplicationId, t.RoleId, t.RoleName, t.LoweredRoleName });

            // Properties
            this.Property(t => t.RoleName)
                .IsRequired()
                .HasMaxLength(256);

            this.Property(t => t.LoweredRoleName)
                .IsRequired()
                .HasMaxLength(256);

            this.Property(t => t.Description)
                .HasMaxLength(256);

            // Table & Column Mappings
            this.ToTable("vw_aspnet_Roles");
            this.Property(t => t.ApplicationId).HasColumnName("ApplicationId");
            this.Property(t => t.RoleId).HasColumnName("RoleId");
            this.Property(t => t.RoleName).HasColumnName("RoleName");
            this.Property(t => t.LoweredRoleName).HasColumnName("LoweredRoleName");
            this.Property(t => t.Description).HasColumnName("Description");
        }
    }
}
