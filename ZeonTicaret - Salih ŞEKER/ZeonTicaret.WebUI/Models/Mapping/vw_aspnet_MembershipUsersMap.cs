using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ZeonTicaret.WebUI.Models.Mapping
{
    public class vw_aspnet_MembershipUsersMap : EntityTypeConfiguration<vw_aspnet_MembershipUsers>
    {
        public vw_aspnet_MembershipUsersMap()
        {
            // Primary Key
            this.HasKey(t => new { t.UserId, t.PasswordFormat, t.IsApproved, t.IsLockedOut, t.CreateDate, t.LastLoginDate, t.LastPasswordChangedDate, t.LastLockoutDate, t.FailedPasswordAttemptCount, t.FailedPasswordAttemptWindowStart, t.FailedPasswordAnswerAttemptCount, t.FailedPasswordAnswerAttemptWindowStart, t.ApplicationId, t.UserName, t.IsAnonymous, t.LastActivityDate });

            // Properties
            this.Property(t => t.PasswordFormat)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            this.Property(t => t.MobilePIN)
                .HasMaxLength(16);

            this.Property(t => t.Email)
                .HasMaxLength(256);

            this.Property(t => t.LoweredEmail)
                .HasMaxLength(256);

            this.Property(t => t.PasswordQuestion)
                .HasMaxLength(256);

            this.Property(t => t.PasswordAnswer)
                .HasMaxLength(128);

            this.Property(t => t.FailedPasswordAttemptCount)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            this.Property(t => t.FailedPasswordAnswerAttemptCount)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            this.Property(t => t.UserName)
                .IsRequired()
                .HasMaxLength(256);

            this.Property(t => t.MobileAlias)
                .HasMaxLength(16);

            // Table & Column Mappings
            this.ToTable("vw_aspnet_MembershipUsers");
            this.Property(t => t.UserId).HasColumnName("UserId");
            this.Property(t => t.PasswordFormat).HasColumnName("PasswordFormat");
            this.Property(t => t.MobilePIN).HasColumnName("MobilePIN");
            this.Property(t => t.Email).HasColumnName("Email");
            this.Property(t => t.LoweredEmail).HasColumnName("LoweredEmail");
            this.Property(t => t.PasswordQuestion).HasColumnName("PasswordQuestion");
            this.Property(t => t.PasswordAnswer).HasColumnName("PasswordAnswer");
            this.Property(t => t.IsApproved).HasColumnName("IsApproved");
            this.Property(t => t.IsLockedOut).HasColumnName("IsLockedOut");
            this.Property(t => t.CreateDate).HasColumnName("CreateDate");
            this.Property(t => t.LastLoginDate).HasColumnName("LastLoginDate");
            this.Property(t => t.LastPasswordChangedDate).HasColumnName("LastPasswordChangedDate");
            this.Property(t => t.LastLockoutDate).HasColumnName("LastLockoutDate");
            this.Property(t => t.FailedPasswordAttemptCount).HasColumnName("FailedPasswordAttemptCount");
            this.Property(t => t.FailedPasswordAttemptWindowStart).HasColumnName("FailedPasswordAttemptWindowStart");
            this.Property(t => t.FailedPasswordAnswerAttemptCount).HasColumnName("FailedPasswordAnswerAttemptCount");
            this.Property(t => t.FailedPasswordAnswerAttemptWindowStart).HasColumnName("FailedPasswordAnswerAttemptWindowStart");
            this.Property(t => t.Comment).HasColumnName("Comment");
            this.Property(t => t.ApplicationId).HasColumnName("ApplicationId");
            this.Property(t => t.UserName).HasColumnName("UserName");
            this.Property(t => t.MobileAlias).HasColumnName("MobileAlias");
            this.Property(t => t.IsAnonymous).HasColumnName("IsAnonymous");
            this.Property(t => t.LastActivityDate).HasColumnName("LastActivityDate");
        }
    }
}
