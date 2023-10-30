const validateForm = (data) => {
    const errors = {};
    for (let [key, value] of Object.entries(data)) {
        value = value.trim();
        //check that the field is not empty
        if (value === "") {
            errors[key] = "Это поле обязательно к заполнению";
        }
    }

    // checking that the email field contains a valid email address
    if (data.inputEmail) {
        const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
        if (!emailRegex.test(data.inputEmail)) {
            errors.inputEmail = "Введите корректный адрес электронной почты";
        }
    }
    // check that the phone field contains the correct number
    if (data.inputPhone) {
        if (data.inputPhone.length !== 12) {
            errors.inputPhone = "Введите корректный номер телефона";
        }
    }
    return errors;
};

export default validateForm;
