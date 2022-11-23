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

const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}

// getPosts();
createPost({title: 'Post three', body: 'You fucking hit!!'}, getPosts)