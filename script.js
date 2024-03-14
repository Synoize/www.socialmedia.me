function follow() {
    var insta_follow = document.getElementById("follow");
    insta_follow.innerHTML = "following";
    insta_follow.style = "background:var(--secondary-color); color:var(--primary-color); transition: 0.2s;";

}

function view_profile() {
    var profile_view = document.getElementById("profile-image");
    profile_view.style = "width:70%; height:auto; objectFit:contain; border:none; box-shadow: 0 0 0 0 ; border-radius:0rem; transition: 0.2s;"

}

function special(){
    alert("Memories Missing for Now!");
}


let mode = document.getElementById("mode");
mode.onclick = function(){
    document.body.classList.toggle("dark-theme");
}



function sy(){
let message = document.getElementById("msg");
message.style="display:block;  transition:2s";
}
