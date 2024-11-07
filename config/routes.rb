Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :questions, only: [:index, :create]
      resources :scores, only: [:index, :create] # Ensure this line is present
    end
  end
end

