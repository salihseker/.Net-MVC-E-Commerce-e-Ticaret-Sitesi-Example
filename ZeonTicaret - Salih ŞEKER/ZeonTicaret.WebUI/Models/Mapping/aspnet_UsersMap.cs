using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class aspnet_UsersMap : EntityTypeConfiguration<aspnet_Users>
    {
        public aspnet_UsersMap()
        {
            // Primary Key
            this.HasKey(t => t.UserId);

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
            this.ToTable("aspnet_Users");
            this.Property(t => t.ApplicationId).HasColumnName("ApplicationId");
            this.Property(t => t.UserId).HasColumnName("UserId");
            this.Property(t => t.UserName).HasColumnName("UserName");
            this.Property(t => t.LoweredUserName).HasColumnName("LoweredUserName");
            this.Property(t => t.MobileAlias).HasColumnName("MobileAlias");
            this.Property(t => t.IsAnonymous).HasColumnName("IsAnonymous");
            this.Property(t => t.LastActivityDate).HasColumnName("LastActivityDate");

            // Relationships
            this.HasRequired(t => t.aspnet_Applications)
                .WithMany(t => t.aspnet_Users)
                .HasForeignKey(d => d.ApplicationId);

        }
    }
}
