using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class UrunOzellikMap : EntityTypeConfiguration<UrunOzellik>
    {
        public UrunOzellikMap()
        {
            // Primary Key
            this.HasKey(t => new { t.UrunID, t.OzellikTipID, t.OzellikDegerID });

            // Properties
            this.Property(t => t.UrunID)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            this.Property(t => t.OzellikTipID)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            this.Property(t => t.OzellikDegerID)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            // Table & Column Mappings
            this.ToTable("UrunOzellik");
            this.Property(t => t.UrunID).HasColumnName("UrunID");
            this.Property(t => t.OzellikTipID).HasColumnName("OzellikTipID");
            this.Property(t => t.OzellikDegerID).HasColumnName("OzellikDegerID");

            // Relationships
            this.HasRequired(t => t.OzellikDeger)
                .WithMany(t => t.UrunOzelliks)
                .HasForeignKey(d => d.OzellikDegerID);
            this.HasRequired(t => t.OzellikTip)
                .WithMany(t => t.UrunOzelliks)
                .HasForeignKey(d => d.OzellikTipID);
            this.HasRequired(t => t.Urun)
                .WithMany(t => t.UrunOzelliks)
                .HasForeignKey(d => d.UrunID);

        }
    }
}
