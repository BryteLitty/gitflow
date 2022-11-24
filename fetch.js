const getText = document.querySelector('#getText');
const getUsers = document.querySelector('#getUsers');
const container = document.querySelector('.container')
const form = document.querySelector('form')

getText.addEventListener('click', () => {
    fetch('sample.txt')
    .then((res) => {return res.text()})
    .then((data) => container.innerHTML = data)
    .catch((err) => alert("erro"))
})

getUsers.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = ""
        data.forEach((post) => {
            output += `
            <div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
            `
        })
        container.innerHTML = output
    })
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.querySelector('#title').value;
    let body = document.querySelector('#body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title: title, body: body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
})