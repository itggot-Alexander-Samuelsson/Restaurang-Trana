class Seeder

  def self.seed!
    Suggestion.create(title: 'More Grillkkorv!',
                      description: 'in the cafe, stupid',
                      votes: 15)
    Suggestion.create(title: 'Less Grillkorv!',
                      description: 'everywhere',
                      votes: 10)
  end

end