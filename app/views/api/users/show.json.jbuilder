json.partial! 'api/users/user', user: @user
# json.partial! 'api/posts/post', post: @post
json.posts do
  @posts.each do |post|
    json.partial! 'api/posts/post', post: post
  end
end