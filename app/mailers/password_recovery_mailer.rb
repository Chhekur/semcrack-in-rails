class PasswordRecoveryMailer < ApplicationMailer
    def password_recovery_email(email, otp)
        puts('sending email ....')
        @otp = otp
        @email = email
        mail(to: email, subject: "Password Recovery")
    end
end
