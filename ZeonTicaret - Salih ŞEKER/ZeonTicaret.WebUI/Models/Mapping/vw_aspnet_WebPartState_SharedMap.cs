using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class vw_aspnet_WebPartState_SharedMap : EntityTypeConfiguration<vw_aspnet_WebPartState_Shared>
    {
        public vw_aspnet_WebPartState_SharedMap()
        {
            // Primary Key
            this.HasKey(t => new { t.PathId, t.LastUpdatedDate });

            // Properties
            // Table & Column Mappings
            this.ToTable("vw_aspnet_WebPartState_Shared");
            this.Property(t => t.PathId).HasColumnName("PathId");
            this.Property(t => t.DataSize).HasColumnName("DataSize");
            this.Property(t => t.LastUpdatedDate).HasColumnName("LastUpdatedDate");
        }
    }
}
