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
                    <h2> <span class="text-green-400">Brands:</span> ${phone.brand}</h2>    
                    <h2>Name: ${phone.phone_name}</h2>
                    <button onclick="phoneDetail()">Detail</button>
                </div>   
            `

        displayPhones.appendChild(div);
        })
    }
}
