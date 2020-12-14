import 'piral/polyfills';
import { renderInstance, createFeedsApi } from 'piral';
import { createSearchApi } from 'piral-search';
import { layout, errors } from './layout';
import createCustomApi from './custom-api';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = `https://feed.piral.cloud/api/v1/pilet/matrix-feed`;

const { root } = renderInstance({
  layout,
  errors,
  extendApi: [createCustomApi(), createSearchApi(), createFeedsApi()],
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
});

setTimeout(() => {
  alert(root.foo());
}, 2000);
