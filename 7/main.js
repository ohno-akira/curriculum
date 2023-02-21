let numbers =[2, 5, 12, 13, 15, 18, 22];

function isEven() {
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            console.log(numbers[i]);
        } 
    }
}//[i]が配列のインデックス部分になり、numbers配列のi個の値を取得すると指定しているものになるので必要になります。

isEven();


class Car {
    //②値を渡す
    constructor(oil,number){
        //このクラスで使える様に代入
        this.oil = oil;
        this.number = number;
    }
getNumGas(){
    console.log(`ガソリンは${this.oil}です。ナンバーは${this.number}です。`);
}

}
//①インスタンス化
let toyota = new Car('レギュラー',2468);
let mini = new Car('ハイオク',3298);
toyota.getNumGas();
mini.getNumGas();

