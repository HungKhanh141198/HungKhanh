const randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function Person(_age, _fullname, _email, _height, _weight, _address) {
    this.age = _age;
    this.fullname = _fullname;
    this.height = _height;
    this.weight = _weight;
    this.address = _address;

    this.calculateBMI = () => {
        console.log(this.weight, this.height);
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
const names = ["NVA", "NVB", "NVC", "NVD", "NVE", "NVF", "NVH", "NVG", "NVI", "VNK"];
const ages = [12, 14, 15, 16, 17, 18, 19, 20, 25, 53];
const mails = ["abc@gmail.com", "xyz@gmail.com", "gmh@gmail.com"];
const genders = ["male", "female"];
const weight = [60, 54, 65, 90];
const height = [1.54, 1.75, 1.44, 1.60];
const address = ["cua lo ", " ha tinh", "khanh hop"];
for (let count = 0; count < limit; count++) {
    const person = {
        name: names[randomInt(0, 9)],
        age: ages[randomInt(0, 9)],
        gender: genders[randomInt(0, 1)],
        weight: weight[randomInt(0, 3)],
        height: height[randomInt(0, 3)],
        address: address[randomInt(0, address.length - 1)]
    };
    personsArr.push(person);
}

const persons = personsArr.map(obj => {
    let person = new Person(
        obj.age,
        obj.name,
        obj.email,
        obj.height,
        obj.weight,
        obj.address
    )
    obj.BMI = person.calculateBMI().toFixed(1);
    obj.healthSTT = person.guessHealth();
})
console.log(personsArr);


// practice 2
const table = document.createElement("table");
table.classList.add('table')
table.classList.add('table-bordered')
table.innerHTML = `<tr>
            <th>Full Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Gender</th>
            <th>BMI</th>
            <th>Health Status</th>
            <th>Actions</th>
        </tr>`
personsArr.forEach(person => {
    let tr = document.createElement('tr')
    tr.innerHTML = `
            <th>${person.name}</th>
            <th>${person.age}</th>
            <th>${person.email}</th>
            <th>${person.gender}</th>
            <th>${person.BMI}</th>
            <th>${person.healthSTT}</th>
            <th>
            <button class="btn btn-primary">Edit</button>
            <button class=" btn btn-danger deleteBtn">Delete</button>
            </th>
`;
    table.appendChild(tr);
})
document.body.appendChild(table);

let deleteBtn = document.querySelectorAll('.btn-danger');
deleteBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let r = confirm("Do you want to delete this ?");
        if (r == true) {
            let th = btn.parentElement;
            let tr = th.parentElement;
            tr.remove()
        } else {
            return;
        }

    })

})