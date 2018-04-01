using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class vw_aspnet_ProfilesMap : EntityTypeConfiguration<vw_aspnet_Profiles>
    {
        public vw_aspnet_ProfilesMap()
        {
            // Primary Key
            this.HasKey(t => new { t.UserId, t.LastUpdatedDate });

            // Properties
            // Table & Column Mappings
            this.ToTable("vw_aspnet_Profiles");
            this.Property(t => t.UserId).HasColumnName("UserId");
            this.Property(t => t.LastUpdatedDate).HasColumnName("LastUpdatedDate");
            this.Property(t => t.DataSize).HasColumnName("DataSize");
        }
    }
}
