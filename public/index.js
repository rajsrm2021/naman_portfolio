const cursor = document.querySelector(".cursor");
const btn = document.querySelector(".btn");

window.addEventListener("mousemove",(e)=>{

    cursor.style.top=`${e.pageY-4}px`
    cursor.style.left=`${e.pageX-4}px`
})
