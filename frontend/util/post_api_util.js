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
    data: { post }
  });
};