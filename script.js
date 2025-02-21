function CheckHouse(){
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
    } else if (indexnum == null) {
        window.alert("Please input a valid number)
    } else {
        console.log("error")
    }
}
