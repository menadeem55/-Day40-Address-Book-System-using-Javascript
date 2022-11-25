class Contact{

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;

    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }


    toString()
    {
        return "FirstName = "+this.firstName+", LastName = "+this.lastName+", Address = "+this.address+
                ", City = "+this.city+", State = "+this.state+", Zip = "+this.zip+", Phone = "+this.phone+", Email = "+this.email;
    }

}

let contact = new Contact("Nadeem","Akhtar","nehru nagar","chapra","Bihar",841301,8457123647,"me.nadeem55@gmail.com");
console.log(contact.toString());