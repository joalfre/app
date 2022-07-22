Rails.application.routes.draw do
  devise_for :users
  root 'welcome#index'
  resources :products
  #get 'welcome/index'
  get 'postres/index'
  get 'postres/leer'
  #get 'postres/crear'
  get '/postres/crear', to: 'postres#crear'
  post '/postres/insertar', to: 'postres#insertar'
  get 'postres/actualizar'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
