const formSurvey = document.querySelector("form")
const formName = document.querySelector("form input[name='name']")
const formAge = document.querySelector("form input[name='age']")
const formGender = document.querySelectorAll("form input[name='gender']")
const btnSubmit = document.querySelector("#formSubmit")
const errMsg = document.querySelector(".alert")
const outputData = document.querySelector("#output")


btnSubmit.addEventListener("click", (event) => {
    event.preventDefault()

    const formData = collectFormData()
    if (!formData.name || !formData.age || !formData.gender) {
        errMsg.style.display = "block"
        outputData.style.display = "none"
        return;
    }
    errMsg.style.display = "none"
    outputData.style.display = "block"

    const jsonString = JSON.stringify(formData)
    outputData.textContent = "JSON Data: " + jsonString;

    const urlStringEncoded = formDataToUrlEncoded(formData)
    outputData.textContent += "\n\nURL-Encoded Data: " + urlStringEncoded;
})

function collectFormData() {
    const data = {}
    data.name = formName.value
    data.age = formAge.value
    formGender.forEach(gender => {
        if(gender.checked) {
            data.gender = gender.value
        }
    })
    return data;
}

function formDataToUrlEncoded(formData) {
    const params = []
    for (let [name, value] of formData.entries()) {
        params.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`)
    }
    return params.join('&')
}