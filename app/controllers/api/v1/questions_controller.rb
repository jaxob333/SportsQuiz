module Api
    module V1
      class QuestionsController < ApplicationController
        def index
          questions = Question.all
          render json: questions
        end
  
        def create
          question = Question.new(question_params)
          if question.save
            render json: question, status: :created
          else
            render json: question.errors, status: :unprocessable_entity
          end
        end
  
        private
  
        def question_params
          params.require(:question).permit(:content, :correct_answer, answers: [])
        end
      end
    end
  end
  