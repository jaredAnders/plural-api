require 'csv'

class QuestionImport
  def self.import(file_path)
    CSV.foreach(file_path, {headers: true, col_sep: '|'}) do |row|
      row = row.to_hash
      question = row['question']
      answer = row['answer'].to_i
      distractors = row['distractors'].split(', ').map {|x| x.to_i}
      new_question = Question.create(question_text: question, answer: answer, distractors: distractors)
    end
  end
end
