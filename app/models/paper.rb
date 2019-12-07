class Paper < ApplicationRecord
    has_one_attached :question_paper
    validates :name, presence: true, length: {maximum: 50}
    validates :year, presence: true
    validates :description, presence: true
end
