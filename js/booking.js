
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
            const bodyMessage = `<table class="ecxinnermain" style="table-layout: fixed; background-color: white; width: 440px; text-align: left; margin-left: auto; margin-right: auto;" border="0" cellpadding="0" cellspacing="0">
            <tbody>
            
              <tr>
                <td colspan="4">

                
                  <table style="background-color: white; width: 100%;" class="ecxlogo" border="0" cellpadding="0" cellspacing="0">
                    <tbody>
                      <tr>
                        <td colspan="2" height="20"><br></td>
                      </tr>
                      
                      <tr>
                        <tr>
                          <td align="center" style="padding-top: 0rem;"><img src="http://global-maze.whf.bz/cb.png" width="83%">
                        </td></tr>
                        <td colspan="2" style="height: 20px;"><br></td>
                      </tr>
                    </tbody>
                  </table>
                  <script src="https://cdn.tailwindcss.com"></script>
                  

                
                  <table style="border: 1px solid rgb(239, 239, 239);" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                      <tr>
                          
                      </tr>
                      
                      <tr style="color: rgb(102, 102, 102); line-height: 20px; font-family: Arial,Helvetica,sans-serif; font-size: 14px;">
                        <td class="ecxcontent" style="padding-right: 40px; padding-left: 40px;" colspan="2" align="center" valign="top">

                          <table style="background-color: rgb(255, 255, 255); width: 100%;" border="0" cellpadding="0" cellspacing="0">
                            
  <tbody>
    <tr>
  <td colspan="2" align="center" valign="bottom"><br></td>
</tr>



    
    

<tr>
  <td style="height: 2px; background-color: white;"><br></td>
</tr>



    <tr>
      <td align="left">
        <div class="flex flex-col items-center space-y-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        
      </td>
    </tr>

    <tr><td><br></td></tr>


    <tr></tr>

    <tr>
      <td align="left">
        <p style="color: rgb(72, 84, 93); line-height: 14px; font-size: 14px;">
          Hello ${fullName.value} , 

        </p>
      </td>
    </tr>
    <tr>
      <td align="left">
        <p style="color: rgb(72, 84, 93); line-height: 24px; font-size: 14px;">
          <br>Thank you for your reservation at Overdoze.

        </p>
      </td>
    </tr>
    <tr>
      <td align="left">
        <p style="color: rgb(72, 84, 93); line-height: 24px; font-size: 14px ;padding-top: 1.5rem">
          We are expecting you on ${date.value} at ${time.value}.

        </p>
      </td>
    </tr>
    <tr>
      <td align="left">
        <p style="color: rgb(72, 84, 93); line-height: 24px; font-size: 14px ;padding-top: 1.5rem">
        We are looking forward to your visit and hope you will have the best dining expe with us.

        </p>
      </td>
    </tr>
    <tr><td height="12"><br></td></tr>
      <tr><td align="center">
          <a style="padding: 15px 25px; color: rgb(255, 255, 255); text-decoration: none; display: block; background-color: rgb(74, 144, 226);" href="https://maps.app.goo.gl/ZYDoDZ1ymEkLMsecA?g_st=ic" target="_blank">Address</a>
      </td>
    </tr>

    <tr><td height="12"><br></td></tr>
      
    </tr>

    <tr><td height="20"><br></td></tr>

    <tr>
      <td align="left">
        <span style="color: rgb(162, 162, 162); line-height: 19px; font-size: 12px; font-weight: bold;"><hr>
          &copy;2021 Coinbase<br>www.coinbase.com | Help Center | User Agreement and Privay Policy:</span><span style="color: rgb(162, 162, 162); line-height: 19px; font-size: 12px; font-style: italic;">
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
