using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class aspnet_WebEvent_EventsMap : EntityTypeConfiguration<aspnet_WebEvent_Events>
    {
        public aspnet_WebEvent_EventsMap()
        {
            // Primary Key
            this.HasKey(t => t.EventId);

            // Properties
            this.Property(t => t.EventId)
                .IsRequired()
                .IsFixedLength()
                .HasMaxLength(32);

            this.Property(t => t.EventType)
                .IsRequired()
                .HasMaxLength(256);

            this.Property(t => t.Message)
                .HasMaxLength(1024);

            this.Property(t => t.ApplicationPath)
                .HasMaxLength(256);

            this.Property(t => t.ApplicationVirtualPath)
                .HasMaxLength(256);

            this.Property(t => t.MachineName)
                .IsRequired()
                .HasMaxLength(256);

            this.Property(t => t.RequestUrl)
                .HasMaxLength(1024);

            this.Property(t => t.ExceptionType)
                .HasMaxLength(256);

            // Table & Column Mappings
            this.ToTable("aspnet_WebEvent_Events");
            this.Property(t => t.EventId).HasColumnName("EventId");
            this.Property(t => t.EventTimeUtc).HasColumnName("EventTimeUtc");
            this.Property(t => t.EventTime).HasColumnName("EventTime");
            this.Property(t => t.EventType).HasColumnName("EventType");
            this.Property(t => t.EventSequence).HasColumnName("EventSequence");
            this.Property(t => t.EventOccurrence).HasColumnName("EventOccurrence");
            this.Property(t => t.EventCode).HasColumnName("EventCode");
            this.Property(t => t.EventDetailCode).HasColumnName("EventDetailCode");
            this.Property(t => t.Message).HasColumnName("Message");
            this.Property(t => t.ApplicationPath).HasColumnName("ApplicationPath");
            this.Property(t => t.ApplicationVirtualPath).HasColumnName("ApplicationVirtualPath");
            this.Property(t => t.MachineName).HasColumnName("MachineName");
            this.Property(t => t.RequestUrl).HasColumnName("RequestUrl");
            this.Property(t => t.ExceptionType).HasColumnName("ExceptionType");
            this.Property(t => t.Details).HasColumnName("Details");
        }
    }
}
