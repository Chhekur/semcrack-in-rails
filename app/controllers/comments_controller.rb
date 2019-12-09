class CommentsController < ApplicationController
    def add
        # render json: params
        if session[:id] != nil
            @paper = Paper.find_by(:id => params[:paper_id])
            # render json: @paper
            if @paper.errors.empty?
                @paper.comment.create(:comment => params[:comment], :user_id => session[:id])
                render json: {'error': false}
            end
        end
    end
end
