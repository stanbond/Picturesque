json.extract! user, :id, :username, :email, :fullname, :bio

if user.profile_photo.attached?
    json.profilePhoto url_for(user.profile_photo)
# else 
    # json.profilePhoto '/images/default_profile.png'
end 
json.postIds user.post_ids