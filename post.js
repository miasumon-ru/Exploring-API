

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayData(data))
}


function displayData(posts) {
    //  console.log(posts)

    const divContainers = document.getElementById('post-containers')


    for (const post of posts) {

        const div = document.createElement('div');

        div.innerHTML = `

        <h5> user : ${post.userId} </h5>

        <h6>the post title ${post.title} </h6>

        <p> the post description ${post.body} </p>
   
        `

        // divContainers.appendChild(div)

        div.classList.add('post')

    }
}

function createAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function deleteAPost (){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}

function patchAPost (){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}



loadData();

