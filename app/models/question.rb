class Question < ActiveRecord::Base
  has_many :distractors
end
