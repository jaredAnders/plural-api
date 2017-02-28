class AddDistractorsToQuestions < ActiveRecord::Migration
  def change
    add_column :questions, :distractors, :integer, array: true
  end
end
