using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class aspnet_ProfileMap : EntityTypeConfiguration<aspnet_Profile>
    {
        public aspnet_ProfileMap()
        {
            // Primary Key
            this.HasKey(t => t.UserId);

            // Properties
            this.Property(t => t.PropertyNames)
                .IsRequired();

            this.Property(t => t.PropertyValuesString)
                .IsRequired();

            this.Property(t => t.PropertyValuesBinary)
                .IsRequired();

            // Table & Column Mappings
            this.ToTable("aspnet_Profile");
            this.Property(t => t.UserId).HasColumnName("UserId");
            this.Property(t => t.PropertyNames).HasColumnName("PropertyNames");
            this.Property(t => t.PropertyValuesString).HasColumnName("PropertyValuesString");
            this.Property(t => t.PropertyValuesBinary).HasColumnName("PropertyValuesBinary");
            this.Property(t => t.LastUpdatedDate).HasColumnName("LastUpdatedDate");

            // Relationships
            this.HasRequired(t => t.aspnet_Users)
                .WithOptional(t => t.aspnet_Profile);

        }
    }
}
