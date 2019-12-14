class UserController < ApplicationController
    def create
        # render json: params
        @user = User.create(:name => params[:name], :email => params[:email], :password => params[:password])
        if @user.errors.empty?
            render json: {'error': false}
        else 
            render json: {'error': true, 'msg': @user.errors}
        end
    end

    def login
        @user = User.find_by(:email => params[:email])
        if @user != nil
            if @user.authenticate(params[:password])
                session[:id] = @user.id
                render json: {'error': false, 'id': @user.id}
            else
                render json: {'error': true, 'msg': 'invalid email or password'}
            end
        else
            render json: {'error': true, 'msg': 'invalid email or password'}
        end
    end

    def forgot_password
        # render json: params
        @user = User.find_by(:email => params[:email])
        # render json: @user
        if @user != nil
            otp = rand(100000..999999)
            @user.otp = otp.to_s
            @user.save(:validate => false)
            PasswordRecoveryMailer.password_recovery_email(params[:email], otp).deliver_now
            render json: {"error": false}
        else
            render json: {"error": true, "msg": "invalid email"}
        end
    end

    def reset_password
        # render json: params
        @user = User.find_by(:email => session[:email])
        # @user.otp = '123456'
        # @user.save!
        # render json: @user

        if @user != nil
            if(@user.otp == session[:otp])
                @user.password = params[:password]
                @user.otp = nil
                @user.save!
                session[:email] = nil
                session[:otp] = nil
                render json: {"error": false}
            else
                render json: {"error": true, "msg": "link has been expired#{@user.otp}"}
            end
        else
            render json: {"error": true, "msg": "this is not for you"}
        end
    end
end
