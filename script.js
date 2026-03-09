
const wisata = [

{
nama:"Pantai Kuta",
kategori:"pantai",
gambar:"https://picsum.photos/400/200?1",
deskripsi:"Pantai Kuta adalah salah satu pantai terkenal di Bali."
},

{
nama:"Gunung Bromo",
kategori:"alam",
gambar:"https://picsum.photos/400/200?2",
deskripsi:"Gunung Bromo terkenal dengan pemandangan sunrise."
},

{
nama:"Candi Borobudur",
kategori:"budaya",
gambar:"https://picsum.photos/400/200?3",
deskripsi:"Candi Buddha terbesar di dunia."
},

{
nama:"Raja Ampat",
kategori:"alam",
gambar:"https://picsum.photos/400/200?4",
deskripsi:"Surga wisata bahari di Papua."
},

{
nama:"Pantai Parangtritis",
kategori:"pantai",
gambar:"https://picsum.photos/400/200?5",
deskripsi:"Pantai terkenal di Yogyakarta."
}

]


const container = document.getElementById("wisataContainer")

function tampilWisata(data){

container.innerHTML=""

data.forEach((w,i)=>{

container.innerHTML+=`

<div class="card">

<img src="${w.gambar}">

<h3>${w.nama}</h3>

<button onclick="detail(${i})">Detail</button>

</div>

`

})

}

tampilWisata(wisata)



function filterWisata(kategori){

if(kategori=="all"){
tampilWisata(wisata)
}

else{

const hasil = wisata.filter(w => w.kategori==kategori)

tampilWisata(hasil)

}

}



document.getElementById("search").addEventListener("keyup",function(){

const keyword = this.value.toLowerCase()

const hasil = wisata.filter(w => w.nama.toLowerCase().includes(keyword))

tampilWisata(hasil)

})



function detail(index){

document.getElementById("popup").style.display="block"

document.getElementById("popupTitle").innerText = wisata[index].nama
document.getElementById("popupImg").src = wisata[index].gambar
document.getElementById("popupDesc").innerText = wisata[index].deskripsi

}



function closePopup(){

document.getElementById("popup").style.display="none"

}



function rate(nilai){

document.getElementById("ratingResult").innerText =
"Terima kasih memberi rating "+nilai+" ⭐"

}