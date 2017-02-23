class PagesController < ApplicationController
  def index
    question = Question.last
    @questions_props = {
      question: question['question_text'],
      answer: question['answer']}
  end

  def import
    Question.import
  end
end
