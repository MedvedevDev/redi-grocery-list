const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

let editElement, 
    editFlag = false,
    editID = "" 

// EVENT LISTENERS
form.addEventListener('submit', addItem)    

// FUNCTIONS
function addItem(e) {
    e.preventDefault();
}

// LOCAL STORAGE

// SETUP