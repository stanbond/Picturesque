class API::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
      if @user.save
        login(@user)
        render :show
      else
        render json: ['Wrong Credentials']
      end
  end

  def show
    @user = User.find_by(id: params[:id])
      if @user
          render :show
      else
          render json: ['User Unknown']
      end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
