////////////////////////// functions to filter the forms using regex ///////////////////////
function regEx() {
    function testName() {
        var name = document.getElementsByTagName("fname").value;
        var nameTest = name.search(/[a-zA-Z]/g);
    if (nameTest == -1||name == ""||nameTest < 5) {
        alert("Please enter only letters in this field and it must be more than 5 characters long.");
    }
    }

    function testEmail() {
        var myEmail = document.getElementsByTagName("email").value;
        var emailTest = myEmail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]){3,}+@([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+){5,};
    if (emailTest == -1||myEmail == "") {
        alert("Please enter a valid format minimum of 3 characters before the @ sign and minimum of 5 after the @ sign in this field.");
    }
    }


}




