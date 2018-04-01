using System;
using System.Collections.Generic;

namespace ZeonTicaret.WebUI.Models
{
    public partial class aspnet_Paths
    {
        public aspnet_Paths()
        {
            this.aspnet_PersonalizationPerUser = new List<aspnet_PersonalizationPerUser>();
        }

        public System.Guid ApplicationId { get; set; }
        public System.Guid PathId { get; set; }
        public string Path { get; set; }
        public string LoweredPath { get; set; }
        public virtual aspnet_Applications aspnet_Applications { get; set; }
        public virtual aspnet_PersonalizationAllUsers aspnet_PersonalizationAllUsers { get; set; }
        public virtual ICollection<aspnet_PersonalizationPerUser> aspnet_PersonalizationPerUser { get; set; }
    }
}
