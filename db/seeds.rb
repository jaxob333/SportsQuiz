# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Question.create([
  {
    content: "What is the capital of Japan?",
    correct_answer: "Tokyo",
    answers: ["Tokyo", "Seoul", "Beijing", "Bangkok"]
  },
  {
    content: "What is the smallest prime number?",
    correct_answer: "2",
    answers: ["1", "2", "3", "5"]
  },
  {
    content: "What element does 'O' represent on the periodic table?",
    correct_answer: "Oxygen",
    answers: ["Gold", "Oxygen", "Osmium", "Oganesson"]
  },
  {
    content: "Which planet is known as the Red Planet?",
    correct_answer: "Mars",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"]
  },
  {
    content: "Who wrote the play 'Hamlet'?",
    correct_answer: "William Shakespeare",
    answers: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"]
  },
  {
    content: "What is the hardest natural substance on Earth?",
    correct_answer: "Diamond",
    answers: ["Gold", "Iron", "Diamond", "Quartz"]
  },
  {
    content: "Which country is known as the Land of the Rising Sun?",
    correct_answer: "Japan",
    answers: ["China", "Japan", "Thailand", "South Korea"]
  },
  {
    content: "What is the capital of Italy?",
    correct_answer: "Rome",
    answers: ["Venice", "Milan", "Rome", "Florence"]
  },
  {
    content: "Which gas is most abundant in the Earth's atmosphere?",
    correct_answer: "Nitrogen",
    answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"]
  },
  {
    content: "Who painted the Mona Lisa?",
    correct_answer: "Leonardo da Vinci",
    answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"]
  }
])

User.create([
  { username: 'test_user' },
  { username: 'another_user' }
])
