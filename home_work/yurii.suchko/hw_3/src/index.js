import $ from "jquery";
import "jquery-validation";


$.validator.addMethod(
	"phone",
	(phone) => /^((\+38|8)+([0-9]){10})$/g.test(phone),
	"Please write correct phone number like as +380981234567"
);

$("#form").validate({
	rules: {
		phone: {
			required: true,
			phone: true
		},
		email: {
			required: true,
			email: true
		}
	},
	messages: {
		email: "Please write correct e-mail."
	}
});
