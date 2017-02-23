class PagesController < ApplicationController
  def index
    @questions_props = { name: "Test" }
  end
end
