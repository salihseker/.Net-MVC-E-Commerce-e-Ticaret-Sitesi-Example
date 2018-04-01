using System;
using System.Collections.Generic;
using System.Configuration;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using ZeonTicaret.WebUI.App_Classes;
using ZeonTicaret.WebUI.Models;

namespace ZeonTicaret.WebUI.Controllers
{
    public class AdminController : Controller
    {
        // GET: Admin
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Urunler()
        {
            return View(Context.Baglanti.Uruns.ToList());
        }
        public ActionResult UrunEkle()
        {
            ViewBag.Kategoriler = Context.Baglanti.Kategoris.ToList();
            ViewBag.Markalar = Context.Baglanti.Markas.ToList();
            return View();
        }
        [HttpPost]
        public ActionResult UrunEkle(Urun urn)
        {
            Context.Baglanti.Uruns.Add(urn);
            Context.Baglanti.SaveChanges();
            return RedirectToAction("Urunler");
        }

        public ActionResult UrunSil(int id)
        {
            Urun urn = Context.Baglanti.Uruns.FirstOrDefault(x => x.Id == id);
            Context.Baglanti.Uruns.Remove(urn);
            Context.Baglanti.SaveChanges();
            return RedirectToAction("Urunler");
        }
        public ActionResult Markalar()
        {
            return View(Context.Baglanti.Markas.ToList());
        }
        public ActionResult MarkaEkle()
        {
            return View();
        }

        [HttpPost]
        public ActionResult MarkaEkle(Marka mrk, HttpPostedFileBase fileUpload)
        {
            int resimId = -1;
            if (fileUpload != null)
            {
                Image img = Image.FromStream(fileUpload.InputStream);
                int width = Convert.ToInt32(ConfigurationManager.AppSettings["MarkaWidth"].ToString());
                int height = Convert.ToInt32(ConfigurationManager.AppSettings["MarkaHeight"].ToString());

                string name = "/Content/MarkaResim/" + Guid.NewGuid() + Path.GetExtension(fileUpload.FileName);

                Bitmap bm = new Bitmap(img, width, height);
                bm.Save(Server.MapPath(name));

                Resim rsm = new Resim();
                rsm.OrtaYol = name;

                Context.Baglanti.Resims.Add(rsm);
                Context.Baglanti.SaveChanges();

                if (rsm.Id != null)
                    resimId = rsm.Id;
            }
            if (resimId != -1)
                mrk.ResimID = resimId;
            Context.Baglanti.Markas.Add(mrk);
            Context.Baglanti.SaveChanges();
            return RedirectToAction("Markalar");
        }
        public ActionResult MarkaSil(int id)
        {
            Marka mrk = Context.Baglanti.Markas.FirstOrDefault(x => x.Id == id);
            Context.Baglanti.Markas.Remove(mrk);
            Context.Baglanti.SaveChanges();
            return RedirectToAction("Markalar");
        }
        public ActionResult Kategoriler()
        {
            return View(Context.Baglanti.Kategoris.ToList());
        }
        public ActionResult KategoriEkle()
        {
            return View();
        }

        [HttpPost]
        public ActionResult KategoriEkle(Kategori ktg)
        {
            Context.Baglanti.Kategoris.Add(ktg);
            Context.Baglanti.SaveChanges();
            return RedirectToAction("Kategoriler");
        }

        public ActionResult KategoriSil(int id)
        {
            Kategori ktg = Context.Baglanti.Kategoris.FirstOrDefault(x => x.Id == id);
            Context.Baglanti.Kategoris.Remove(ktg);
            Context.Baglanti.SaveChanges();
            return RedirectToAction("Kategoriler");
        }
        public ActionResult OzellikTipleri()
        {
            return View(Context.Baglanti.OzellikTips.ToList());
        }

        public ActionResult OzellikTipEkle()
        {
            return View(Context.Baglanti.Kategoris.ToList());
        }
        [HttpPost]
        public ActionResult OzellikTipEkle(OzellikTip ot)
        {
            Context.Baglanti.OzellikTips.Add(ot);
            Context.Baglanti.SaveChanges();
            return RedirectToAction("OzellikTipleri");
        }
        public ActionResult OzellikTipSil(int id)
        {
            OzellikTip ot = Context.Baglanti.OzellikTips.FirstOrDefault(x => x.Id == id);
            Context.Baglanti.OzellikTips.Remove(ot);
            Context.Baglanti.SaveChanges();
            return RedirectToAction("OzellikTipleri");
        }
        public ActionResult OzellikDegerleri()
        {
            return View(Context.Baglanti.OzellikDegers.ToList());
        }

