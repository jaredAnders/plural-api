FactoryGirl.define do
  factory :question do
    question_text "What is 3 + 6?"
    answer 9
    distractors [18, 36, 12]
  end
end
