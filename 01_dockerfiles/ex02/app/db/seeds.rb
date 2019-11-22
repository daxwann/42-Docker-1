# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Cat.create!(name: "Charlie", age: 3, sex: "M", color: "orange")
  Cat.create!(name: "Stella", age: 5, sex: "F", color: "black")
  Cat.create!(name: "Hubert", age: 2, sex: "M", color: "brown")
  Cat.create!(name: "Zeus", age: 1, sex: "M", color: "white")
end
