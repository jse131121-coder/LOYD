document.getElementById("roleText").innerText =
"ROLE : " + window.userRole;

if(window.userRole === "member"){
document.getElementById("artistPanel").style.display="block";
}

if(window.userRole === "admin"){
document.getElementById("adminPanel").style.display="block";
}

function logout(){

firebase.auth().signOut().then(()=>{
location.href="index.html";
});

}

function toggleName(){
alert("닉네임 표시 설정 변경됨");
}
