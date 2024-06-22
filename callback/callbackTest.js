function func1(callback){
  callback()
}

function func2(){
  console.log("func2함수에 들어있다.");
}

func1(func2)