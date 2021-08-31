//Contact Details

let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
let addressRegex = RegExp("^[A-Za-z]{3,}$");
let cityStateRegex = RegExp("^[A-Za-z]{2,}$");
let zipRegex = RegExp("^[a-zA-Z*&%$#-]{0}[0-9 ]{6,7}[a-zA-Z*&%$#-]{0}$");
let phoneNumberRegex = RegExp("^[6-9]{1}[0-9]{9}$");
let emailRegex = RegExp("^([a-z0-9]+.)+@([a-z0-9]+.)([a-z]+.)[a-z]{2,3}$");

class Contact {
    
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

module.exports = Contact