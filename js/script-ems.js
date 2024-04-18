// CREATE AN ARRAY OF EMPLOYEES
let employees = [];
let employee;
let storage = "";


// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
storage = localStorage.getItem('employees')

if(storage) {
    
    employees = JSON.parse(storage);
    console.log(storage);
    
}

// GET DOM ELEMENTS
const form = document.querySelector('#addForm');
const tableBody = document.querySelector('#empTable tbody');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE


form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES

    let employeeID = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;
    let ext = document.querySelector('#extension').value;
    let email = document.querySelector('#email').value;
    let department = document.querySelector('#department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    employee = new Array(employeeID, name, ext, email, department);

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees))
    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus()

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE

    if(e.target.tagName.toLowerCase() == "button"){
        if (confirm('Are you sure you want to delete this employee')) {
            console.log(e.target.parentElement.rowIndex);
            let rowIndex = e.target.parentElement.rowIndex - 1;
            employees.splice(rowIndex, 1);
            localStorage.setItem('employees', JSON.stringify(employees))
            buildGrid()
        } 
    }

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tableBody.innerHTML = "";

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    console.log(employees);
    
    for(let i = 0; i < employees.length; i++){
        let currentEmployee = employees[i]
        let row = document.createElement('tr');
        if(currentEmployee){
            row.innerHTML = `<td>${ currentEmployee[0] }</td><td>${ currentEmployee[1] }</td><td>${ currentEmployee[2] }</td><td>${ currentEmployee[3] }</td><td>${ currentEmployee[4] }</td><button class="btn btn-danger btn-sm float-end">X</button>`;
            tableBody.append(row);
        }
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT
    updateEmployeeCount();
    // STORE THE ARRAY IN STORAGE
    
};

function updateEmployeeCount(){
    let employeeCount = document.querySelectorAll('#empTable tr').length - 1;
    document.querySelector('#empCount').innerHTML = `(${ employeeCount })`;
}


