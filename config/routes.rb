Rails.application.routes.draw do
  resources :sounds
  resources :users
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # My stuff here:
  # USERS
  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  # SOUNDS
  get "/sounds", to: "sounds#index"
  # get "/sounds/:id", to: "sounds#show"
  post "/sounds", to: "sounds#create"
  patch "/sounds/:id", to: "sounds#update"
  delete "/sounds/:id", to: "sounds#destroy"

  # SESSIONS
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # ping 
  get '/ping', to: "sounds#ping"

  # USER SOUNDS
  get "/me/sounds", to: "sounds#user_sounds"
end
