class QuestionsController < ApplicationController
  def index
    render json: Question.all
  end

  def create
    render json: Question.create(question_params)
  end

  def update
    question = Question.find(params[:id])
    render json: question.update_attributes(question_params)
  end

  private

  def question_params
    params.require(:question).permit(:question_text, :answer, distractors: [])
  end
end
