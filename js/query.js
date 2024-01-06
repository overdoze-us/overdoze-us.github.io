
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const date = document.getElementById("subject");
var submit = document.getElementById("submit");
const message = document.getElementById("message");

function sendQuery(){
            const bodyMessage = `Full Name: ${fullName.value}<br><br>Email: ${email.value}<br><br>Subject: ${subject.value}<br><br>Message: ${message.value}`;

            event.preventDefault()
            Email.send({
            Host : "smtp.elasticemail.com",
            Port : 2525,
            Username : "shubhamkr1188@gmail.com",
            Password : "EDDC60C8FADE462552349CEFCEB80A713FE9",
            To : 'support@offer-sales-between.in',
            From : "query-customer@offer-sales-between.in",
            Subject : "Query customer-website",
            Body : bodyMessage
        }).then(
        message => {
            if (message=="OK"){
                Swal.fire({
                    title: "Thank You!",
                    text: "We will confirm your reservation shortly!",
                    icon: "success"
                  });
                  submit.disabled = true;
            }
            else{
                Swal.fire({
                    title: "Oops...",
                    text: "Something went wrong!",
                    icon: "error"
                  });
                  submit.disabled = true;
            }
        }
        );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formToReset.reset();
});
