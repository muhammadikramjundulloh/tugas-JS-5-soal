let pilihSelect = document.getElementById("hewan")
let gambar = document.querySelector('.gambar')

pilihSelect.addEventListener("click", function(){
    if (pilihSelect.value == 'ayam'){
    gambar.innerHTML +=`
    <div>
        <img src = "foto/ayam.jpg">
    </div>    `
    alert("ini gambar ayam")
    
            }else if (pilihSelect.value == 'bebek'){
                gambar.innerHTML +=`
                <div>
                    <img src = "foto/bebek.jpg">
                </div>    `
                alert("ini gambar bebek")
                }else if (pilihSelect.value == 'kelinci'){
                    gambar.innerHTML +=`
                    <div>
                        <img src = "foto/kelinci.jpg">
                    </div>    `
                    alert("ini gambar kelinci")
                    }else if (pilihSelect.value == 'kucing'){
                        gambar.innerHTML +=`
                        <div>
                            <img src = "foto/kucing.jpg">
                        </div>    `
                        alert("ini gambar kucing")
                        }else if (pilihSelect.value == 'kambing'){
                            gambar.innerHTML +=`
                            <div>
                                <img src = "foto/kambing.jpg">
                            </div>    `
                            alert("ini gambar kambing")
                            }else if (pilihSelect.value == 'panda'){
                                gambar.innerHTML +=`
                                <div>
                                    <img src = "foto/panda.jpg">
                                </div>    `
                                alert("ini gambar panda")
                                }
})
