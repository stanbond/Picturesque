class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: ['wrong user, bro']
    end
  end

  def show
    @user = User.find_by(id: params[:id])
      if @user
        render :show
      else
        render json: ['user unknown']
      end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
