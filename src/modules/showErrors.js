const showErrors = (fields = {}) => {
    const inputs = document.querySelectorAll("input, textarea");
    for (let input of inputs) {
        const name = input.name;

        let error = document.querySelector(`#${name}Error`);
        if (fields[name]) {
            if (!error) {
                error = document.createElement("div");
                error.id = name + "Error";
                error.className = "error-message";
                input.insertAdjacentElement("afterend", error);
            }
            error.textContent = fields[name];
            input.classList.add("error");
        } else {
            if (error) error.remove();
            input.classList.remove("error");
        }
    }
};

export default showErrors;
