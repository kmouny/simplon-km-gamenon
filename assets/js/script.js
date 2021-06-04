const navigation_site = document.querySelector("header nav ul");
const main_elt = document.querySelector("main");
const first_section = document.querySelector("main section:first-child");
const modal = document.getElementById("myModal");
const op_form = document.getElementById("openForm");
const header_part = document.querySelector("header");
const footer_part = document.querySelector("footer");

document.querySelector(".nav-burger").addEventListener("click", () => {
    if (
        navigation_site.style.display === "" ||
        navigation_site.style.display === "none"
    ) {
        navigation_site.style.display = "flex";
    } else {
        navigation_site.style.display = "none";
    }
});

const changeDisplay = () => {
    if (first_section.style.display !== "none") {
        first_section.style.display = "none";
        footer_part.style.display = "none";
        if (window.screen.width > 761) {
            header_part.style.display = "none";
            modal.style.marginTop = "60px";
        } else {
            header_part.style.display = "flex";
            modal.style.marginTop = "0px";
        }
        createForm();
        modal.style.display = "flex";
    }
};

const changeAnotherDisplay = () => {
    if (modal.style.display !== "none") {
        first_section.style.display = "grid";
        footer_part.style.display = "flex";
        header_part.style.display = "flex";
        modal.style.display = "none";
    }
};

op_form.addEventListener("click", changeDisplay);

window.onclick = (e) => {
    if (e.target == main_elt) {
        changeAnotherDisplay();
    }
};

function removeForm() {
    modal.innerHTML = `<form><span class="close">&times;</span><p class="good_validate_form">Thank you for submitting your registration details</p><button class="quitForm">Close</button></form>`;
    const btn_quitForm = document.querySelector(
        "main section.modal form button.quitForm"
    );
    let btn_close = document.getElementsByClassName("close")[0];
    btn_close.addEventListener("click", changeAnotherDisplay);
    btn_quitForm.addEventListener("click", changeAnotherDisplay);
}

function createForm() {
    modal.innerHTML = `<form>
                    <span class="close">&times;</span>
                    <div class="form-sign">
                        <label for="firstName">First name</label>
                        <input type="text" name="firstName" id="firstName" />
                        <p class="error_message">Veuillez entrer 2 caractères ou plus pour le champ du prénom</p>
                    </div>
                    <div class="form-sign">
                        <label for="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" />
                        <p class="error_message">Veuillez entrer 2 caractères ou plus pour le champ du nom</p>
                    </div>
                    <div class="form-sign">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" />
                        <p class="error_message">Veuillez entrer 2 caractères ou plus pour le champ de l'email</p>
                    </div>
                    <div class="form-sign">
                        <label for="birthDate">Birthdate</label>
                        <input type="date" name="birthDate" id="birthDate" />
                        <p class="error_message">Vous devez entrer votre date de naissance</p>
                    </div>
                    <div class="form-sign">
                        <label for="attempt"
                            >How many tournaments have you attended?</label
                        >
                        <textarea
                            name="attempt"
                            id="attempt"
                            cols="30"
                            rows="10"
                        >
19</textarea
                        >
                    </div>
                    <div class="form-sign form-radio">
                        <p>Which location ?</p>
                        <label class="sub-form-sign"
                            >New York
                            <input type="radio" name="city" checked="checked" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="sub-form-sign"
                            >San Francisco
                            <input type="radio" name="city" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="sub-form-sign"
                            >Seattle
                            <input type="radio" name="city" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="sub-form-sign"
                            >Chicago
                            <input type="radio" name="city" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="sub-form-sign"
                            >Boston
                            <input type="radio" name="city" />
                            <span class="checkmark"></span>
                        </label>

                        <label class="sub-form-sign"
                            >Portland
                            <input type="radio" name="city" />
                            <span class="checkmark"></span>
                        </label>
                    </div>

                    <div class="form-sign form-checkbox">
                        <label class="sub-form-sign" for="lorem"
                            >Lorem ipsum dolor sit amet consectetur adipisicing
                            elit
                            <input type="checkbox" name="lorem" id="lorem" checked/>
                            <span class="checkmark"></span>
                        </label>
                        <label class="sub-form-sign" for="lorem2"
                            >Lorem ipsum dolor sit amet consectetur adipisicing
                            elit
                            <input type="checkbox" name="lorem2" id="lorem2" />
                            <span class="checkmark"></span>
                        </label>
                        <p class="error_message">Vous devez vérifier que vous acceptez les termes et conditions</p>
                    </div>
                    <div class="form-sign">
                        <button type="submit">Go</button>
                    </div>
                </form>`;
    let btn_close = document.getElementsByClassName("close")[0];
    const select_all_input = document.querySelectorAll(
        "main section.modal form input"
    );
    const select_all_p_form = document.querySelectorAll(
        "main section.modal form .form-sign p.error_message"
    );
    const btn_submit = document.querySelector("form button[type=submit]");
    btn_close.addEventListener("click", changeAnotherDisplay);
    btn_submit.addEventListener("click", function (e) {
        e.preventDefault();
        select_all_p_form.forEach((e) => (e.style.display = "none"));
        if (select_all_input[0].value === "") {
            select_all_p_form[0].style.display = "block";
        } else if (select_all_input[1].value === "") {
            select_all_p_form[1].style.display = "block";
        } else if (select_all_input[2].value === "") {
            select_all_p_form[2].style.display = "block";
        } else if (select_all_input[3].value === "") {
            select_all_p_form[3].style.display = "block";
        } else if (
            select_all_input[10].value === "" ||
            select_all_input[11].value === ""
        ) {
            select_all_p_form[4].style.display = "block";
        } else {
            removeForm();
        }
    });
}
