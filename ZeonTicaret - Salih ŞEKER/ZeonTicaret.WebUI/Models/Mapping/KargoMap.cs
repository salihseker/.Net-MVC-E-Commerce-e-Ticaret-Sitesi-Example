using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class KargoMap : EntityTypeConfiguration<Kargo>
    {
        public KargoMap()
        {
            // Primary Key
            this.HasKey(t => t.Id);

            // Properties
            this.Property(t => t.SirketAdi)
                .IsRequired()
                .HasMaxLength(150);

            this.Property(t => t.Adres)
                .HasMaxLength(500);

            this.Property(t => t.Telefon)
                .IsFixedLength()
                .HasMaxLength(15);

            this.Property(t => t.Website)
                .HasMaxLength(50);

            this.Property(t => t.Email)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Kargo");
            this.Property(t => t.Id).HasColumnName("Id");
            this.Property(t => t.SirketAdi).HasColumnName("SirketAdi");
            this.Property(t => t.Adres).HasColumnName("Adres");
            this.Property(t => t.Telefon).HasColumnName("Telefon");
            this.Property(t => t.Website).HasColumnName("Website");
            this.Property(t => t.Email).HasColumnName("Email");
        }
    }
}
