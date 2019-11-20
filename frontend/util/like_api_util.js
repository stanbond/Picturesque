export const createLike = like => {
  return $.ajax({
    url: '/api/likes',
    method: 'post',
    data: { like }
  })
};

export const destroyLike = id => {
  return $.ajax({
    url: `/api/likes/${id}`,
    method: 'delete'
  })
};

export const fetchAllLikes = () => {
  return $.ajax({
    method: 'GET',
    url: `api/likes`
  })
}

export const fetchLikesbyPost = (postId) => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: `api/likes`,
    data: { postId }
  })
}

export const fetchLike = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/likes/${id}`,
  })
}