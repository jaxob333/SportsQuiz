class Score < ApplicationRecord
  validates :user_id, presence: true
  validates :points, presence: true
end
