using System;
using System.Collections.Generic;

namespace ZeonTicaret.WebUI.Models
{
    public partial class aspnet_Profile
    {
        public System.Guid UserId { get; set; }
        public string PropertyNames { get; set; }
        public string PropertyValuesString { get; set; }
        public byte[] PropertyValuesBinary { get; set; }
        public System.DateTime LastUpdatedDate { get; set; }
        public virtual aspnet_Users aspnet_Users { get; set; }
    }
}
