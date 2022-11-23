// function resolve2secs () {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("resolved")
//         }, 2000);
//     })
// }

// async function asyncCall() {
//     console.log('calling...')
//     const result = await resolve2secs();
//     console.log(result)
// }


function resolveAfter2Seconds() {
    console.log('starting slow promise');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('slow')
            console.log('slow promise is done');
        }, 2000)
    })
}

function resolveAfter1Second() {
    console.log('starting fast promise');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('fast');
            console.log('fast promise is done')
        }, 1000)
    })
}

async function sequentialStart() {
    console.log('===SEQUENTIAL START===');

    const slow = await resolveAfter2Seconds();
    console.log(slow);

    const fast = await resolveAfter1Second()
    console.log(fast)
}

async function concurrentStart() {
    console.log("===CONCURRENT START with await===");

    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();

    console.log(await slow);
    console.log(await fast);
}

function concurrentPromise() {
    console.log('==CONCURRENT START with Promise.all==');
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(msg => {
        console.log(msg[0]);
        console.log(msg[0]);
    })
}

async function parallel() {
  console.log("==PARALLEL with await Promise.all==");

  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
}

parallel()