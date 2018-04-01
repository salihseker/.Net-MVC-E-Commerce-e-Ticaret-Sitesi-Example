using System;
using System.Collections.Generic;

namespace ZeonTicaret.WebUI.Models
{
    public partial class aspnet_Applications
    {
        public aspnet_Applications()
        {
            this.aspnet_Paths = new List<aspnet_Paths>();
            this.aspnet_Roles = new List<aspnet_Roles>();
            this.aspnet_Users = new List<aspnet_Users>();
        }

        public string ApplicationName { get; set; }
        public string LoweredApplicationName { get; set; }
        public System.Guid ApplicationId { get; set; }
        public string Description { get; set; }
        public virtual ICollection<aspnet_Paths> aspnet_Paths { get; set; }
        public virtual ICollection<aspnet_Roles> aspnet_Roles { get; set; }
        public virtual ICollection<aspnet_Users> aspnet_Users { get; set; }
    }
}
