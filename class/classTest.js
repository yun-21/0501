class Blog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  set name(value) {
    if (typeof (value) === 'string') {
      this._name = value;
    } else {
      console.error("이름이 문자열이 아닙니다.")
    }
  }
  set age(value) {
    if (typeof (value) === 'number') {
      this._age = value;
    } else {
      console.error("나이가 숫자가 아닙니다.")
    }
  }
  get name() {
    return this._name
  }
  get age() {
    if (this._age > 20) {
      return this._age + "살"
    }
  }
}
const blog = new Blog('이름', 22);
console.log(blog)
console.log(blog.name)
console.log(blog.age)