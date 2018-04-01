using System;
using System.Collections.Generic;

namespace ZeonTicaret.WebUI.Models
{
    public partial class vw_aspnet_Roles
    {
        public System.Guid ApplicationId { get; set; }
        public System.Guid RoleId { get; set; }
        public string RoleName { get; set; }
        public string LoweredRoleName { get; set; }
        public string Description { get; set; }
    }
}
