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