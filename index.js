//Store all Tasks in this list.
const state = {
    taskList: [],
}

const taskContents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".taskModal_body");

//This creates a Card everytime with the values from the user  
const createCard = ({url, title, tag, description, id}) => `
    <div class="col-md-6 col-lg-4 mt-3 ms-3" id=${id} key=${id}>
        <div class="card shadow-sm custom__card">
            <div class="card-header d-flex justify-content-end">
                <button type="button" class="btn btn-outline-primary mr-2" name=${id}><i class="fa-solid fa-pen" name=${id}></i></button>
                <span class="mx-1"></span>
                <button type="button" class="btn btn-outline-danger" name=${id}><i class="fa-solid fa-trash-can" name=${id}></i></button>
            </div>

            <div class="card-body">
                ${ url ?
                    `<img src= ${url}  class="card-img-top" alt="task image" width="100%" md-3 rounded-lg/>`:
                    `<img width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&usqp=CAU" alt="card image top" class="card-img-top md-3 rounded-lg" />`
                }
                <h4 class="card-title"> ${title} </h4>
                <p class="card-text trim-2-lines text-muted"> ${description}</p>
                <span class="badge text-bg-primary m-1"> ${tag}</span>
            </div>

            <div class="card-footer">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#OpenTaskModal"> Open Task </button>
            </div>
        </div>
    </div>
`


const modalContent = ({url, title, type, description, id}) => {
    //Getting Timestamp in int
    const date = new Date(parseInt(id));  
    return `
        <div id=${id}>
            ${ url ?
                `<img src= ${url}  class="img-fluid" alt="task image" md-3 rounded/>` :
                `<img src=src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&usqp=CAU" class="img-fluid" alt="card default" md-3 rounded/>`
            }
            // convert back to string to display it 
            <strong> Created on ${date.toDateString} </strong>
            <h2 class="my-3">${title}</h2>
            <p class="lead">${description}</p>
        </div>
    `
}

//Update tasks in local storage to avoid losing info on tasks
const UpdatelocalStorage = () => {
    localStorage.setItem("task", JSON.stringify({tasks: state.taskList}));
}

//Load the stored data on refreshing the page
const loadInititalData = () => {
    const localStorageCopy = JSON.parse(localStorage.task);
    
    //Put them into the Task list
    if(localStorageCopy) state.taskList = localStorageCopy.tasks;

    //From LocalStorage to Creating Card
    state.taskList.map((content)=>{
        taskContents.insertAdjacentHTML("beforeend", createCard(content))
    })
}

const handleInput = (event) => {
    const id = ` ${Date.now()} `;
    const input = {
        url: document.getElementById('imageInput').value,
        title: document.getElementById('titleInput').value,
        tag: document.getElementById('Tagtype').value,
        description: document.getElementById('taskDescription').value,
    };

    //check that fields are not empty
    if(value.title === "" || value.tag === "" || value.description === ""){
        return alert("Please fill the required fields");
    }

    //Give the input values to function
    taskContents.insertAdjacentElement("beforeend", createCard({...input, id}));

    //update it into Tasklist and localStorage
    state.taskList.push({...input, id});
    UpdatelocalStorage();
}