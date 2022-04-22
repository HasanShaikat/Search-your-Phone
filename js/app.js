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
    displayPhones.textContent = '';

    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add()
        div.innerHTML = `
            <img src=${phone.image} class="shadow-lg">
            <h2>Brands: ${phone.brand}</h2>    
            <h2>Name: ${phone.phone_name}</h2>    
        `

        displayPhones.appendChild(div);
    })
}
