const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
});

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
}); 


let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault()

    // use FormData to get the User's name and email    
    let ourFormData = new FormData(event.target)
    
    let userFirstName = ourFormData.get("fname")
    let userEmailAddress = ourFormData.get("email")
        
    let updatedHtmlContent = `
        <h2>Thank you ${userFirstName}!</h2>

        <p>You will get a confirmation of your booking sent to: ${userEmailAddress}</p>
    `
    
    let updatedContentContainer = document.getElementById("Main-Text")
    updatedContentContainer.innerHTML = updatedHtmlContent
})