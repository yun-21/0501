const intro = (callback) =>{
  let person={};
  callback(person,myName)
}

const myName = (a,calk) => {
  console.log(calk)
  a.name="안녕"
  calk(a,myAge)
}

const myAge = (b) => {
  b.age = 22;
  console.log(b)
}

intro((person,call)=>call(person,myName))