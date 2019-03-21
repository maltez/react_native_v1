import $ from "jquery";
import "jquery-validation";
$.validator.addMethod(
    "phoneNumber",
    function(phone, element) {
        phone = phone.replace(/\s+/g, "");
        return phone.match(
            /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/
        );
    },
    "Phone number is incorrect"
);
$("#contacts-form").validate({
    rules: {
        phoneNumber: {
            required: true,
            phoneNumber: true
        },
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        email: "email must be in format name@domain.com"
    }
});
