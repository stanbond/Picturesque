class Api::UsersController < ApplicationController
  def create
    @posts = []
    
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @posts = Post.find_by(user_id: params[:id])
    
    @user = User.find_by(id: params[:id])
      if @user
        render :show
      else
        render json: ['user unknown'], status: 404
      end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :fullname, :bio, :password)
  end
end
