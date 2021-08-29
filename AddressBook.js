const prompt = require('prompt-sync')();

let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
let addressRegex = RegExp("^[A-Za-z]{3,}$");
let cityStateRegex = RegExp("^[A-Za-z]{2,}$");
let zipRegex = RegExp("^[a-zA-Z*&%$#-]{0}[0-9 ]{6,7}[a-zA-Z*&%$#-]{0}$");
let phoneNumberRegex = RegExp("^[6-9]{1}[0-9]{9}$");
let emailRegex = RegExp("^([a-z0-9]+.)+@([a-z0-9]+.)([a-z]+.)[a-z]{2,3}$");

class AddressBook {
    constructor(...params) {
        if (nameRegex.test(params[0]))
            this.firstName = params[0];
        else throw "Invalid First Name!!";
        if (nameRegex.test(params[1]))
            this.lastName = params[1];
        else throw "Invalid Last Name!!";
        if (addressRegex.test(params[2]))
            this.address = params[2];
        else throw "Invalid Address!!";
        if (cityStateRegex.test(params[3]))
            this.city = params[3];
        else throw "Invalid City!!";
        if (cityStateRegex.test(params[4]))
            this.state = params[4];
        else throw "Invalid State!!";
        if (zipRegex.test(params[5]))
            this.zip = params[5];
        else throw "Invalid Zip!!";
        if (phoneNumberRegex.test(params[6]))
            this.phoneNumber = params[6];
        else throw "Invalid Phone Number!!";
        if (emailRegex.test(params[7]))
            this.email = params[7];
        else throw "Invalid Email!!";
    }

    toString() {
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", Address : " + this.address + ", City : " + this.city + ", State : " + this.state + ", Zip : " + this.zip + ", Phone Number : " + this.phoneNumber + ", Email : " + this.email;
    }
}


let addressBookArr = new Array();

let getContact = () => {
    let firstName = prompt("Enter First Name : ");
    let lastName = prompt("Enter Last Name : ");
    let address = prompt("Enter Address : ");
    let city = prompt("Enter City : ");
    let state = prompt("Enter State : ");
    let zip = prompt("Enter Zip : ");
    let phoneNumber = prompt("Enter Phone Number : ");
    let email = prompt("Enter Email : ");
    let contactInput = null;

    try {
        contactInput = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
    } catch (error) {
        console.error(error);
    }
    return contactInput;
};


let viewContacts = () => {
    addressBookArr.forEach(contact => console.log(contact.toString()));
}

let addContact = (contact) => {
    addressBookArr.push(contact);
    console.log("Contact Added Successfully!!")
}

let editContact = () => {
    let frstName = prompt("Enter First Name : ");
    let lstName = prompt("Enter Lastt Name : ");
    let index = addressBookArr.findIndex(contact => contact.firstName == frstName && contact.lastName == lstName);
    if (index == -1)
        console.log("Could not find the contact!!")
    else {
        addressBookArr[index] = getContact();
        console.log("Contact edited successfully!!");
    }
}

        console.log("Welcome to AddressBook Program!!");
        let choice = 0;
        do {
            console.log("Choose\n1. View Contacts\n2. Add Contact\n3. Edit Contact By name\n4. Exit");
            choice = prompt("Enter Your Choice ");
            switch (choice) {
                case "1": viewContacts();
                    break;
                case "2": addContact(getContact());
                    break;
                case "3": editContact();
                    break;
                case "4": console.log("Exit!!");
                    break;
                default: console.log("Invalid Choice !!");
            }
        
        } while (choice != 4)