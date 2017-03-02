desc "Imports data file from project root/data"
task :import => :environment do
  file_path = "#{Rails.root}/data/questions.csv"
  QuestionImport.import(file_path)
end
