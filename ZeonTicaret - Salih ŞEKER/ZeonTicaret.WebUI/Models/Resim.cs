using System;
using System.Collections.Generic;

namespace ZeonTicaret.WebUI.Models
{
    public partial class Resim
    {
        public Resim()
        {
            this.Kategoris = new List<Kategori>();
            this.Markas = new List<Marka>();
        }

        public int Id { get; set; }
        public string BuyukYol { get; set; }
        public string OrtaYol { get; set; }
        public string KucukYol { get; set; }
        public Nullable<bool> Varsayilan { get; set; }
        public Nullable<byte> SiraNo { get; set; }
        public Nullable<int> UrunID { get; set; }
        public virtual ICollection<Kategori> Kategoris { get; set; }
        public virtual ICollection<Marka> Markas { get; set; }
        public virtual Urun Urun { get; set; }
    }
}