        public ActionResult OzellikDegerEkle()
        {
            return View(Context.Baglanti.OzellikTips.ToList());
        }
        [HttpPost]
        public ActionResult OzellikDegerEkle(OzellikDeger od)
        {
            Context.Baglanti.OzellikDegers.Add(od);
            Context.Baglanti.SaveChanges();
            return RedirectToAction("OzellikDegerleri");
        }

        public ActionResult OzellikDegerSil(int id)
        {
            OzellikDeger od = Context.Baglanti.OzellikDegers.FirstOrDefault(x => x.Id == id);
            Context.Baglanti.OzellikDegers.Remove(od);
            Context.Baglanti.SaveChanges();
            return RedirectToAction("OzellikDegerleri");
        }
        public ActionResult UrunOzellikleri()
        {
            return View(Context.Baglanti.UrunOzelliks.ToList());
        }

        public ActionResult UrunOzellikSil(int urunID, int tipID, int degerID)
        {
            UrunOzellik uo = Context.Baglanti.UrunOzelliks.FirstOrDefault(x => x.UrunID == urunID && x.OzellikTipID == tipID && x.OzellikDegerID == degerID);
            Context.Baglanti.UrunOzelliks.Remove(uo);
            Context.Baglanti.SaveChanges();
            return RedirectToAction("UrunOzellikleri");
        }
        public ActionResult UrunOzellikEkle()
        {
            return View(Context.Baglanti.Uruns.ToList());
        }

        public PartialViewResult UrunOzellikTipWidget(int? katId)
        {
            if (katId != null)
            {
                var data = Context.Baglanti.OzellikTips.Where(x => x.KategoriID == katId).ToList();
                return PartialView(data);
            }
            else
            {
                var data = Context.Baglanti.OzellikTips.ToList();
                return PartialView(data);
            }
        }

        public PartialViewResult UrunOzellikDegerWidget(int? tipId)
        {
            if (tipId != null)
            {
                var data = Context.Baglanti.OzellikDegers.Where(x => x.OzellikTipID == tipId).ToList();
                return PartialView(data);
            }
            else
            {
                var data = Context.Baglanti.OzellikDegers.ToList();
                return PartialView(data);
            }
        }
        [HttpPost]
        public ActionResult UrunOzellikEkle(UrunOzellik uo)
        {
            Context.Baglanti.UrunOzelliks.Add(uo);
            Context.Baglanti.SaveChanges();
            return RedirectToAction("UrunOzellikleri");
        }

        public ActionResult UrunResimEkle(int id)
        {
            return View(id);
        }

        [HttpPost]
        public ActionResult UrunResimEkle(int uId, HttpPostedFileBase fileupload)
        {
            if (fileupload != null)
            {
                Image img = Image.FromStream(fileupload.InputStream);

                Bitmap ortaResim = new Bitmap(img, Settings.UrunOrtaBoyut);
                Bitmap buyukResim = new Bitmap(img, Settings.UrunBuyukBoyut);

                string ortaYol = "/Content/UrunResim/Orta/" + Guid.NewGuid() + Path.GetExtension(fileupload.FileName);
                string buyukYol = "/Content/UrunResim/Buyuk/" + Guid.NewGuid() + Path.GetExtension(fileupload.FileName);

                ortaResim.Save(Server.MapPath(ortaYol));
                buyukResim.Save(Server.MapPath(buyukYol));

                Resim rsm = new Resim();
                rsm.BuyukYol = buyukYol;
                rsm.OrtaYol = ortaYol;
                rsm.UrunID = uId;

                if (Context.Baglanti.Resims.FirstOrDefault(x => x.UrunID == uId && x.Varsayilan == false) != null)
                    rsm.Varsayilan = true;
                else
                    rsm.Varsayilan = false;
                Context.Baglanti.Resims.Add(rsm);
                Context.Baglanti.SaveChanges();
                return View(uId);
            }
            return View(uId); 
        }

        public ActionResult SliderResimleri()
        {
            return View();
        }
        [HttpPost]
        public ActionResult SliderResimEkle(HttpPostedFileBase fileupload)
        {
            if(fileupload != null)
            {
                Image img = Image.FromStream(fileupload.InputStream);

                Bitmap bmp = new Bitmap(img, Settings.SliderResimBoyut);

                string yol = "/Content/SliderResim/" + Guid.NewGuid() + Path.GetExtension(fileupload.FileName);
                bmp.Save(Server.MapPath(yol));

                Resim rsm = new Resim();
                rsm.BuyukYol = yol;
                Context.Baglanti.Resims.Add(rsm);
                Context.Baglanti.SaveChanges();
            }
            return RedirectToAction("SliderResimleri");
        }

    }
}