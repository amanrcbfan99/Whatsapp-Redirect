let name = document.querySelector("#name");
let standered = document.querySelector("#standered");
let medium = document.querySelector("#medium");
let phn = document.querySelector("#phn");
let send = document.querySelector("#send");

function sendmsg(msg){
    let phoneNum = "919161504195";
    let msgincoded = encodeURIComponent(msg);
    let url = `https://wa.me/${phoneNum}?text=${msgincoded}`;
    window.location.href = url
}

send.addEventListener("click", function(){
    let nameVal = name.value
    let standeredVal = standered.value
    let phnVal = phn.value
    let mediumVal = medium.value
    let msg = "Hello Sir, I want to get admission in your Coaching Center, My details are given below"+
          "\nname : " + nameVal +
          "\nClass : " + standeredVal +
          "\nMedium : " + mediumVal +
          "\nPhone No : " + phnVal 
    sendmsg(msg);
})