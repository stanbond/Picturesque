class Api::LikesController < ApplicationController
  before_action :ensure_login

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
      if @like.save
        render json: @like, status: 200
      else
        render json: @like.errors.full_messages
      end
  end

  def destroy
    @like = Like.find_by_id(params[:id])
    p @like
      if @like && @like.user_id == current_user.id && @like.destroy
        p @like
        render json: @like, status: 200
      else
        render json: ['Invalid entry'], status: 422
      end
  end

  private

  def like_params
    params.require(:like).permit(:post_id)
  end
end
