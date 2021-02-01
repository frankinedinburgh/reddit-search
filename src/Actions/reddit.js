const endpoint = `https://www.reddit.com/r/`;

export default {
  search: function (subreddit, limit) {
    return fetch(`${endpoint}${subreddit}.json?limit=${limit}&sort=new`)
      .then((response) => {
        if (response.status !== 200) {
          return;
        }
        return response.json();
      })
      .catch((err) => console.log(err));
  },
  nextPage: function (subreddit, limit, after) {
    return fetch(
      `${endpoint}${subreddit}.json?limit=${limit}&after=${after}&count=555&sort=new`
    )
      .then((response) => {
        if (response.status !== 200) {
          return;
        }
        return response.json();
      })
      .catch((err) => console.log(err));
  },
  prevPage: function (subreddit, limit, before) {
    return fetch(
      `${endpoint}${subreddit}.json?limit=${limit}&before=${before}&count=555&sort=new`
    )
      .then((response) => {
        if (response.status !== 200) {
          return;
        }
        return response.json();
      })
      .catch((err) => console.log(err));
  },
};
