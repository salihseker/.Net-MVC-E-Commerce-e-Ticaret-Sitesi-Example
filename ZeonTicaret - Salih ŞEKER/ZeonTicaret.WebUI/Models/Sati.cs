using System;
using System.Collections.Generic;

namespace ZeonTicaret.WebUI.Models
{
    public partial class Sati
    {
        public Sati()
        {
            this.SatisDetays = new List<SatisDetay>();
        }

        public int Id { get; set; }
        public Nullable<System.Guid> MusteriID { get; set; }
        public System.DateTime SatisTarihi { get; set; }
        public decimal ToplamTutar { get; set; }
        public bool SepetteMi { get; set; }
        public Nullable<int> KargoID { get; set; }
        public Nullable<int> SiparisDurumID { get; set; }
        public string KargoTakipNo { get; set; }
        public virtual Kargo Kargo { get; set; }
        public virtual Musteri Musteri { get; set; }
        public virtual SiparisDurum SiparisDurum { get; set; }
        public virtual ICollection<SatisDetay> SatisDetays { get; set; }
    }
}
