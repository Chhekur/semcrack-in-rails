class PaperController < ApplicationController
    def upload
        # render json: params
        @paper = Paper.create(:name => params[:name], :year => params[:year], :description => params[:description], :user_id => session[:id])
        if @paper.errors.empty?
            @paper.question_paper.attach(params[:question_paper])
            @paper.save
            render json: {'error': false}
            
        else
            render json: {'error': true, 'msg': @paper.errors}
        end
    end

    def showAll
        @paper = Paper.find_by(:id => 4)
        render json: @paper
        # render "views/show_all_papers"
    end

    def search
        @paper = Paper.where("name LIKE '%#{params[:query]}%'")
        # render json: @paper
        render "paper/search"
    end

    def preview
        @paper = Paper.find_by(:id => params[:id])
        @related = Paper.where("name LIKE '%#{@paper.name.split(' ')[0]}%'")
        @user = User.find_by(:id => @paper.user_id)
        render "paper/preview"
    end
end
