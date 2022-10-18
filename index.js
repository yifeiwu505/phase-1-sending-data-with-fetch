

function submitData(name,email){
  
  return  fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({name:name,email:email})
    })
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => {
        document.body.innerHTML = error.message
    })
    
    
}
//the above is the first section of the deliverables
// function displayError(error) {
//     // const h2 = document.createElement('h2')
//     // h2.textContent = error
//     document.body.innerHTML = error.message
// }
function displayData(user){
    console.log(user)
    const h1 = document.createElement('h1')
   h1.textContent = user.id
   document.body.append(h1)
}

// submitData('joe','joe@mail.com')