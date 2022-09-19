const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  let hasil =0;

  return new Promise (async(resolve)=>{
    let TheaterIXX = await promiseTheaterIXX()
    .then(function (data) {
      data.forEach(data => {
        if(data.hasil === emosi){
          hasil++;
        }
      })
    });
    let theaterVGC = await promiseTheaterVGC()
    .then(function (data){
      data.forEach(function (data) {
        if(data.hasil === emosi){
          hasil++
        }
      })
    });
  resolve(hasil);
  })
};



module.exports = {
  promiseOutput,
};
