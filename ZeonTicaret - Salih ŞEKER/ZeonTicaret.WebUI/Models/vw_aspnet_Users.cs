using System;
using System.Collections.Generic;

namespace ZeonTicaret.WebUI.Models
{
    public partial class vw_aspnet_Users
    {
        public System.Guid ApplicationId { get; set; }
        public System.Guid UserId { get; set; }
        public string UserName { get; set; }
        public string LoweredUserName { get; set; }
        public string MobileAlias { get; set; }
        public bool IsAnonymous { get; set; }
        public System.DateTime LastActivityDate { get; set; }
    }
}
