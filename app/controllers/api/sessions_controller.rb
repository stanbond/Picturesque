class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      @posts = @user.posts
      
      render 'api/users/show'
    else
      render json: ['Wrong credentials!'], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: ['Logout Success']
    else
      render json: ['No user signed in'], status: 404
    end
  end
end
