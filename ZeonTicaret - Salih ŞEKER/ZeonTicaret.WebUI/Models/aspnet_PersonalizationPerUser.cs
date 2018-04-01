using System;
using System.Collections.Generic;

namespace ZeonTicaret.WebUI.Models
{
    public partial class aspnet_PersonalizationPerUser
    {
        public System.Guid Id { get; set; }
        public Nullable<System.Guid> PathId { get; set; }
        public Nullable<System.Guid> UserId { get; set; }
        public byte[] PageSettings { get; set; }
        public System.DateTime LastUpdatedDate { get; set; }
        public virtual aspnet_Paths aspnet_Paths { get; set; }
        public virtual aspnet_Users aspnet_Users { get; set; }
    }
}
