const { zip } = require('lodash');
const a1 = require('./main');
const a2 = require('./main');
const a3 = require('./main');


// const a1 = new A();
// const a2 = new A();
// const a5 = new A();
var arr = [1,2,3]
arr.unshift('0')
console.log(arr);
console.log(a1.__id);
console.log(a2.__id);
console.log(a3.__id);

var str = "code" + " ".repeat(140) + "wars";
function generateHashtag (str) {
    if(str.length >= 140 || str === '' || str.replace(' ', '') === '') {
      return false;
    }
    
    const res = str
      .split(' ')
      .map(itemArr => {
          return itemArr.split('')
              .map((item, index) => {
                  return index === 0 ? item.toUpperCase() : item;
              })
              .join('');
      });
  
      res.unshift('#');
      return res.join('');
  }

  
  str.replace(/ /g, '').length > 140

  //console.log(str);
//   console.log(generateHashtag(str));