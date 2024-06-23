function allWorld() {
    this.world = 'earth';
    this.myWorld = 'Mars';
}

allWorld.prototype.weWorld = function (){
    console.log(`내가 사는 곳은 ${this.myWorld}입니다. 누가 ${this.world}에서 살죠?`)
}
const meWorld = new allWorld();
meWorld.weWorld();
