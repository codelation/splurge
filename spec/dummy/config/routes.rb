Rails.application.routes.draw do
  mount Splurge::Engine, at: "/"
  mount Spree::Core::Engine, at: "/"
end
