$('#myModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus')
})

//Create a prototype Person
const randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function Person(_fullname, _age, _email, _gender, _height, _weight, _address) {
    this.fullname = _fullname;
    this.age = _age;
    this.email = _email;
    this.gender = _gender;
    this.height = _height;
    this.weight = _weight;
    this.address = _address;

    this.calculateBMI = () => {
        return this.weight / Math.pow(this.height, 2);
    }

    this.guessHealth = () => {
        let BMI = this.calculateBMI().toFixed(1);


        if (BMI < 18.5) {
            return "underweight";
        }

        if (BMI >= 18.5 && BMI <= 24.9) {
            return "normalweigh";
        }

        if (BMI >= 24.9 && BMI <= 29.9) {
            return "overweight";
        }
        return "obesity"
    };
}


const personsArr = []
const limit = 10;
const names = ["hung", "hai", "hung", "hieu", "huyen", "hang", "hoi", "khai", "mai", "uyen"];
const ages = [12, 14, 15, 16, 17, 18, 19, 20, 25, 53];
const mails = ["abc@gmail.com", "xyz@gmail.com", "gmh@gmail.com"];
const genders = ["male", "female"];
const weight = [60, 54, 65, 90];
const height = [1.54, 1.75, 1.44, 1.60];
const address = ["cua lo ", " ha tinh", "khanh hop"];
for (let count = 0; count < limit; count++) {
    const person = {
        fullname: names[randomInt(0, names.length - 1)],
        email: mails[randomInt(0, mails.length - 1)],
        age: ages[randomInt(0, ages.length - 1)],
        gender: genders[randomInt(0, genders.length - 1)],
        weight: weight[randomInt(0, weight.length - 1)],
        height: height[randomInt(0, height.length - 1)],
        address: address[randomInt(0, address.length - 1)]
    };
    personsArr.push(person);
}

const persons = personsArr.map(obj => {
    let person = new Person(
        obj.fullname,
        obj.age,
        obj.email,
        obj.gender,
        obj.height,
        obj.weight,
        obj.address
    )
    obj.BMI = person.calculateBMI().toFixed(1);
    obj.healthSTT = person.guessHealth();
})



// Create static data table of Person
const table = document.getElementById("table");

function drawTable(arr) {
    arr.forEach(person => {
        let tr = document.createElement('tr')
        tr.classList.add('userData')
        tr.innerHTML = `
            <th>${person.fullname}</th>
            <th>${person.age}</th>
            <th>${person.email}</th>
            <th>${person.gender}</th>
            <th>${person.BMI}</th>
            <th>${person.healthSTT}</th>
            <th>
                <button type="button" class="btn btn-primary editBtn" data-toggle="modal" data-target="#exampleModal"> Edit </button>
                <button class=" btn btn-danger deleteBtn">Delete</button>
            </th>
`;
        table.appendChild(tr);


        console.log(table)
    })
    bindDeleteFunction();
    bindEditFunction()
}
drawTable(personsArr)


// Create a form input
let fullnameValidate = document.querySelector(".fullnameValidate")
let newUserAgeValidate = document.querySelector(".newUserAgeValidate")
let emailValidate = document.querySelector(".emailValidate")
let heightValidate = document.querySelector(".heightValidate")
let weightValidate = document.querySelector(".weightValidate")

function validateForm(fullname, age, email, height, weight) {
    let valid = true;
    if (fullname.trim() == "") {
        valid = false
        fullnameValidate.innerHTML = '<span class="text-danger">This field is required</span>'
    }
    if (email.trim() == "") {
        valid = false
        emailValidate.innerHTML = '<span class="text-danger">This field is required</span>'
    }
    if (!email.trim().includes('@')) {
        valid = false
        emailValidate.innerHTML = '<span class="text-danger">Email is invalid</span>'
    }
    if (height.trim() == "") {
        valid = false
        heightValidate.innerHTML = '<span class="text-danger">This field is required</span>'
    }
    if (weight.trim() == "") {
        valid = false
        weightValidate.innerHTML = '<span class="text-danger">This field is required</span>'
    }

    return valid
}

