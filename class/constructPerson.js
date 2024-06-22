//딥다이브 420p 예제
var Person = (function(){
    //생성자 함수
    function Person(name){
        this.name = name;
    }
    //프로토타입 메서드
    Person.prototype.sayHi = function(){
        console.log('Hi, My name is '+ this.name);
    }
    //정적 메서드
    Person.sayHello = function (){
        console.log('Hello!');
    }
    //생성자 함수 반환
    return Person;
}());