using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class aspnet_PersonalizationAllUsersMap : EntityTypeConfiguration<aspnet_PersonalizationAllUsers>
    {
        public aspnet_PersonalizationAllUsersMap()
        {
            // Primary Key
            this.HasKey(t => t.PathId);

            // Properties
            this.Property(t => t.PageSettings)
                .IsRequired();

            // Table & Column Mappings
            this.ToTable("aspnet_PersonalizationAllUsers");
            this.Property(t => t.PathId).HasColumnName("PathId");
            this.Property(t => t.PageSettings).HasColumnName("PageSettings");
            this.Property(t => t.LastUpdatedDate).HasColumnName("LastUpdatedDate");

            // Relationships
            this.HasRequired(t => t.aspnet_Paths)
                .WithOptional(t => t.aspnet_PersonalizationAllUsers);

        }
    }
}
