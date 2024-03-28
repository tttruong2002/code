var coursesApi = 'http://localhost:3000/courses'
// var coursesApi = 'https://jsonplaceholder.typicode.com/posts'

function start() {
    getCourses(renderCourses)
    handleCreateForm()

}
start()

function getCourses(callback) {
    fetch(coursesApi)
        .then(resp => resp.json())
        .then(callback);
}

function renderCourses(courses) {
    var listCoursesBlock = document.getElementById('list-courses')
    var htmls = courses.map(course =>
        `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                </br>
            </li>
        `)
    listCoursesBlock.innerHTML = htmls.join('')
}

function handleCreateForm(callback) {
    var createBtn = document.querySelector('#create')
    createBtn.onclick = (e) => {

        var name = document.querySelector('input[name="name"]').value
        var description = document.querySelector('input[name="description"]').value

        var dataForm = {
            name: name,
            description: description
        };
        createCourse(dataForm);
    }
}

function createCourse(dataForm) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataForm),
        mode: 'cors'
    }


    fetch(coursesApi, options)
        .then(function (resp) {
            return resp.json()
        })
        .then(data => console.log(data))
        .catch((err) => console.log(err))

    // fetch(coursesApi).then(res => res.json()).then(res => console.log(res))
}



































