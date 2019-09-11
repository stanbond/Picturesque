export const fetchUser = id => {
  return $.ajax({
    method: 'get',
    url: `/api/users/${id}`
  });
};

// export const searchUsers = username => {
//   return $.ajax({
//     method: 'get',
//     url: `/api/search/${username}`
//   });
// };