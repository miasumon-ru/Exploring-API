// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



// Json returns a promise , on the other hand , json.parse is syncronus and provides value directly

const url = 'https://jsonplaceholder.typicode.com/todos/1'




function loadData() {

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));

}