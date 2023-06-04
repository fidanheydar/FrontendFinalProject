const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPass  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const email = document.querySelector("#mail_input");
const password=document.querySelector("#password_input");
const confirm =document.querySelector("#confirm_input");
const emailText=document.getElementById("conf2");
const passText=document.getElementById("conf3");
const confText=document.getElementById("conf4");


email.addEventListener("keyup", (e)=>{
   
    if(regexMail.test(e.target.value)){
 emailText.textContent="Correct"
 emailText.style.color="green"
 emailText.style.margin="3px"
    }
else{
    emailText.textContent="Incorrect"
 emailText.style.color="red"
 emailText.style.margin="3px"
}
})

password.addEventListener("keyup", (e)=>{
    if(regexPass.test(e.target.value)){
 passText.textContent="Correct"
 passText.style.color="green"
 passText.style.margin="3px"
    }
else{
    passText.textContent="Incorrect"
 passText.style.color="red"
 passText.style.margin="3px"
 

}
confirm.addEventListener("keyup",(a)=>{
    if(e.target.value==a.target.value && a.target.value){
        confText.textContent="Correct"
        confText.style.color="green"
        confText.style.margin="3px"
    }
    else{
        confText.textContent="Incorrect"
        confText.style.color="red"
        confText.style.margin="3px"

    }
})
})


const homePage=document.querySelector(".nav_logo>img");
    homePage.addEventListener("click", ()=>{
        window.location.href="../Home/homepage.html";
    })
































//     const inputs=document.querySelectorAll("#inputt>input");
//     const conf1Text=document.getElementById("#conf1");
//     const conf2Text=document.getElementById("#conf2");
//     const conf3Text=document.getElementById("#conf3");
//     const conf4Text=document.getElementById("#conf4");

//     inputs[0].addEventListener("keyup",()=>){
//         if(inputs[0].value.trim()===null){
//             conf1Text.textContent="Username is not correct";
//             conf1Text.style.color="red";
//            }
//     })
 
//    if( CheckEmail(inputs[1].value)){
//     conf2Text.textContent="Email format is not correct"
//     conf2Text.style.color="red";
//    }


//    function CheckEmail(email) 
// {
//  if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email))
//   {
//     return (true)
//   }
//     return (false)
// }