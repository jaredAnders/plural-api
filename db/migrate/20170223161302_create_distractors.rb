class CreateDistractors < ActiveRecord::Migration
  def change
    create_table :distractors do |t|
      t.integer :question_id
      t.integer :value

      t.timestamps null: false
    end
    add_index :distractors, :question_id
  end
end
