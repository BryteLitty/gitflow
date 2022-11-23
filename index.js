const myNumbers = [4, 1, -20, -7, 5, 9, -6]

function remNum(num, cb) {
    const myArr = [];

    for (const x of num) {
        if(cb(x)) {
            myArr.push(x)
        }
    }

    return myArr
}

let posNum = remNum(myNumbers, (x) => x >= 0)

let myPromise = new Promise((resolve, reject) => {
    let x = 0;

    if (x == 0){
        resolve("ok")
    } else {
        reject('Error')
    }
}).then(
    (err) => {console.log(err)},
    (val) => {console.log(val)}
)