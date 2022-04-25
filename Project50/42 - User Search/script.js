const userList = document.getElementById('user-list')
const search = document.getElementById('search')
const notFound = document.getElementById('not-found')
const loading = document.getElementById('loading')

const listItems = []

search.addEventListener('input', (e) => searchData(e.target.value))

async function getData() {
  const data = await fetch('https://randomuser.me/api?results=150')
  const { results } = await data.json()

  loading.classList.add('hide')

  results.forEach((user) => {
    const li = document.createElement('li')
    listItems.push(li)

    li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>Country: </br>${user.location.country}</p> 
                <p>Postcode:</br>${user.location.postcode}</p>
                <p>Phone number: </br>${user.phone}</p>
            </div>            
        `

    userList.appendChild(li)
  })
}

function searchData(term) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(term.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
  if (userList.clientHeight < 50) {
    notFound.classList.remove('hide')
  } else {
    notFound.classList.add('hide')
  }
}

getData()
