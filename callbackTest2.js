const func1 = (num,callback) => {
  const number = num;
  callback(number)
}

func1(10,(value)=>console.log(value))