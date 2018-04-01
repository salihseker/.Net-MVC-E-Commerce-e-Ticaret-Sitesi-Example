using System;
using System.Collections.Generic;

namespace ZeonTicaret.WebUI.Models
{
    public partial class UrunOzellik
    {
        public int UrunID { get; set; }
        public int OzellikTipID { get; set; }
        public int OzellikDegerID { get; set; }
        public virtual OzellikDeger OzellikDeger { get; set; }
        public virtual OzellikTip OzellikTip { get; set; }
        public virtual Urun Urun { get; set; }
    }
}
