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
    } else if (indexnum % 4 == 3) {
        window.alert("Al-Azhar")
    } else {
        window.alert("Please input a valid index number")
    }
}


if ('serviceWorker' in navigator) {
    window.addEventListener('load' , () => {
        navigator.serviceWorker.register('/sw.js')
                  .then(registration => {
            console.log('Service Worker registered with scope:' , registration.scope);
        }).catch(error => {
            console.log('Service Worker registration failed:' , error);
        });
    });
}

  
  
  
