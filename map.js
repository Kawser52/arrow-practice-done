/* const numbers= [54, 24, 24, 54];
const mapPrac = numbers.map(num=>num*2);
console.log(mapPrac); */

/* const arrayList = [2,2,5,47,22];
const mapKor = arrayList.map(num=>num*5);
console.log(mapKor); */

/* const oddArray = [4, 5, 6 , 7,55,103];
const list = oddArray.filter(item=>item%2==1);
console.log(list); */

const product = [
       {name : 'Oppo', price : 7000, color : 'silver'},
       {name : 'nokia', price: 5600, color: 'black'},
       {name: 'Xioami', price: 5000, color : 'yellow'},
       {name: 'apple', price: 20000, color: 'red'}
];
// product.map(product => console.log(product));
const productFind = product.find(item => item.price ==5000);
console.log(productFind);