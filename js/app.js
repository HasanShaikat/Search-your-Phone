const search = () =>{
    const searchFeild = document.getElementById('search-field');
    const searchText = searchFeild.value;
    

    const displaySinglePhone = document.getElementById('display-single-phone');
    displaySinglePhone.textContent='';


    searchFeild.value = '';

    // Fetch ===================

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data.slice(0,20)))
}

const displayPhone = phones => {
    const displayPhones = document.getElementById('display-phones');
    displayPhones.textContent = '';
    const noFound = document.getElementById('error-display')
    noFound.textContent = '';
    if(phones.length == 0){
        const div = document.createElement('div');
        div.innerHTML=`<h2 class="container mx-auto shadow-2xl w-2/4 text-center text-red-400 text-2xl py-8 font-bold uppercase rounded">Oppss! <br> Not Found &#9785; </h2>`
        noFound.appendChild(div);
    }else{
        phones.forEach(phone => {
            const div = document.createElement('div');
            div.classList.add('mx-auto','shadow-lg', 'mb-2','rounded','w-3/4',)
            div.innerHTML = `
                <img src=${phone.image} class="mx-auto">
                <div class="py-4">
                    <h2> <span class="text-green-400 font-semibold">Brands : </span> ${phone.brand}</h2>    
                    <h2><span class="text-green-400 font-semibold">Name : </span> ${phone.phone_name}</h2>
                    <button class="bg-green-400 py-2 px-12 rounded mt-4 text-white" onclick="phoneDetail('${phone.slug}')">Details</button>
                </div>   
            `
        displayPhones.appendChild(div);
        })
    }
}


const phoneDetail=id=>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch (url)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data.data))
}

const displayPhoneDetails = phoneId =>{
    
    
    const clearSingleDisplay =document.getElementById('clear-single');
    clearSingleDisplay.textContent = '';

    const displaySinglePhone = document.getElementById('display-single-phone');
        displaySinglePhone.textContent='';

    if(phoneId == ''){
        const div = document.createElement('div');
        div.innerHTML=`<h2 class="container mx-auto shadow-2xl w-2/4 text-center text-red-400 text-2xl py-8 font-bold uppercase rounded">Oppss! <br> Not Found &#9785; </h2>`
        clearSingleDisplay.appendChild(div);
    }else{
        const div = document.createElement('div');
        div.classList.add('mx-auto','border-x-4','border-indigo-500','rounded', 'w-full')
        div.innerHTML = `
            <img src=${phoneId.image} class="mx-auto">
            <div class="py-4">
                <p ><span class="text-green-400 font-semibold">Name : </span> ${phoneId.name}</p>               
                <p class="my-2"> <span class="text-green-400 font-semibold">Release : </span> ${phoneId.releaseDate ? phoneId.releaseDate: "No Release date &#9785;"}</p>                
                <p><span class="text-green-400 font-semibold">Storage : </span>${phoneId.mainFeatures.storage}</p>
                <p class="my-2"><span class="text-green-400 font-semibold">Display Size : </span>${phoneId.mainFeatures.displaySize}</p>
                <p><span class="text-green-400 font-semibold">Memory : </span>${phoneId.mainFeatures.memory}</p>
                <p class="my-2"><span class="text-green-400 font-semibold">Sensorsn : </span>${phoneId.mainFeatures.sensors}</p>
                <p><span class="text-green-400 font-semibold">Chipset : </span>${phoneId.mainFeatures.chipSet ? phoneId.mainFeatures.chipSet: 'No Found'}</p>
                <div class="shadow mt-2 pb-2">
                    <p><span class="text-green-400 font-semibold">Others : </span>WLAN - ${phoneId.others.WLAN ? phoneId.others.WLAN: 'Not Found'}</p>
                    <p>GPS - ${phoneId.others.GPS ? phoneId.others.GPS: 'Not Found'}</p>
                    <p>NFC - ${phoneId.others.NFC ? phoneId.others.NFC: 'Not Found'}</p>
                    <p>Radio - ${phoneId.others.Radio ? phoneId.others.Radio: 'Not Found'}</p>
                    <p>Bluetooth - ${phoneId.others.Bluetooth ? phoneId.others.Bluetooth: 'Not Found'}</p>
                    <p>USB - ${phoneId.others.USB ? phoneId.others.USB: 'Not Found'}</p>
                </div>
                
            </div>
           
        ` 
        displaySinglePhone.appendChild(div)
    } 
}