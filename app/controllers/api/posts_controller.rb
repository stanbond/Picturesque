class Api::PostsController < ApplicationController
  before_action :ensure_login

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      render :show
    else
      render json: ["missing input"], status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
    @user = User.find(@post.user_id)
    if @post
      render :show
    else
      render json: ["Post unlocated"], status: 404
    end
  end

  # def update

  # end

  # def destroy

  # end

  def index
    @posts = Post.all
    render :index 
  end

  private
  def post_params
    params.require(:post).permit(:photo, :caption, :location)
  end
end
