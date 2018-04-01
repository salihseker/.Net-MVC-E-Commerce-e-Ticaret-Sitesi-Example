using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class OzellikDegerMap : EntityTypeConfiguration<OzellikDeger>
    {
        public OzellikDegerMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            this.Property(t => t.Adi)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.Aciklama)
                .HasMaxLength(500);

            // Table & Column Mappings
            this.ToTable("OzellikDeger");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.Adi).HasColumnName("Adi");
            this.Property(t => t.Aciklama).HasColumnName("Aciklama");
            this.Property(t => t.OzellikTipID).HasColumnName("OzellikTipID");

            // Relationships
            this.HasRequired(t => t.OzellikTip)
                .WithMany(t => t.OzellikDegers)
                .HasForeignKey(d => d.OzellikTipID);

        }
    }
}
