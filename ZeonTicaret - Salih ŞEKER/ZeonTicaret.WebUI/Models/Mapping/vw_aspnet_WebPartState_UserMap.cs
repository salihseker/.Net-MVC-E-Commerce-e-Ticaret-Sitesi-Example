using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class vw_aspnet_WebPartState_UserMap : EntityTypeConfiguration<vw_aspnet_WebPartState_User>
    {
        public vw_aspnet_WebPartState_UserMap()
        {
            // Primary Key
            this.HasKey(t => t.LastUpdatedDate);

            // Properties
            // Table & Column Mappings
            this.ToTable("vw_aspnet_WebPartState_User");
            this.Property(t => t.PathId).HasColumnName("PathId");
            this.Property(t => t.UserId).HasColumnName("UserId");
            this.Property(t => t.DataSize).HasColumnName("DataSize");
            this.Property(t => t.LastUpdatedDate).HasColumnName("LastUpdatedDate");
        }
    }
}
