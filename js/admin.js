function clearChat(){

if(confirm("모든 채팅을 삭제합니까?")){

firebase.database().ref("chat").remove();
alert("채팅 초기화 완료");

}

}

function blockUser(){

const uid = prompt("차단할 UID 입력");

if(uid){

firebase.database().ref("blocked/"+uid).set(true);
alert("차단 완료");

}

}

function back(){
location.href="profile.html";
}
