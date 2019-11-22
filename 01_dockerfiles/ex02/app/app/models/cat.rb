class Cat < ApplicationRecord 
  validates :name, :age, :color, presence: true
  validates :sex, presence: true, inclusion: { in: %w(M F), message: "%{value} is not a valid sex (M or F)" }

  
end