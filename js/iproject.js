AOS.init();


let modal = document.querySelector('.modal');
setTimeout(() => {
    modal.classList.add("show")
}, 1000)

document.querySelector(".close").onclick = () => {
    modal.classList.remove("show")

}

window.onkeyup =(e)=>{
if(e.keyCode==8 ||e.keyCode==13  ){
    modal.classList.remove("show")
    mobile.classList.remove("show")

}
    }
document.oncopy=function(){

    return false
}
document.onselectstart=function(){
    return false
}


let mobile = document.querySelector('.mobile');
setTimeout(() => {
    mobile.classList.add("show")
}, 1000)

document.querySelector(".closee").onclick = () => {
    mobile.classList.remove("show")

}



