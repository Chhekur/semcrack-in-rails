class UserController < ApplicationController
    def create
        # render json: params
        @user = User.create(:name => params[:name], :email => params[:email], :password => params[:password])
        if @user.errors
            render json: {'error': true, 'msg': @user.errors}
        else 
            render json: {'error': false}
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
end
