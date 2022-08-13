const burger = document.querySelector("#burger")
const menu = document.querySelector("#menu")
const header = document.querySelector("header")

burger.addEventListener("click", function(){
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden")
    }else {
        menu.classList.add("hidden")
    }
})

burger.addEventListener("click", function(){
    if(header.classList.contains("hidden")){
        header.classList.remove("hidden")
    }else {
        header.classList.add("hidden")
    }
})