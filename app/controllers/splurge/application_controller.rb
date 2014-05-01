module Splurge
  class ApplicationController < ActionController::Base

    def frontend
      render layout: false
    end

  end
end
