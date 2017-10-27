module Api
  class PostsController < ApplicationController
    def index
      render json: Event.all
    end
  end
end
