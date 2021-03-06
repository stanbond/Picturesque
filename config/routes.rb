Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do    
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :show, :update, :index, :destroy]
    resources :likes, only: [:create, :destroy]
  end
  # get 'sessions/create'
  # get 'sessions/new'
  # get 'sessions/destroy'
  # get 'users/new'
  # get 'users/create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
