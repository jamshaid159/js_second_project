// Name
document.getElementById("concatenation").onclick = function () {
    document.getElementById("originalStatement").innerHTML = "<h5>Muhammad  Jamshaid</h5>"
    document.getElementById("output").innerHTML ="Muhammad"+"Jamshaid"

}
// Number
document.getElementById("user").onclick = function () {
    let uss = prompt("ENTER THE STRING")
    let uss2= prompt("Enter the string 2")
   let usss=uss+uss2
    document.getElementById("originalStatement").innerHTML = uss+ "   2nd    " + uss2
    document.getElementById("output").innerHTML = usss
}
// Variable
document.getElementById("compare").onclick = function () {
    let a=+prompt("Enter the 1st number")
    let b=+prompt("Enter the second number")
    if(a==b){
        alert("equals")
        document.getElementById("output").innerHTML = "Equals"
    }
    else{
        alert("not equals")
    }
    document.getElementById("originalStatement").innerHTML = "1st = "+ a +"  ,  2nd = "+b
    document.getElementById("output").innerHTML = "Not Equals"
}

document.getElementById("if").onclick = function () {
    let a =+prompt("Enter the 3rd number ")
    let b=+prompt("Enter the 4th number ")
    let c
    if(a>b){
        c=a
    alert("3rd is greater")
    }
    else if(a==b){ alert("may b equals a = "+a+ " b = "+b)}
    else{
        c=b
        alert("4rt is larger ")
    }
    document.getElementById("originalStatement").innerHTML = a+"  ,  "+b
    document.getElementById("output").innerHTML = "larger is = "+c
}
// subtraction
document.getElementById("nested").onclick = function () {
    let a = prompt("enter password")
    
    if(a=="123"){
        let b = prompt("Emter the username")
        if(b=="admin")
        alert("log in done")
    }
    else{
        alert("invalid credentials")
    }

    document.getElementById("originalStatement").innerHTML = "password is = 123  and  username is admin"
    document.getElementById("output").innerHTML = "you enterd the password  and username is "
}
// // multiply
// document.getElementById("multiply").onclick = function () {
//     document.getElementById("originalStatement").innerHTML = "<h5>let a = 12;</h5><br><h5>let a = 5;</h5>"
//     document.getElementById("output").innerHTML = "<h5> Multiplicat = 60</h5>"
// }
// // divide
// document.getElementById("devide").onclick = function () {
//     document.getElementById("originalStatement").innerHTML = "<h5>let a = 125;</h5><br><h5>let a = 5;</h5>"
//     document.getElementById("output").innerHTML = "<h5> Subtraction = 25</h5>"
// }
// // claculation
// document.getElementById("calculate").onclick = function () {
//     document.getElementById("originalStatement").innerHTML = "<h5>36 / 6 * 3 + 2 ** 4 - (3 + 5)</h5>"
//     document.getElementById("output").innerHTML = "<h5>26</h5>"
// }
// Clear original statement
document.getElementById("cl").onclick = function () {
    document.getElementById("originalStatement").innerText = ""

}
// // clear output
document.getElementById("clo").onclick = function () {
    document.getElementById("output").innerText = ""

}