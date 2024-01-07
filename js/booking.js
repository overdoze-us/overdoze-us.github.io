
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const date = document.getElementById("date");
var submit = document.getElementById("submit");
const people = document.getElementById("people");
const message = document.getElementById("message");
const time = document.getElementById("time");
const number = document.getElementById("number");

function sendEmail(){
            const bodyMessage = `<table class="ecxinnermain" style="table-layout: fixed; background-color: rgb(240, 223, 223); width: 440px; text-align: left; margin-left: auto; margin-right: auto;" border="0" cellpadding="0" cellspacing="0">

            <tbody>
            
              <tr>
                <td colspan="4">

                
                  <table style="background-color: rgb(209, 145, 115); width: 100%;" class="ecxlogo" border="0" cellpadding="0" cellspacing="0">
                    <tbody>
                      <tr>
                        <td colspan="2" height="20"><br></td>
                      </tr>
                      
                      <tr>
                        <tr>
                          <td align="center" style="padding-top: 0rem;"><img src="https://overdoze.co/img/logo.png" width="83%">
                        </td></tr>
                        <td colspan="2" style="height: 20px;"><br></td>
                      </tr>
                    </tbody>
                  </table>
                  <script src="https://cdn.tailwindcss.com"></script>
                  

                
                  <table style="border: 1px solid rgb(209, 0, 0);" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                      <tr>
                          
                      </tr>
                      
                      <tr style="color: rgb(185, 16, 16); line-height: 20px; font-family: Arial,Helvetica,sans-serif; font-size: 14px;">
                        <td class="ecxcontent" style="padding-right: 40px; padding-left: 40px;" colspan="2" align="center" valign="top">

                          <table style="background-color: rgb(240, 223, 223); width: 100%;" border="0" cellpadding="0" cellspacing="0">
                            
  <tbody>
    <tr>
  <td colspan="2" align="center" valign="bottom"><br></td>
</tr>



    
    

<tr>
  <td style="height: 1px; background-color: rgb(214, 133, 133);"><br></td>
</tr>



    <tr>
      <td align="left">
        <div class="flex flex-col items-center space-y-2">
          <div style="text-align: center;">
            <img src="https://overdoze.co/img/check.gif" width="100px" style="text-align: center;"fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
         </div>
          
            
        
      </td>
    </tr>

    <tr><td><br></td></tr>


    <tr></tr>

    <tr>
      <td align="left">
        <p style="color: rgb(190, 70, 0); line-height: 4px; font-size: 18px;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
          Hello ${fullName.value} ,</p>
      </td>
    </tr>
    <tr>
      <td align="left">
        <p style="color: rgb(190, 70, 0); line-height: 24px; font-size: 18px;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">
          <br>Thank you for your reservation at Overdoze.</p>
      </td>
    </tr>
    <tr>
      <td align="left">
        <p style="color: rgb(190, 70, 0); line-height: 24px; font-size: 18px ;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;padding-top: 1.5rem">
          Your Reservation has been Confirmed. <br>
          We are expecting you on ${date.value} at ${time.value}.</p>
      </td>
    </tr>
    <tr>
      <td align="left">
        <p style="color: rgb(190, 70, 0); line-height: 24px; font-size: 18px ;font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;padding-top: 1.5rem">
          We are looking forward to your visit and hope you will have the best dining expe with us.</p>
      </td>
    </tr>
    <tr><td height="12"><br></td></tr>
      <tr><td align="center">
          <a style="padding: 15px 25px; color: rgb(0, 0, 0); text-decoration: none; display: block; background-color: rgb(130, 169, 212);" href="https://maps.app.goo.gl/ZYDoDZ1ymEkLMsecA?g_st=ic" target="_blank">Address</a>
      </td>
    </tr>

    <tr><td height="12"><br></td></tr>
      
    </tr>



    <tr>
      <td align="left">
        <span style="color: rgb(0, 0, 0); line-height: 15px; font-size: 12px; font-weight: bold;"><hr>
          &copy;2023 Overdoze<br>www.overdoze.co | Help Center | User Agreement and Privay Policy:</span><span style="color: rgb(162, 162, 162); line-height: 19px; font-size: 12px; font-style: italic;">
        </span>
      </td>
    </tr>
  </tbody>
</table>

                        </td>
                      </tr>
                      <tr>
                        <td height="20"><br></td>
                      </tr>
                    </tbody>
                  </table><br></td>
              </tr>
            </tbody>
          </table>
        `;

            event.preventDefault()
            Email.send({
            Host : "smtp.elasticemail.com",
            Port : 2525,
            Username : "rohitbhadwa7@gmail.com",
            Password : "E9E4CA4660A616F3CC972D61430CC4030E02",
            Cc : "shubhamkr1177@gmail.com",
            To : email.value,
            From : "orders@overdoze.co",
            Subject : "Your Reservation has been Confirmed",
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
