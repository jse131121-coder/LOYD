function loadPage(page, el){

fetch(page)
.then(res=>res.text())
.then(data=>{
document.getElementById("screen").innerHTML = data;
});

document.querySelectorAll(".nav-item").forEach(item=>{
item.classList.remove("active");
});

el.classList.add("active");

}

// 최초 HOME 로드
loadPage("home.html", document.querySelector(".nav-item"));
