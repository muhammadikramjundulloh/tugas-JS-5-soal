function masukanData(){
    alert("hallo gaes b30")
    // console.log("hallo B30");
}

function masukanData(){
    let nama = document.getElementById("nama").value
    let email = document.getElementById("email").value
    let tujuan = document.getElementById("tujuank").value
    let jam = document.getElementById("jamk").value
    let tiket = document.getElementById("tiket").value

console.log(nama);
console.log(email);
console.log(tujuan);
console.log(jam);
console.log(tiket);

if (tiket >10){
    alert('maksimal membeli 10 tiket')
    return
}



    else if (nama == ''){
        alert("masukan namamu")
    }else if (email == ""){
        alert('masukan email')
    }else if (tujuan == ""){
        alert("kemana Tujuanmu")
    }else if (jam == ""){
        alert('kapan mau berangkat')
    }else if (tiket ==''){
        alert('pesan tiketnya dong')
    }

    document.getElementById("data-nama").innerHTML = nama
    document.getElementById("data-email").innerHTML = email
    document.getElementById("data-jam").innerHTML = jam
    document.getElementById("data-tiket").innerHTML = tiket
    document.getElementById("data-tujuan").innerHTML = tujuan
}