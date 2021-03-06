const express = require('express');
const axios = require('axios');
const Unsplash = require('unsplash-js').default;
const { toJson } = require('unsplash-js');
const bodyParser = require('body-parser');
const cors = require('cors');
global.fetch = require('node-fetch');

const mockGoogleCat = require('./mock/google_cat.json');
const mockUnsplashCat = require('./mock/unsplash_cat.json');

const googleKey = 'AIzaSyATxSur4kjrBEg6cdNtG30zO4SIdZMgzmw';
const googleCx = '000166153319241769584:reo5-dxx1f0';
const searchType = 'image';

const unsplashAccessKey = 'ecee36b14df1501d7f7740a71dc1a4d8c14655a719a25972e5d8fca0eebb14c4';
const unsplashSecretKey = '83d1b359e54f80442300c55289857dc00d43d0736e4812bcc6c2b78afdaac5dc';
const unsplash = new Unsplash({
  applicationId: unsplashAccessKey,
  secret: unsplashSecretKey,
});

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// parse application/x-www-form-urlencoded and application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello from api');
});

const transformGoogleData = data => data.items.reduce(
  (result, item) => [
    ...result,
    {
      title: item.title,
      src: item.link,
      height: item.image.height,
      width: item.image.width,
      thumbnail: item.image.thumbnailLink,
    },
  ],
  [],
);

const transformUnsplashData = data => data.reduce(
  (result, item) => [
    ...result,
    {
      title: item.alt_description,
      src: item.urls.full,
      height: item.height,
      width: item.width,
      thumbnail: item.urls.thumb,
    },
  ],
  [],
);

app.get('/image', async (req, res) => {
  const { url } = req.query;
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    res.send(`data:image/jpeg;base64,${Buffer.from(response.data, 'binary').toString('base64')}`);
  } catch (err) {
    console.error(err.message || err); // eslint-disable-line no-console
  }
});

app.post('/google', async (req, res) => {
  const { query } = req.body;

  res.setHeader('Content-Type', 'application/json');

  res.send(
    query === 'mock'
      ? mockGoogleCat
      : transformGoogleData(
        (await axios.get(
          `https://www.googleapis.com/customsearch/v1?q=${query}&imgSize=xxlarge&searchType=${searchType}&key=${googleKey}&cx=${googleCx}`,
        )).data,
      ),
  );
});

app.post('/unsplash', async (req, res) => {
  const { query } = req.body;

  res.setHeader('Content-Type', 'application/json');

  res.send(
    query === 'mock'
      ? mockUnsplashCat
      : transformUnsplashData(
        await unsplash.photos.searchPhotos(query, undefined, 1, 10).then(toJson),
      ),
  );
});

app.listen(3000, () => {
  console.log('api listening on port 3000!'); // eslint-disable-line no-console
});
