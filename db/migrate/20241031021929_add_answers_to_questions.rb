class AddAnswersToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :answers, :json
  end
end
