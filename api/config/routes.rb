Rails.application.routes.draw do
  get '/get_ip', to: 'ip_addresses#get'
  post '/messages', to: 'messages#create'
  get 'messages/:id', to: 'messages#index', as: 'message'
  # todo router直す
  get 'messages/destroy'
  resources :rooms
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
