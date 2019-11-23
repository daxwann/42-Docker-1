class CatsController < ApplicationController
  def index
    render json: Cat.all
  end

  def create
    @cat = Cat.create!(cat_params)
    render json: @cat
  end

  def new
    render :new
  end

  private

  def cat_params
    params.require(:cat).permit(:name, :age, :color, :sex)
  end
end