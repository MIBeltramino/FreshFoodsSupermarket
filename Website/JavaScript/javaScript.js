function validate(){
    fields = ""

    let firstName = document.forms["signup"]["fname_input"].value
    let lastName = document.forms["signup"]["lname_input"].value
    let address = document.forms["signup"]["address_input"].value
    let email = document.forms["signup"]["email_input"].value
    let birthday = document.forms["signup"]["birthday_input"].value
    
    if (firstName == ""){
        fields += "\nFirst name"
    }

    if (lastName == ""){
        fields += "\nLast name"
    }

    if (address == ""){
        fields += "\nAddress"
    }

    if (email == ""){
        fields += "\nEmail"
    }

    if (birthday == ""){
        fields += "\nDate of birth"
    }

    if (fields != ""){
        alert("Please enter the fields below before submitting:" + fields)
        return false
    }else{
        alert("Thank you for joining the Fresh Foodies Club!")
    }
}

function validateSupport(){
    query_fields = ""

    let first = document.forms["support_form"]["first_name"].value
    let last  = document.forms["support_form"]["last_name"].value
    let mail = document.forms["support_form"]["query_email"].value
    let customerQuery = document.forms["support_form"]["concern"].value

    if (first == ""){
        query_fields += "\nFirst name"
    }

    if (last == ""){
        query_fields += "\nLast name"
    }

    if (mail == ""){
        query_fields += "\nEmail"
    }

    if (customerQuery == ""){
        query_fields += "\nQuery"
    }

    if (query_fields != ""){
        alert("Please enter the fields below before submitting:" + query_fields)
        return false
    }else{
        alert("Thank you for submitting your query.\nWe will get back to you within 48 hours.")
    }
}