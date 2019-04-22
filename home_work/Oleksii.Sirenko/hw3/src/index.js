import $ from "jquery";
import "jquery-validation";

$.validator.addMethod(
    "tel",
    function(phone, element) {
        var phoneNumber = phone.replace(/\(|\)|\s+|-/g, "");
        return /^((\+38|8)+([0-9]){10})$/.test(phoneNumber);
    },
    "Please specify a valid mobile number"
);

$("#contacts").validate({
    rules: {
        email: { required: true, email: true },
        phone: { required: true, tel: true }
    }
});
