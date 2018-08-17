function getConfig() {
  console.log('getConfig');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ meta: 'hello' });
    }, 3000);
  });
}

const util = {
  init(conf: any) {
    this.conf = conf;
  },

  setToken() {
    console.log('setToken: ', this.conf);
  },

  getToken() {
    console.log('getToken: ', this.conf);
  }
};

export { getConfig, util };
