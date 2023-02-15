document.getElementById("no")
document.getElementById("si")
let despacito = document.getElementById("despacito")

no.addEventListener("click", displace)
si.addEventListener("click", felicidades)

function felicidades(){
    alert("Felicidades Sofi, ya eres mi novia!!! 🥳🥳🥳")
    if (despacito.paused){
        despacito.play();
    }
}

function displace(){
    this.style.marginLeft == "300px" ? this.style.marginLeft = "0px" : this.style.marginLeft = "300px";
}

