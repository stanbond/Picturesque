json.extract! post, :id, :user_id, :caption, :location, :updated_at
json.photoUrl url_for(post.photo)