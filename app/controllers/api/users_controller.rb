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
    @user = User.where(id: params[:id]).includes(:post)[0]
    @posts = @user.posts.with_attached_photo
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
