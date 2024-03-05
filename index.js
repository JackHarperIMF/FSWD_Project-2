const card = {
    taskList: [],
}

//Using Document Object Model:
const taskContents = document.querySelector(".task_contents");
const taskModal = document.querySelector(".taskModal_body");

const TaskCard = ({url, title, type, description, id}) => `
    <div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
        <div class="card shadow-sm custom__card">
            <div class="card-header">
                Featured
            </div>

            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>

            <div class="card-footer d-flex justify-content-end">
                <button type="button" class="btn btn-outline-primary mr-2" name=${id}><i class="fa-solid fa-pen" name=${id}></i></button>
                <button type="button" class="btn btn-outline-danger" name=${id}><i class="fa-solid fa-trash-can" name=${id}></i></button>
            </div>
        </div>
    </div>
        
`

const ModalContent = ({url, title, type, description, id}) => {
    const date = new Date((id));

    `

    <strong> Created on ${date.toDateString} </strong>
    <h2 class="my-3"></h2>
    <p class="lead></p>
    `

    
}