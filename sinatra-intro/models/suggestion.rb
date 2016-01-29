class Suggestion
  include DataMapper::Resource

  property :id, Serial
  property :title, String
  property :description, String
  property :votes, Integer




end