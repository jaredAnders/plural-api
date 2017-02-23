class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :question_text
      t.integer :answer

      t.timestamps null: false
    end
  end
end
