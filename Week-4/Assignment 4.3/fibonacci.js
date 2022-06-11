let obj = {
  [Symbol.iterator](){
    let maxNumber = 10;
    let i = 0;
    let oldValue = 0;
    let newValue = 0;
    return{
      next() {
        if(i++<maxNumber){
          [oldValue,newValue] = [newValue, (oldValue+newValue) || 1]
          return {value:oldValue,done:false}
        }
        else{
          return {done:true}
        }
       
      }
    }
  }
}

console.log([...obj])


// let obj = {
//   [Symbol.iterator](){
//     let maxNumber = 10;
//     let i = 0;
//     let oldValue = 0;
//     let newValue = 0;
//     return{
//       next() {
//         if(i++<maxNumber){
//           [oldValue,newValue] = [newValue, (oldValue+newValue) || 1]
//           return {value:oldValue,done:false}
//         }
//         else{
//           return {done:true}
//         }
       
//       }
//     }
//   }
// }

// let obj2={}

// console.log(obj2.__proto__)




// let obj = {
//   _i: 0,
//   _array: [],
//   _limit: 10,
//   [Symbol.iterator]() {
//     return this;
//   },
//   next() {
//     if (this._array.length === 0) {
//       this._array.push(0);
//       this._i++;
//       return { value: 0, done: this._i > this._limit };
//     } else if (this._array.length === 1) {
//       this._array.push(1);
//       this._i++;
//       return { value: 1, done: this._i > this._limit };
//     } else {
//       const value = this._array[this._i - 2] + this._array[this._i - 1];
//       this._array.push(value);
//       this._i++;
//       return { value: value, done: this._i > this._limit };
//     }
//   },
//   return() {
//     return { done: true };
//   },
// };

// console.log([...obj]);

// const array1 = [
//   { fN: "a1", ln: "b1", age: 26 },
//   { fN: "a2", ln: "b2", age: 27 },
//   { fN: "a3", ln: "b3", age: 28 },
//   { fN: "a4", ln: "b3", age: 26 },
//   { fN: "a5", ln: "b3", age: 26 },
// ];

// // const output = array1.reduce((acc,curr) => {
// //   acc.push(`${curr.fN} ${curr.ln}`)
// //   return acc;
// // },[])

// // const output = array1.map(curr=>`${curr.fN} ${curr.ln}`)

// const output1 = array1.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age]++;
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// const output22 = array1.filter((x) => x.age < 27).map((x) => x.fN);

// const output = array1.reduce((acc, curr) => {
//   if (curr.age < 27) {
//     acc.push(curr.fN);
//   }
//   return acc;
// }, []);

// console.log(output);

// const fn1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("1sec");
//     }, 1000);
//   });
// };
// fn1().then((val) => {console.log(val)
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("2sec")
//     }, 2000);
//   })
  
// }).then((val) => console.log(val))

// ;

// console.log(Number({a:1}))


// // let i = cycle([1,2,3])

// // function* createCycle(arr){

// // }

// function* range(up){
//   for(let i=0;i<up;i++){
//     yield i;
//   }
// }

// // for(let el of range(100000)){
// //   console.log(el)
// // }

// function* cycle(arr){
//   while(true){
//     for(const a of arr){
//       yield a;
//     }
 
// }
// }

// for(let el of cycle([1,2,3])){
//   console.log(el)
// }

function* gen(){
  console.log('start')
  let str1 = `1.${yield}`
  console.log(str1)
  let str2 = `2.${yield}`
  console.log(str1,str2)
  return 'a'
}

let abc = gen()

// abc.next()
// abc.next(1)
// abc.next(2)


