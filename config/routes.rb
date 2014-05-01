Splurge::Engine.routes.draw do
  root to: "application#frontend"

  get "/*path",
      to: "application#frontend",
      constraints: lambda {|request|
        should_respond = true
        %w( admin api teaspoon ).each do |path|
          if request.path_parameters[:path].start_with?(path)
            should_respond = false
          end
        end
        should_respond
      }
end
