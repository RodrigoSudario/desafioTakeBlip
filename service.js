const axios = require('axios');

const getRepos = async (url) => {
  const repositories = await axios.get(url)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return repositories;
}

const filterRepos = (data) => {
  const cSharpRepos = [];
  data.forEach(item => {
    item.language == 'C#' && cSharpRepos.push(item)
  });
  const ordenedList = cSharpRepos
    .sort(function(a, b) {
      return new Date(a.created_at) - new Date(b.created_at)
    })
    .slice(0,5)
    .map(item => [item.name, item.description])
  return ordenedList;
}

const getAvatar = async (user) => {
  const url = `https://api.github.com/users/${user}`;
  const request = axios.get(url)
    .then((res) => res.data.avatar_url)
    .catch((err) => {
      console.log(err);
    });
  return request;
}

module.exports = {
  getRepos,
  filterRepos,
  getAvatar,
};
