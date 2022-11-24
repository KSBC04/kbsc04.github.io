function numero(){
    let n1 = document.getElementById("1").value
    let n2 = document.getElementById("2").value
    let n3 = document.getElementById("3").value
    let a1 = [n1,n2,n3]
    let a2 = [];
    a2.push(a1[2])
    a2.push(a1[1])
    a2.push(a1[0])
    console.log(a2)
    let R1 = document.getElementById("R1")
    let R2 = document.getElementById("R2");
    R1.innerHTML = a1;
    R2.innerHTML = a2;
}