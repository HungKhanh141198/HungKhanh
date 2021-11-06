const $ = (value) => {
    return document.getElementById(value);
}

// const submitBtn = $("submitBtn");
// const submitBtn = document.getElementById("submitBtn");
sendBtn.addEventListener('click', () => {
        // full name
        const nameInput = $("nameInput");
        const nameMsg = $("nameMsg");

        const name = nameInput.value;

        var rexp = /^[a-zA-Z\s]{8,50}$/

        if (rexp.test(name)) {

            nameMsg.innerHTML = "<span class = 'text-success'>  Good job </span>";
        } else if (name.indexOf(" " === -1)) {
            nameMsg.innerHTML = "<span class = 'text-danger'> require </span>";
        } else {

            nameMsg.innerHTML = "<span class = 'text-danger'> your name is invalid </span>";
        }
        // email
        const mailInput = $("mailInput");
        const mailMsg = $("mailMsg");
        const mail = mailInput.value.trim();

        if (mail === "") {
            mailMsg.innerHTML = "<span class = 'text-danger'>  This field is required. </span>";
        } else {
            if (!mail.includes("@")) {
                mailMsg.innerHTML = "<span class = 'text-danger'>  Your email is invalid. Please correct your email. </span>";
            } else {
                if (mail.includes("@edu.com.vn")) {
                    mailMsg.innerHTML = "<span class = 'text-success'>  Good jobs </span>";
                } else {
                    mailMsg.innerHTML = "<span class = 'text-danger'>  We only accept educational emails. </span>";
                }

            }

        }




        // Sports Favourite
        var valid = true;
        if (document.getElementById("game").checked || document.getElementById("swim").checked || document.getElementById("running").checked || document.getElementById("chess").checked || document.getElementById("football").checked || document.getElementById("other").checked) {
            const sportFavouriteMsg = document.getElementById('sportFavouriteMsg');
            sportFavouriteMsg.innerHTML = "";
        } else {
            valid = false;
            const sportFavouriteMsg = document.getElementById('sportFavouriteMsg');
            sportFavouriteMsg.innerHTML = "<span class='text-danger' >  You should select at least one option. </span>";
        }


        //Show Age
        const ageMsg = $('ageMsg');
        const valueAge = $("ageInput").value;

        if (valueAge <= 30) {

            ageMsg.innerHTML = "<span> You’re still young! </span>";

        } else {
            ageMsg.innerHTML = "";

        }
        // Address

        const addressMsg = $('addressMsg');
        const address = addressInput.value.trim();
        if (address === "") {
            addressMsg.innerHTML = "<span class='text-danger'> This is not required.</span>";
        }

        // Describe yourself

        const describeInput = $('describeInput');
        const describeMsg = $('describeMsg');
        const describe = describeInput.value.trim();
        if (describe === "") {
            describeMsg.innerHTML = "<span class='text-danger'> This is not required.</span>";
        }


        // Describe yourself

        const tellusInput = $('tellusInput');
        const tellusMsg = $('tellusMsg');
        const tellus = tellusInput.value.trim();
        if (tellus === "") {
            tellusMsg.innerHTML = "<span class='text-danger'> This is not required.</span>";
        }
    })
    // reset
function myFunction() {
    document.getElementById("myForm").reset();

    nameMsg.innerHTML = "";
    mailMsg.innerHTML = "";
    sportFavouriteMsg.innerHTML = "";
    ageMsg.innerHTML = "";
    addressMsg.innerHTML = "";
    describeMsg.innerHTML = "";
    tellusMsg.innerHTML = "";
}