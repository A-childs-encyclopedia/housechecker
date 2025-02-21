function CheckHouse(){
    let indexn = document.getElementById("inum");
    let indexnum = indexn.value;
    let errors = 0
    console.log("indexnum is", indexnum);
    console.log("indexn is", indexn);
    
    if (indexnum % 4 == 1) {
        window.alert("Cordowa")
    } else if (indexnum % 4 == 0) {
        window.alert("Nizamiya")
    } else if (indexnum % 4 == 2) {
        window.alert("Al-Zahra")
    } else if (indexnum % 4 == 3) {
        window.alert("Al-Azhar")
    } else if (indexnum == "") {
        window.alert("Please input a valid index number")
        errors += 1
        console.log(errors)
    }
}
