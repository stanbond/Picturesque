export const fetchPost = id => {
  return $.ajax({
    method: 'get',
    url: `/api/posts/${id}`
  });
};

export const fetchPosts = () => {
  return $.ajax({
    method: 'get',
    url: '/api/posts'
  });
};

export const createPost = post => {
  return $.ajax({
    method: 'post',
    url: '/api/posts',
    data: post,
    contentType: false,
    processData: false
  });
};

export const deletePost = id => {
  return $.ajax({
    url: `/api/posts/${id}`,
    method: 'delete'
  });
};

export const updatePost = post => {
  return $.ajax({
    url: `/api/posts/${post.id}`,
    method: 'patch',
    data: { post: post }
  });
};