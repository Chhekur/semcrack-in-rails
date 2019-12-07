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
        @paper = Paper.find_by(:id => 6)
        render "views/show_all_papers"
    end
end
