let percent = 0;
const bar = document.querySelector(".progress");
const text = document.getElementById("loadingText");

const timer = setInterval(()=>{

percent += 10;
bar.style.width = percent + "%";

if(percent >= 100){
text.innerText = "Connected.";
clearInterval(timer);

setTimeout(()=>{
location.href="chat.html";
},800);

}

},200);