function handleAddUser() {


    let fullname = document.getElementById("newUserFullname").value
    let age = document.getElementById("newUserAge").value
    let email = document.getElementById("newUserEmail").value
    let gender = document.getElementById("newUserGender").value
    let height = document.getElementById("newUserHeight").value
    let weight = document.getElementById("newUserWeight").value
    let address = document.getElementById("newUserAddress").value
    validateForm(fullname, age, email, height, weight)
    if (validateForm(fullname, age, email, height, weight)) {
        fullnameValidate.innerHTML = ''
        emailValidate.innerHTML = ''
        newUserHeightValidate.innerHTML = ''
        newUserWeightValidate.innerHTML = ''
        let person = new Person(
            fullname,
            age,
            email,
            gender,
            height,
            weight,
            address
        )
        let BMI = person.calculateBMI().toFixed(1);
        let healthSTT = person.guessHealth();
        let tr = document.createElement('tr')
        tr.innerHTML = `
            <th>${fullname}</th>
            <th>${age}</th>
            <th>${email}</th>
            <th>${gender}</th>
            <th>${BMI}</th>
            <th>${healthSTT}</th>
            <th>
                <button type="button" class="btn btn-primary editBtn" data-toggle="modal" data-target="#exampleModal"> Edit </button>
                <button class=" btn btn-danger deleteBtn">Delete</button>
            </th>
`;
        table.appendChild(tr);
        bindDeleteFunction();
        bindEditFunction();
        document.getElementById('form').reset()
    }
}


// Control action click Delete button
function bindDeleteFunction() {
    let deleteBtn = document.querySelectorAll('.btn-danger');
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            let th = btn.parentElement;
            let tr = th.parentElement;
            var r = confirm("Do you want to delete this row ?")
            if (r) {
                tr.remove()
            }

        })
    })
}
bindDeleteFunction()

//Control action click Edit button
let userId = -1;
let editFullname = document.getElementById("editFullname")
let editAge = document.getElementById("editAge")
let editEmail = document.getElementById("editEmail")
let editGender = document.getElementById("editGender")
let editHeight = document.getElementById("editHeight")
let editWeight = document.getElementById("editWeight")
let editAddress = document.getElementById("editAddress")

function bindEditFunction() {
    let editBtn = document.querySelectorAll('.editBtn');
    editBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            userId = i
            editFullname.value = personsArr[i]['fullname']
            editAge.value = personsArr[i]['age']
            editEmail.value = personsArr[i]['email']
            editGender.value = personsArr[i]['gender']
            editHeight.value = personsArr[i]['height']
            editWeight.value = personsArr[i]['weight']
            editAddress.value = personsArr[i]['address']
        })
    })
}
bindEditFunction()

function editUser() {
    let editedPerson = new Person(editFullname.value, editAge.value, editEmail.value, editGender.value, editHeight.value, editWeight.value, editAddress.value)
    personsArr[userId]['fullname'] = editFullname.value
    personsArr[userId]['age'] = editAge.value
    personsArr[userId]['email'] = editEmail.value
    personsArr[userId]['gender'] = editGender.value
    personsArr[userId]['height'] = editHeight.value
    personsArr[userId]['weight'] = editWeight.value
    personsArr[userId]['address'] = editAddress.value
    personsArr[userId]['BMI'] = editedPerson.calculateBMI().toFixed(1);
    personsArr[userId]['healthSTT'] = editedPerson.guessHealth();
    resetTable();
    drawTable(personsArr)

}

//Create 1 search-input
function resetTable() {
    let userDataRow = document.querySelectorAll(".userData")
    userDataRow.forEach(row => {
        row.remove()
    })
    bindEditFunction()
}

function handleSearch() {
    let type = document.getElementById("searchType").value;
    let keyword = document.getElementById("searchKeyword").value.trim();
    if (keyword.length == 0) {
        resetTable();
        drawTable(personsArr)
    }
    let result = personsArr.filter(person => {
        return person[type].includes(keyword)
    })
    resetTable()
    drawTable(result)
}