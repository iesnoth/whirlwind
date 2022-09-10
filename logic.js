let header = document.createElement('h1');
header.textContent = "Warranty Information";
document.body.appendChild(header);

//Create a function that will make a div with a <p> and an input,
//and take the <p> content and id name as arguments
function textInput(labelName, idName) {
    //creates div
    const div = document.createElement('div');
    div.setAttribute('id', idName);
    let label = document.createElement('label');
    label.textContent = labelName
    div.appendChild(label)
    let textBox = document.createElement('input');
    textBox.setAttribute('type', 'text');
    div.appendChild(textBox)
    document.body.appendChild(div)
}

function buttonFunc(label){
    let button = document.createElement('button');
//put label on the button
    //displayed on button
    let buttonText = document.createTextNode(label);         
    // appending text to button
    button.appendChild(buttonText);

    document.body.appendChild(button)

}

textInput('First Name', 'firstName')
textInput('Last Name', 'lastName')
textInput('Company Name','company')
textInput('E-mail','email')
textInput('Phone Number','phoneNo')
textInput('Fax Number','faxNo')
textInput('Address','address')
textInput('City','city')
textInput('State','state')
textInput('Zip','zip')
textInput('Country','country')


let device = document.createElement('h2');
device.textContent = "Device Information";
document.body.appendChild(device);
textInput('Date of Purchase','purchaseDate')
textInput('Model','model')
textInput('Warranty Serial Number','serial')
buttonFunc('Save')
buttonFunc('Close')

