import showErrors from "./showErrors";

export default async function sendAjaxForm(formData, url) {
    let message;
    const options = {
        method: "POST",
        body: formData,
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const data = await response.json();
            if (data.status === "error") {
                showErrors(data.fields);
                return;
            } else if (data.status === "success") {
                message = data.msg;
            }
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.log(error);
        message = "Произошла ошибка. Попробуйте позже.";
    }
    return message;
}
