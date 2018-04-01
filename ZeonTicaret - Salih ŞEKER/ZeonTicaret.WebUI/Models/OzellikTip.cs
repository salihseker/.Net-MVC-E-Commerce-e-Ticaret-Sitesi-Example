using System;
using System.Collections.Generic;

namespace ZeonTicaret.WebUI.Models
{
    public partial class OzellikTip
    {
        public OzellikTip()
        {
            this.OzellikDegers = new List<OzellikDeger>();
            this.UrunOzelliks = new List<UrunOzellik>();
        }

        public int Id { get; set; }
        public string Adi { get; set; }
        public string Aciklama { get; set; }
        public int KategoriID { get; set; }
        public virtual Kategori Kategori { get; set; }
        public virtual ICollection<OzellikDeger> OzellikDegers { get; set; }
        public virtual ICollection<UrunOzellik> UrunOzelliks { get; set; }
    }
}
