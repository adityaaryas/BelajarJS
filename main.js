// console.log("Hai doy")
// alert("ada notifikasi")
// prompt("Pinjam Seratus")

// var Promnet = "Shilda is mbrot"
// console.log(Promnet)
// var Promnet = "Shilda not mbrot"
// console.log(Promnet)

// console.log(Promnet)
// var Promnet = "Shadow Kill"
// console.log(Promnet)

// let Promnet = "Coding Isfa Lana"
// console.log(Promnet)
// let Promnet = "Coding Isfa Lana"
// console.log(Promnet)

// const Promnet = "Coding is isun"
// console.log(Promnet)
// const Promnet = "Coding not isun"
// console.log(Promnet)

// let totalPoin = prompt("Massukan Poin Anda")
//     if(totalPoin >= 100){
//         document.write("Keren");
//     }else{
//         document.write("Pinjam dulu seratus");
//     }

// let x = 6;
// let y = 3;

//     if(x < 10 && y > 1){
//         document.write("True");
//     }else{
//         doucument.write("False");
//     }
    

//     console.log(x < 10 && y > 1);
//     console.log(x < 10 && y < 1);
//     console.log (x == 5 || y==5);
//     console.log(x==6 || y==5);
//     console.log(! (x==y));

//     document.write(x < 10 && y > 1);
//     document.write("<Br>");
//     document.write(x < 10 && y < 1);
//     document.write("<Br>");
//     document.write(x == 5 || y==5);
//     document.write("<Br>");
//     document.write(x==6 || y==5);
//     document.write("<Br>");
//     document.write(! (x==y));

let p = document.querySelector("p");
let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener('click', function () {
    let isi = input.value;
    console.log(isi);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let label = document.createElement("label");
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(isi));

    p.appendChild(label);

    p.appendChild(document.createElement("br"));

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            label.style.textDecoration = 'line-through'; 
        } else {
            label.style.textDecoration = 'none'; 
        }
    });
    input.value = "";
});

