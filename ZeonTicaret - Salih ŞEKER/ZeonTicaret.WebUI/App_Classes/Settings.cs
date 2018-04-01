using System;
using System.Collections.Generic;
using System.Configuration;
using System.Drawing;
using System.Linq;
using System.Web;

namespace ZeonTicaret.WebUI.App_Classes
{
    public class Settings
    {
        public static Size UrunOrtaBoyut
        {
            get
            {
                Size sz = new Size();
                sz.Width = Convert.ToInt32(ConfigurationManager.AppSettings["UrunOrtaWidth"].ToString());
                sz.Height = Convert.ToInt32(ConfigurationManager.AppSettings["UrunOrtaHeight"].ToString());
                return sz;
            }

        }


        public static Size UrunBuyukBoyut
        {
            get
            {
                Size sz = new Size();
                sz.Width = Convert.ToInt32(ConfigurationManager.AppSettings["UrunBuyukWidth"].ToString());
                sz.Height = Convert.ToInt32(ConfigurationManager.AppSettings["UrunBuyukHeight"].ToString());
                return sz;
            }

        }

        public static Size SliderResimBoyut
        {
            get
            {
                Size sz = new Size();
                sz.Width = Convert.ToInt32(ConfigurationManager.AppSettings["SliderWidth"].ToString());
                sz.Height = Convert.ToInt32(ConfigurationManager.AppSettings["SliderHeight"].ToString());
                return sz;
            }

        }
    }


}