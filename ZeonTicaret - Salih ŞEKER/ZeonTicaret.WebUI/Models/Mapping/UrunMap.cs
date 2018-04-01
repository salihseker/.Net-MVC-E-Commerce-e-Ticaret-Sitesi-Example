using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class UrunMap : EntityTypeConfiguration<Urun>
    {
        public UrunMap()
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
            this.ToTable("Urun");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.Adi).HasColumnName("Adi");
            this.Property(t => t.Aciklama).HasColumnName("Aciklama");
            this.Property(t => t.AlisFiyat).HasColumnName("AlisFiyat");
            this.Property(t => t.SatisFiyat).HasColumnName("SatisFiyat");
            this.Property(t => t.EklenmeTarihi).HasColumnName("EklenmeTarihi");
            this.Property(t => t.SonKullanmaTarihi).HasColumnName("SonKullanmaTarihi");
            this.Property(t => t.KategoriID).HasColumnName("KategoriID");
            this.Property(t => t.MarkaID).HasColumnName("MarkaID");

            // Relationships
            this.HasOptional(t => t.Kategori)
                .WithMany(t => t.Uruns)
                .HasForeignKey(d => d.KategoriID);
            this.HasOptional(t => t.Marka)
                .WithMany(t => t.Uruns)
                .HasForeignKey(d => d.MarkaID);

        }
    }
}
