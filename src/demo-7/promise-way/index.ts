import { UtilFactory, getConfig } from './util';

import { another } from './another';

getConfig().then(conf => {
  const util = UtilFactory(conf);

  util.setToken();
  util.getToken();

  function main() {
    util.getToken();
  }

  main();

  another(conf);
});
