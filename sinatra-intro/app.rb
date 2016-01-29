class App < Sinatra::Base
  enable :sessions

  get '/' do
    @suggestions = Suggestion.all
    erb :index
  end

  get '/suggestion/:id' do |id|
    @suggestion = Suggestion.get(id.to_i)
    erb :suggestion
  end

end