// Config
// const serverURL = 'damp-fjord-63452.herokuapp.com/';
// const serverURL = 'https://damp-fjord-63452.herokuapp.com/';

// Grab onto DOM elements
const emailForm = document.getElementById('email-form');
const nameInput = document.getElementById('form-name');
const emailInput = document.getElementById('form-email');
const typeInput = document.getElementById('form-types');
const messageInput = document.getElementById('form-message');
const successMessage = document.getElementById('success-message');
const successButton = document.getElementById('success-button');
const captcha = document.querySelector('#g-recaptcha-response')

// Event Listeners
if (emailForm) {
    emailForm.addEventListener('submit', e => {
        e.preventDefault();
        if (!formIsValid()) { return; }
        sendEmail({
            name: nameInput.value,
            email: emailInput.value,
            type: typeInput.value,
            message: messageInput.value
        });
    });
}

if (nameInput) nameInput.addEventListener('focus', () => clearSuccessMessage());

if (emailInput) emailInput.addEventListener('focus', () => clearSuccessMessage());
if (typeInput) typeInput.addEventListener('focus', () => clearSuccessMessage());
if (messageInput) messageInput.addEventListener('focus', () => clearSuccessMessage());

// UI and Display

function formIsValid() {
    return nameInput.value && emailInput.value && captcha.value;
}

function addSuccessMessage() {
    successButton.classList.add("hidden");
    successMessage.innerHTML = "<br><h4>Thank you for your message!</h4>";
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
}

function clearSuccessMessage() {
    successButton.classList.remove("hidden");
    successMessage.innerHTML = "";
}

function sendEmail(data) {
    const XHR = new XMLHttpRequest();
    let urlEncodedData = "";
    let urlEncodedDataPairs = [];

    // Turn the data object into an array of URL-encoded key/value pairs.
    for (let item in data) {
        urlEncodedDataPairs.push(encodeURIComponent(item) + '=' + encodeURIComponent(data[item]));
    }

    // Combine the pairs into a single string and replace all %-encoded spaces to 
    // the '+' character; matches the behaviour of browser form submissions.
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

    // Define what happens on successful data submission
    XHR.addEventListener('load', e => {
        addSuccessMessage();
        console.log('Yeah! Data sent and response loaded.');
    });

    // Define what happens in case of error
    XHR.addEventListener('error', e => {
        console.log(e);
    });

    // Set up our request
    XHR.open('POST', 'https://emailer-api-64581.herokuapp.com/');

    // Add the required HTTP header for form data POST requests
    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Finally, send our data.
    XHR.send(urlEncodedData);
}