Rails.application.routes.draw do
  root 'dashboard#index'
  namespace :api do
    resources :tags
    resources :posts
    devise_for :users
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
