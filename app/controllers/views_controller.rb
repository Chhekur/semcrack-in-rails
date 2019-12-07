class ViewsController < ApplicationController
    def hello
    end

    def signup
        if session[:id] != nil
            redirect_to '/'
        end
    end

    def login
        if session[:id] != nil
            redirect_to '/'
        end
    end

    def logout
        if session[:id] != nil
            session.destroy
        end
        redirect_to '/'
    end

    def upload_paper
        if session[:id] == nil
            redirect_to '/login'
        end
    end
end
