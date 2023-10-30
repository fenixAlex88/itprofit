import IMask from "imask";

import "./index.html";
import "./index.scss";

import sendAjaxForm from "./modules/sendAjaxForm";
import validateForm from "./modules/validateForm";
import showErrors from "./modules/showErrors";

const BASE_URL = "";

const form = document.querySelector("#messageForm");
const submitButton = document.querySelector(".submit-btn");
const infoButton = document.querySelector(".info-btn");
const message = document.querySelector(".message");
const inputPhone = document.querySelector("#inputPhone");
const modal = document.querySelector(".modal");

const phoneMask = new IMask(inputPhone, {
    mask: "+{375}(00)000-00-00",
    lazy: false,
});

const openModalHandler = () => {
    modal.classList.add("open");
    document.body.classList.add("modal-active");
};

const closeModalHandler = (event) => {
    if (event.target === modal || event.target.closest(".modal-close")) {
        modal.classList.remove("open");
        document.body.classList.remove("modal-active");
    }
};

const submitFormHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("inputPhone", phoneMask.unmaskedValue);
    const data = Object.fromEntries(formData);
    const errors = validateForm(data);
    if (Object.keys(errors).length === 0) {
        submitButton.disabled = true;
        const msg = await sendAjaxForm(formData, BASE_URL);
        if (msg) {
            message.textContent = msg;
            form.reset();
            showErrors();
        }
        submitButton.disabled = false;
    } else {
        showErrors(errors);
    }
};

infoButton.addEventListener("click", openModalHandler);
modal.addEventListener("click", closeModalHandler);
form.addEventListener("submit", submitFormHandler);
