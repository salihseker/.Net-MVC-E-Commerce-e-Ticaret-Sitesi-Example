using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ZeonTicaret.WebUI.Models;
namespace ZeonTicaret.WebUI.App_Classes
{
    public class Context
    {
        private static MVC_eTicaretContext baglanti;

        public static MVC_eTicaretContext Baglanti
        {
            get
            {
                if (baglanti == null)
                    baglanti = new MVC_eTicaretContext();
                return baglanti;
            }
            set { baglanti = value; }
        }    
    }
}