{
    //Variables
    let userList
    const usersTable = document.querySelector(".userlist"),
        okButton = document.querySelector('.ok-btn'),
        tableHeader = document.querySelector('.table-header'),
        cancelButton = document.querySelector('.cancel-btn'),
        addButton = document.querySelector('.add'),
        form = document.getElementById('userinputs'),
        blockBackground = document.querySelector('.blocked')

    //Functions below are for using only get-requests on jsonplaceholder. For using
    // JSON server turn on comments on this functions and turn off comments for next 3

    async function getUserList() {

        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        userList = await response.json()

    }

    function addUser(event) {
        event.preventDefault();


        const addUserWindow = document.querySelector('.adduser'),
            form = this,
            maxId = findMaxId(userList),
            newUser = {
                id: maxId + 1,
                "name": form.name.value,
                "username": form.username.value,
                "email": form.email.value,
                "address": {
                    street: form.street.value || 'not available',
                    suite: form.suite.value || 'not available',
                    city: form.city.value || 'not available',
                    zipcode: form.zipcode.value || 'not available'
                },
                phone: form.phone.value || 'not available',
                website: form.website.value || 'not available',
                company: {
                    name: form.company.value || 'not available'
                }
            }

        userList.push(newUser)
        renderTable(userList)
        addUserWindow.classList.add('hidden')
        blockBackground.classList.add('hidden')
    }




    function removeUser(event) {

        if (!event.target.classList.contains('remove-btn')) {
            return
        }


        const id = event.target.parentElement.parentElement.getAttribute('id'),
            elem = document.getElementById(id),
            index = userList.findIndex((el) => el.id === +id)

        elem.remove()
        userList.splice(index, 1)
        renderTable(userList)
    }


    // Functions for using with JSON server. Turn off comments on them and turn on
    // comments on 3 functions above to use JSON server. Pay attention: in this functions
    // JSON server has to be started on localhost:3001

    // 
    // async function getUserList() {
    //     const response = await fetch('http://localhost:3001/users')
    //     userList = await response.json()
    // }

    // async function addUser(event) {
    //     event.preventDefault();
    // const addUserWindow = document.querySelector('.adduser'),
    //     form = this,
    //     newUser = {
    //         id: userList.length + 1
    //         "name": form.name.value,
    //         "username": form.username.value,
    //         "email": form.email.value,
    //         "address": {
    //             street: form.street.value || 'not available',
    //             suite: form.suite.value || 'not available',
    //             city: form.city.value || 'not available',
    //             zipcode: form.zipcode.value || 'not available'
    //         },
    //         phone: form.phone.value || 'not available',
    //         website: form.website.value || 'not available',
    //         company: {
    //             name: form.company.value || 'not available'
    //         }
    //     }
    //     await fetch('http://localhost:3001/users', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newUser)
    //     })
    //     await getUserList()

    //     userList.push(newUser)
    //     renderTable(userList)
    //     addUserWindow.classList.add('hidden')
    //     blockBackground.classList.add('hidden')
    // }

    // async function removeUser(event) {

    //     if (!event.target.classList.contains('remove-btn')) {
    //         return
    //     }


    //     const id = event.target.parentElement.parentElement.getAttribute('id'),
    //         elem = document.getElementById(id)


    //     await fetch(`http://localhost:3001/users/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     await getUserList()

    //     let index = userList.findIndex((el) => el.id === id)
    //     userList.splice(index, 1)
    //     renderTable(userList)
    // }


    //General Functions


    function sortTable(event) {
        if (event.target.getAttribute('type') === 'remove') {
            return
        }

        const type = event.target.getAttribute('type')

        function compareAToZ(a, b) {
            if (a[type] < b[type]) {
                return -1
            }
            else {
                return 1
            }
        }

        function compareZToA(a, b) {
            if (a[type] > b[type]) {
                return -1
            }
            else {
                return 1
            }
        }

        if (!event.target.hasAttribute('sort-dir')) {
            event.target.setAttribute('sort-dir', 'AtoZ')
            userList.sort(compareAToZ)
        }
        else if (event.target.getAttribute('sort-dir') === 'AtoZ') {
            event.target.setAttribute('sort-dir', 'ZtoA')
            userList.sort(compareZToA)
        }
        else {
            event.target.setAttribute('sort-dir', 'AtoZ')
            userList.sort(compareAToZ)
        }

        renderTable(userList)

    }

    function renderTable(userList) {
        const table = document.querySelector('.userlist')
        let html = ''
        userList.map((user, index) => {
            if (index % 2 === 0) {
                user.even = "light-tr"
            }
            else {
                user.even = "dark-tr"
            }

            html += `<tr id="${user.id}" class="${user.even}">
        <td>
            ${user.name}
        </td>
        <td>
            ${user.username}
        </td>
        <td>
            ${user.email}
        </td>
        <td>
        <button class="remove-btn">
            X
        </button>
        </td>
    </tr>`

        })

        table.innerHTML = html
    }



    function renderInfo(event) {

        if (event.target.classList.contains('remove-btn')) {
            return
        }

        const infoSection = document.querySelector('.infosection'),
            infoWindow = document.querySelector('.userinfo'),
            id = event.target.parentElement.getAttribute('id')

        let user

        userList.forEach(value => {
            if (value.id === +id) {
                user = value
            }
        })
        let html = `
        <section>
            <h1>Main information:</h1>
            <p>Name: ${user.name} </p>
            <p>Username: ${user.username} </p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p>Company: ${user.company.name}</p>
        </section>
        <section>
            <h1>Address: </h1>
            <p>Street:${user.address.street}</p>
            <p>Suite: ${user.address.suite}</p>
            <p>City: ${user.address.city}</p>
            <p>Zipcode: ${user.address.zipcode}</p>
        </section>`
        infoSection.innerHTML = html
        infoWindow.classList.remove('hidden')
        blockBackground.classList.remove('hidden')

    }

    function findMaxId(array) {
        let idArray = []

        array.forEach(el => idArray.push(el.id))
        return Math.max.apply(null, idArray)
    }


    //Event Lusteners


    tableHeader.addEventListener('click', sortTable)
    usersTable.addEventListener('click', removeUser)
    usersTable.addEventListener('click', renderInfo)
    form.addEventListener('submit', addUser)
    okButton.addEventListener('click', () => {
        const infoWindow = document.querySelector('.userinfo')
        infoWindow.classList.add('hidden')
        blockBackground.classList.add('hidden')
    })

    addButton.addEventListener('click', () => {
        const addUserWindow = document.querySelector('.adduser')
        addUserWindow.classList.remove('hidden'),
            blockBackground.classList.remove('hidden')
    })

    cancelButton.addEventListener('click', () => {
        const addUserWindow = document.querySelector('.adduser')
        addUserWindow.classList.add('hidden')
        blockBackground.classList.add('hidden')
    })


    //First Load & Render

    getUserList().then(value => renderTable(userList))


}