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
    @post = Post.with_attached_photo.includes(:user, :likes, :likers).where(id: params[:id])[0]
    # @user = User.find(@post.user_id)
    if @post
      render :show
    else
      render json: ["Post unlocated"], status: 404
    end
  end

  # def update

  # end

  def destroy 
    @post = Post.find_by(id: params[:id])
    if @post && @post.user_id == current_user.id && @post.destroy 
      render json: {}, status: 200
    else 
      render json: ['Post unlocated'], status: 404
    end 
  end 

  def index
    @posts = Post.all.includes(:user, :likes, :likers).with_attached_photo
    @users = []
    @likes = []

    @posts.each do |post|
      @users << post.user
    
      post.likes.each do |like|
        @likes << like
      end 
    end
      render :index 
  end

  private
  def post_params
    params.require(:post).permit(:photo, :caption, :location)
  end
end
