//Event Listener for Form Submit
document.getElementById('email-form').addEventListener('submit', e => {
    e.preventDefault();
    
    //Create variables for form elements
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const typeInput = document.getElementById('form-types');
    const messageInput = document.getElementById('form-message');
    const formBody = document.getElementById('email-form-container');
    
    //Grab onto values of each form element
    const name = nameInput.value;
    const email = emailInput.value;
    const type = typeInput.value;
    const message = messageInput.value;

    //Insert success message in form body
    formBody.innerHTML = "<br><h4>Thank you for your message!</h4>";

    //call send data function, passing in object with form data
    sendEmail({
        name: name,
        email: email,
        type: type,
        message: message
    });    
});

function sendEmail(data) {
    const XHR = new XMLHttpRequest();
    let urlEncodedData = "";
    let urlEncodedDataPairs = []; 

    // Turn the data object into an array of URL-encoded key/value pairs.
    for(let item in data) {
        urlEncodedDataPairs.push(encodeURIComponent(item) + '=' + encodeURIComponent(data[item]));
    }

    // Combine the pairs into a single string and replace all %-encoded spaces to 
    // the '+' character; matches the behaviour of browser form submissions.
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

    // Define what happens on successful data submission
    XHR.addEventListener('load', e => {
        console.log('Yeah! Data sent and response loaded.');
    });

    // Define what happens in case of error
    XHR.addEventListener('error', e => {
        alert('Oops! Something goes wrong.');
    });

    // Set up our request
    XHR.open('POST', 'http://localhost:3002'); 

    // Add the required HTTP header for form data POST requests
    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Finally, send our data.
    XHR.send(urlEncodedData);
}