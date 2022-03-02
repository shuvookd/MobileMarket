// Search bar value 
const searchMobile =()=>{
    const searchMobile = document.getElementById('search-input');
    const searchText = searchMobile.value;
    spinner('block');
    const url = `https://openapi.programming-hero.com/api/mobile?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(mobile => showPhone(mobile.data))
    searchMobile.value=''; 
};
// Displaying Search Result
const displaySearchResult  = mobile =>{
    const div = document.getElementById('search-result');
    div.textContent='';
    if(mobile==false){
        document.getElementById('fail-msg').style.display='block';
        spinner('none');
    }else{
        mobile.slice(0, 20).forEach(phone => {
            document.getElementById('fail-msg').style.display='none'
            const newDiv = document.createElement('div');
            newDiv.classList.add('col');
            newDiv.innerHTML = `<div class="card border-0 p-1 shadow-lg p-3 mb-5 bg-body rounded">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">Brand: ${phone.brand}</p>
              <button type="button" onclick="getDetail('${phone.slug}')" class="btn btn-outline-dark">More Details</button>
            </div>
          </div>`;
          div.appendChild(newDiv);
          
        });
        spinner('none');
    };
};