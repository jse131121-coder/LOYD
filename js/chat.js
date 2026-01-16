const db = firebase.database();
const box = document.querySelector(".chat-box");
const input = document.getElementById("msgInput");

let replyCache = null;

document.getElementById("sendBtn").onclick = ()=>{

if(input.value.trim()=="") return;

if(currentRoom==="loyd" && window.userRole==="fan"){
alert("LOYD 공식방은 읽기 전용입니다.");
return;
}

sendMessage(input.value, replyCache);

replyCache=null;
input.value="";
};

function sendMessage(text, reply){

db.ref("chat/"+currentRoom).push({
senderRole: window.userRole,
text: text,
replyTarget: reply,
time: Date.now()
});

}

function loadMessages(){

box.innerHTML="";
db.ref("chat/"+currentRoom).off();

db.ref("chat/"+currentRoom).on("child_added", snap=>{

const msg = snap.val();
render(msg);

});

}

function render(msg){

const div = document.createElement("div");

if(msg.senderRole==="fan"){
div.className="bubble fan";
div.innerText = msg.text;
}else{
div.className="bubble artist";

if(msg.replyTarget){
div.innerHTML = `<div class="quote">${msg.replyTarget}</div>${msg.text}`;
}else{
div.innerText = msg.text;
}
}

box.appendChild(div);
box.scrollTop = box.scrollHeight;

}

loadMessages();
