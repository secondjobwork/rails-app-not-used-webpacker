class HomeController < ApplicationController
  def index
    @data = { message: 'Hello Vue from Rails' }
  end
end
