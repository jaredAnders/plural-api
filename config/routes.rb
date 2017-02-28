Rails.application.routes.draw do
  root 'pages#index'
  resources :questions, only: [:index, :create, :update]
end
