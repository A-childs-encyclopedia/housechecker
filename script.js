function checkHouse(){
    let indexn = document.getElementById("inum");
    let indexnum = indexn.value;
    console.log(indexnum)
    if (indexnum % 4 == 1) {
        window.alert("Cordowa")
    } else if (indexnum % 4 == 0) {
        window.alert("Nizamiya")
    } else if (indexnum % 4 == 2) {
        window.alert("Al-Zahra")
    } else {
        window.alert("Al-Azhar")
    }
}


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
}

self.addEventListener("install", (e) => {
    console.log("[Service Worker] Install");
});



  
  
  