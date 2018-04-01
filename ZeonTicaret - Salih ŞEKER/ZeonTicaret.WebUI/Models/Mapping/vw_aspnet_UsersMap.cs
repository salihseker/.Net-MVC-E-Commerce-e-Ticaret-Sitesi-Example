using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class vw_aspnet_UsersMap : EntityTypeConfiguration<vw_aspnet_Users>
    {
        public vw_aspnet_UsersMap()
        {
            // Primary Key
            this.HasKey(t => new { t.ApplicationId, t.UserId, t.UserName, t.LoweredUserName, t.IsAnonymous, t.LastActivityDate });

            // Properties
            this.Property(t => t.UserName)
                .IsRequired()
                .HasMaxLength(256);

            this.Property(t => t.LoweredUserName)
                .IsRequired()
                .HasMaxLength(256);

            this.Property(t => t.MobileAlias)
                .HasMaxLength(16);

            // Table & Column Mappings
            this.ToTable("vw_aspnet_Users");
            this.Property(t => t.ApplicationId).HasColumnName("ApplicationId");
            this.Property(t => t.UserId).HasColumnName("UserId");
            this.Property(t => t.UserName).HasColumnName("UserName");
            this.Property(t => t.LoweredUserName).HasColumnName("LoweredUserName");
            this.Property(t => t.MobileAlias).HasColumnName("MobileAlias");
            this.Property(t => t.IsAnonymous).HasColumnName("IsAnonymous");
            this.Property(t => t.LastActivityDate).HasColumnName("LastActivityDate");
        }
    }
}
