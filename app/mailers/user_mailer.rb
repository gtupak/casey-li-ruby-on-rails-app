class UserMailer < ActionMailer::Base
	default from: "railstutorials@gmail.com"

	def contact_confirmation(email, first_name, last_name, message)
		@email, @first_name, @last_name, @message = email, first_name, last_name, message

		mail(:to => email,
			 :subject => "Thank you for contacting us!")

	end
end