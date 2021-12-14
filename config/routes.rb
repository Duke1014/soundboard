Rails.application.routes.draw do
  resources :sounds
  resources :users, only: [:show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # My stuff here:
  # USERS
  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  # SOUNDS
  get "/sounds", to: "sounds#index"
  get "/sounds/:id", to: "sounds#show"
  post "/sounds", to: "sounds#create"
  delete "/sounds", to: "sounds#destroy"

  # SESSIONS
end
