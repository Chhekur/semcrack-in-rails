class Comment < ApplicationRecord
    validates :comment, presence: true
    validates :user_id, presence: true
    belongs_to :paper
end
