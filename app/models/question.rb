class Question < ActiveRecord::Base
  has_many :distractors

  require 'csv'

  def self.import
    CSV.foreach('./app/assets/data/questions.csv', {headers: true, col_sep: '|'}) do |row|
      row = row.to_hash
      question = row['question']
      answer = row['answer'].to_i
      distractors = row['distractors'].split(', ').map {|x| x.to_i}
      new_question = Question.create(question_text: question, answer: answer)
      distractors.each do |value|
        Distractor.create(value: value, question_id: new_question.id)
      end
    end
  end
end
