using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class SatiMap : EntityTypeConfiguration<Sati>
    {
        public SatiMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            this.Property(t => t.KargoTakipNo)
                .HasMaxLength(20);

            // Table & Column Mappings
            this.ToTable("Satis");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.MusteriID).HasColumnName("MusteriID");
            this.Property(t => t.SatisTarihi).HasColumnName("SatisTarihi");
            this.Property(t => t.ToplamTutar).HasColumnName("ToplamTutar");
            this.Property(t => t.SepetteMi).HasColumnName("SepetteMi");
            this.Property(t => t.KargoID).HasColumnName("KargoID");
            this.Property(t => t.SiparisDurumID).HasColumnName("SiparisDurumID");
            this.Property(t => t.KargoTakipNo).HasColumnName("KargoTakipNo");

            // Relationships
            this.HasOptional(t => t.Kargo)
                .WithMany(t => t.Satis)
                .HasForeignKey(d => d.KargoID);
            this.HasOptional(t => t.Musteri)
                .WithMany(t => t.Satis)
                .HasForeignKey(d => d.MusteriID);
            this.HasOptional(t => t.SiparisDurum)
                .WithMany(t => t.Satis)
                .HasForeignKey(d => d.SiparisDurumID);

        }
    }
}
