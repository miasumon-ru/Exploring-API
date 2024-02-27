

function loadData2 (){
    const url2 = 'https://jsonplaceholder.typicode.com/users';

    fetch(url2)
    .then(res => res.json())
    .then(data => displayUser(data))
}

function displayUser (users){
    // console.log(users)

    const usersList = document.getElementById('users-list')
    for ( const user of users){
        console.log(user.name)
        console.log(`The user name is ${user.username}`)
        console.log(user.email);

        const li = document.createElement('li');
        li.innerText = user.name;

        usersList.appendChild(li);
        

    

    }
}

