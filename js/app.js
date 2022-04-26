const search = () =>{
    const searchFeild = document.getElementById('search-field');
    const searchText = searchFeild.value;
    
    searchFeild.value = '';

    // Fetch ===================

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
}

const displayPhone = phones => {
    const displayPhones = document.getElementById('display-phones');
    if(phones == ''){
        
        displayPhones.textContent = '';
        alert('Not Found Phones!')
    }else{
        // const displayPhones = document.getElementById('display-phones');
        displayPhones.textContent = '';

        phones.forEach(phone => {
            const div = document.createElement('div');
            div.classList.add('mx-auto','shadow-lg', 'mb-2','rounded','w-3/4',)
            div.innerHTML = `
                <img src=${phone.image} class="mx-auto">
                <div class="py-4">
                    <h2> <span class="text-green-400 font-semibold">Brands : </span> ${phone.brand}</h2>    
                    <h2><span class="text-green-400 font-semibold">Name : </span> ${phone.phone_name}</h2>
                    <button class="bg-green-400 py-2 px-12 rounded mt-4 text-white" onclick="phoneDetail('${phone.slug}')">Detail</button>
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
    const displaySinglePhone = document.getElementById('display-single-phone');

    if(phoneId == ''){
        displaySinglePhone.textContent = '';
        alert('Not Found Phones!')
    }else{
        displaySinglePhone.textContent = '';
    const div = document.createElement('div');
    div.classList.add('mx-auto','border-x-4','border-indigo-500','rounded', 'w-full')
    div.innerHTML = `
        <img src=${phoneId.image} class="mx-auto">
        <div class="py-4">
            <h2> <span class="text-green-400 font-semibold">Brands : </span> ${phoneId.brand}</h2>    
            <h2><span class="text-green-400 font-semibold">Name : </span> ${phoneId.name}</h2>
        </div>
    `
    displaySinglePhone.appendChild(div)
    }

    
}
