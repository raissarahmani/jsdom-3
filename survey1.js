const formSurvey = document.querySelector("#formSurvey")
const formName = document.querySelector("form input[name='name']")
const formAge = document.querySelector("form input[name='age']")
const formGender = document.querySelectorAll("form input[name='gender']")
const errMsg = document.querySelector(".alert")
const outputData = document.querySelector("#output")

function submitSurvey(event) {
    event.preventDefault()
    if (!formName.value || !formAge.value || !genderSelect()) {
        errMsg.style.display = "block"
        outputData.style.display = "none"
        return;
    }
    errMsg.style.display = "none"

    const formData = new FormData(formSurvey)

    const urlStringEncoded = formDataToUrlEncoded(formData)
    outputData.textContent += "\n\nURL-Encoded Data: " + urlStringEncoded;
    outputData.style.display = "block"
}

function genderSelect() {
    let selectedGender = null;
    formGender.forEach(gender => {
        if (gender.checked) {
            selectedGender = gender.value;
        }
    });
    return selectedGender;
}

function formDataToUrlEncoded(formData) {
    const params = []
    for (let [name, value] of formData.entries()) {
        params.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`)
    }
    return params.join('&')
}