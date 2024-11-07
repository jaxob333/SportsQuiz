class Api::V1::ScoresController < ApplicationController
    def index
      scores = Score.all
      render json: scores # This will render the scores as JSON
    end
  
    def create
      score = Score.new(score_params)
      if score.save
        render json: score, status: :created
      else
        render json: score.errors, status: :unprocessable_entity
      end
    end
  
    private
  
    def score_params
      params.require(:score).permit(:user_id, :points)
    end
  end
  