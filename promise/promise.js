let axios = {
  get() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          a: 'adsas',
          b: 'sdaa',
          message: 'hello',
        });
      }, 3000);
    });
  }
};

axios.get().then(res => res.message)
.then(data => console.log(data)) //hello
.then(res => console.log(res)) //undefined