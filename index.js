const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {
  getRepos,
  filterRepos,
  getAvatar } = require('./service');

const app = express();
const { PORT } = process.env;;
const url = 'https://api.github.com/users/takenet/repos';

app.use(express.json());
app.use(cors());

app.get('/', async (_req, res) => {
  try {
    const gitRepos = await getRepos(url);
    const repos = filterRepos(gitRepos);
    const avatar = await getAvatar('takenet');
    res.status(200).json({avatar, repos});
  } catch (error) {
    res.status(500).json(error.message);
  }
})

app.listen(PORT, () => {console.log(`listening on port ${PORT}`)});
