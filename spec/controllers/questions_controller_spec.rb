require 'rails_helper'

RSpec.describe QuestionsController, type: :controller do
  describe 'questions#index' do
    it 'should list the questions' do
      question = FactoryGirl.create(:question)
      get :index
      expect(response).to have_http_status :success

      response_body = ActiveSupport::JSON.decode(@response.body)
      response_id = response_body[0]['id']

      expect(response_id).to eq(question.id)
    end
  end
end
