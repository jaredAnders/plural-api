require 'rails_helper'

RSpec.describe QuestionsController, type: :controller do
  describe '#index' do
    it 'should return all questions' do
      question1 = FactoryGirl.create(:question)
      question2 = FactoryGirl.create(:question)
      get :index
      expect(response).to have_http_status :success

      response_body = ActiveSupport::JSON.decode(@response.body)
      expect(response_body.count).to eq(2)

      response_ids = response_body.collect {|question| question['id']}
      expect(response_ids).to eq([question1.id, question2.id])
    end
  end

  describe '#create' do
    it 'should create new question' do
      post :create, question: { question_text: 'What is 4 * 5?' }
      expect(response).to have_http_status :success

      response_body = ActiveSupport::JSON.decode(@response.body)
      question_text = response_body['question_text']

      expect(question_text).to eq('What is 4 * 5?')
    end
  end
end
