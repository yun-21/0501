class World{
    constructor(){
        this.world='earth';
        this.myWorld='Mars';
    }

    //프로토타입 메서드
    weWorld(){
        console.log(`내가 사는 곳은 ${this.myWorld}입니다. 누가 ${this.world}에서 살죠?`)
    }
}
const allWorld = new World();
allWorld.weWorld();
