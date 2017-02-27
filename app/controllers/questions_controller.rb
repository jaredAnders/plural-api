class QuestionsController < ApplicationController
  def index
    render json: Question.all
  end

  def update
    question = Question.find(params[:id])
    question.update_attributes(question_params)
    render json: question
  end

  private

  def question_params
    params.require(:question).permit(:question_text, :answer)
  end

end
