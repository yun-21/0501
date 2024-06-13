const number= (callback) =>{
  let num = 2;
  callback(num)
}

number((num)=>console.log(num))