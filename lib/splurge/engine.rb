module Splurge
  class Engine < ::Rails::Engine
    isolate_namespace Splurge

    # Precompile Splurge Assets
    initializer "splurge.assets.precompile" do |app|
      app.config.assets.precompile += %w(
        splurge/frontend.css splurge/frontend.js
        splurge/fontawesome-webfont.eot splurge/fontawesome-webfont.svg
        splurge/fontawesome-webfont.ttf splurge/fontawesome-webfont.woff
      )
    end

    # Add Splurge Handlebars Templates Path
    initializer "splurge.handlebars.config" do |app|
      unless app.config.handlebars.templates_root.is_a?(Array)
        app.config.handlebars.templates_root = [app.config.handlebars.templates_root]
      end
      if app.config.handlebars.templates_root.include?("templates")
        app.config.handlebars.templates_root << "splurge/frontend"
      else
        app.config.handlebars.templates_root << "splurge/frontend/templates"
      end
    end

    # RSpec Configuration
    config.generators do |g|
      g.test_framework :rspec, fixture: false
      g.fixture_replacement :factory_girl, dir: "spec/factories"
      g.assets false
      g.helper false
    end
  end
end
