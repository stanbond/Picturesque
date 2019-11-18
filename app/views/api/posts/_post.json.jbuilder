json.extract! post, :id, :user_id, :caption, :location, :updated_at, :liker_ids, :like_ids
json.photoUrl url_for(post.photo)