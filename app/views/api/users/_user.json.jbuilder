json.extract! user, :id, :username, :email, :fullname, :bio

if user.profile_photo.attached?
    json.profilePhoto url_for(user.profile_photo)
else 
    json.profilePhoto '/profile_img.png'
end 
json.postIds user.post_ids