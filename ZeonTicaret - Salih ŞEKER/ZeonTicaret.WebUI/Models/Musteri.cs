using System;
using System.Collections.Generic;

namespace ZeonTicaret.WebUI.Models
{
    public partial class Musteri
    {
        public Musteri()
        {
            this.MusteriAdres = new List<MusteriAdre>();
            this.Satis = new List<Sati>();
        }

        public System.Guid Id { get; set; }
        public string Adi { get; set; }
        public string Soyadi { get; set; }
        public string KullaniciAdi { get; set; }
        public string Email { get; set; }
        public string Telefon { get; set; }
        public virtual aspnet_Users aspnet_Users { get; set; }
        public virtual ICollection<MusteriAdre> MusteriAdres { get; set; }
        public virtual ICollection<Sati> Satis { get; set; }
    }
}
