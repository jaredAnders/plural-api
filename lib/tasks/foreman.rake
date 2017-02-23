task :foreman do
  sh "foreman start -f Procfile.dev"
end
