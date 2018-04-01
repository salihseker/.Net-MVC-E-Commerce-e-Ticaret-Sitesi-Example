using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class aspnet_RolesMap : EntityTypeConfiguration<aspnet_Roles>
    {
        public aspnet_RolesMap()
        {
            // Primary Key
            this.HasKey(t => t.RoleId);

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
            this.ToTable("aspnet_Roles");
            this.Property(t => t.ApplicationId).HasColumnName("ApplicationId");
            this.Property(t => t.RoleId).HasColumnName("RoleId");
            this.Property(t => t.RoleName).HasColumnName("RoleName");
            this.Property(t => t.LoweredRoleName).HasColumnName("LoweredRoleName");
            this.Property(t => t.Description).HasColumnName("Description");

            // Relationships
            this.HasMany(t => t.aspnet_Users)
                .WithMany(t => t.aspnet_Roles)
                .Map(m =>
                    {
                        m.ToTable("aspnet_UsersInRoles");
                        m.MapLeftKey("RoleId");
                        m.MapRightKey("UserId");
                    });

            this.HasRequired(t => t.aspnet_Applications)
                .WithMany(t => t.aspnet_Roles)
                .HasForeignKey(d => d.ApplicationId);

        }
    }
}
