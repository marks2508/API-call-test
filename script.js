console.log('Hello world');

const getRandomNumber = (min, max) => {
    return Math.random() * (max-min) + min;
}

const number = getRandomNumber(10000, 50000);
const roundNum = Math.round(number);

console.log(roundNum);

let object

(function getRecipt() {
    fetch(`https://www.food2fork.com/api/get?key=5caaf9d1dbf485925168dea1fbaf25ee&rId=${roundNum}`)
    .then(res => res.json())
    .then(data => object = data)
    .then(() => console.log(object))
  
  setTimeout(function() {
      console.log('object is ', object);    
  }, 2000);
  if (obj.recipe === '') {
      getRecipt();
  }
})();

unirest.get("https://restcountries-v1.p.rapidapi.com/capital/tallinn")
.header("X-RapidAPI-Key", "529f860143msh8beaf35c3955189p10a427jsn7c586cf8a8d4")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});