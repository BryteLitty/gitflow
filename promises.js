const posts = [
    {title: 'Post One', body: 'Fucking Post One, You got it!'},
    {title: 'Post Two', body: 'Shitting and confusing as it is'}
]

const getPosts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.body}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

const createPost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject("Fuck Bigg Error, Bro");
            }
        }, 2000)
    });
}

// createPost({title: 'Post Three', body: 'You damn f88cking h!t!!'})
//     .then(getPosts)
//     .catch(err => console.log(err))

async function init() {
    await createPost({title: 'Post Three', body: 'You damn f88cking h!t!!'});

    getPosts();
}

init()