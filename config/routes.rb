Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/home' => 'views#home'
  get '/signup' => 'views#signup'
  post '/register' => 'user#create'
  get '/login' => 'views#login'
  post '/user-login' => 'user#login'
  get '/logout' => 'views#logout'
  get '/upload-paper' => 'views#upload_paper'
  post '/upload-paper' => 'paper#upload'
  get '/show-all-papers' => 'paper#showAll'
  get '/search' => 'paper#search'
  get '/preview/:id' => 'paper#preview'

  root 'views#home'
end
