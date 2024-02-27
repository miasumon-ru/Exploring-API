
const url = 'https://jsonplaceholder.typicode.com/comments';

function loadComments (){
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error('error happended ', err))
}

const loadComments2 = async  () => {
    const res = await fetch(url);

    const data = await res.json()
    
    console.log(data)
}