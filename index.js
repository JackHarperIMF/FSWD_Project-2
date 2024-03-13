const card = {
    taskList: [],
}

//Using Document Object Model: document represents the entire web page, through this js can access and modify the html code
const taskContents = document.querySelector(".task_contents");
const taskModal = document.querySelector(".taskModal_body");

//The HTML code written inside a js is enquoted with `` (backticks) and when accessing js content in html code we use ${}
const TaskCard = ({url, title, tag, description, id}) => `
    <div class="col-md-6 col-lg-4 mt-3 ms-3" id=${id} key=${id}>
        <div class="card shadow-sm custom__card">
            <div class="card-header d-flex justify-content-end">
                <button type="button" class="btn btn-outline-primary mr-2" name=${id}><i class="fa-solid fa-pen" name=${id}></i></button>
                <span class="mx-1"></span>
                <button type="button" class="btn btn-outline-danger" name=${id}><i class="fa-solid fa-trash-can" name=${id}></i></button>
            </div>

            <div class="card-body">
                ${ url &&
                    `<img src= ${url}  class="card-img-top" alt="task image" width="100%" md-3 rounded-lg/>`
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

const ModalContent = ({url, title, type, description, id}) => {
    // parseInt === (Ex: "06032024 16:55" into a int type, it cannot convert "hello" into int return NaN)
    const date = new Date(parseInt(id));  
    return `
        <div id=${id}>
            ${ url &&
                `<img src= ${url}  class="img-fluid" alt="task image" md-3 rounded/>`
            }
            // convert back to string to display it 
            <strong> Created on ${date.toDateString} </strong>
            <h2 class="my-3">${title}</h2>
            <p class="lead>${description}</p>
        </div>
    `
}

const UpdateLocalMemory = () => {
    localStorage.setItem("task", JSON.stringify({tasks: card.taskList}))

}