Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      get '/get_ip', to: 'ip_addresses#get'
      post '/messages', to: 'messages#create'
      get 'messages/:id', to: 'messages#index', as: 'message'
      resources :rooms, only: [:index, :create, :show]
    end
  end
end
