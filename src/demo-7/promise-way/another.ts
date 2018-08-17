import { UtilFactory } from './util';

function another(conf) {
  const util = UtilFactory();

  util.setToken();
  util.getToken();
}

export { another };
