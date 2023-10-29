const validateForm = (data) => {
    // создаем пустой объект для хранения результатов
    const errors = {};
    for (let [key, value] of Object.entries(data)) {
        value = value.trim();
        if (value === "") {
            errors[key] = "Это поле обязательно к заполнению";
        }
    }
    // проверяем, что поле email содержит корректный адрес электронной почты
    if (data.inputEmail) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(data.inputEmail)) {
            errors.inputEmail = "Введите корректный адрес электронной почты";
        }
    }
    // проверяем, что поле телефон содержит корректный номер по маске
    if (data.inputPhone) {
        if (data.inputPhone.length !== 12) {
            errors.inputPhone = "Введите корректный номер телефона";
        }
    }
    return errors;
};

export default validateForm;
