export default {
  search: function (endpoint) {
    return fetch(endpoint)
      .then((response) => {
        if (response.status !== 200) {
          return;
        }
        return response.json();
      })
      .catch((err) => console.log(err));
  },
};
