class CatsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Cat.all
  end

  def create
    @cat = Cat.create!(cat_params)
    render json: @cat, status: :created
  end

  def new
    render :new
  end

  private

  def cat_params
    params.require(:cat).permit(:name, :age, :color, :sex)
  end
end