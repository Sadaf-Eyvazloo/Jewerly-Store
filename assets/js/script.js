const mahsol = document.getElementById('mahsol');
const cards = [{
    title: 'Asssana Neckless',
    src: './assets/image/Assana necklace.jfif',
    link: 'https://www.swarovski.com/en-AT/c-01/Categories/Jewelry/f/product_material/material-silver-tone-finish/product_material/material-mixed-metal-finish/product_material/material-stainless-steel/product_material/material-rhodium-plated/?sort=relevance'
}, {
    title: 'Diamond Hoops',
    src: './assets/image/diamond hoops.jfif',
    link: 'https://www.swarovski.com/en-AT/c-01/Categories/Jewelry/f/product_material/material-silver-tone-finish/product_material/material-mixed-metal-finish/product_material/material-stainless-steel/product_material/material-rhodium-plated/?sort=relevance'
}, {
    title: 'Ring Earring',
    src: './assets/image/download (1).jfif',
    link: 'https://www.swarovski.com/en-AT/c-01/Categories/Jewelry/f/product_material/material-silver-tone-finish/product_material/material-mixed-metal-finish/product_material/material-stainless-steel/product_material/material-rhodium-plated/?sort=relevance_material/material-stainless-steel/product_material/material-rhodium-plated/?sort=relevance'
}, {
    title: 'Simple Diamond',
    src: './assets/image/hand1.jfif',
    link: 'https://www.swarovski.com/en-AT/c-01/Categories/Jewelry/f/product_material/material-silver-tone-finish/product_material/material-mixed-metal-finish/product_material/material-stainless-steel/product_material/material-rhodium-plated/'
}, {
    title: 'Heart shape Necklace',
    src: './assets/image/Heart Pendant Necklace Silver.jfif',
    link: 'https://www.swarovski.com/en-AT/c-01/Categories/Jewelry/f/product_material/material-silver-tone-finish/product_material/material-mixed-metal-finish/product_material/material-stainless-steel/product_material/material-rhodium-plated/'
}, {
    title: '18K gold Neckless',
    src: './assets/image/Chaumet _ Pendentif Jeux de Liens en or blanc et diamants pour Elle.jfif',
    link: 'https://www.swarovski.com/en-AT/c-01/Categories/Jewelry/f/product_material/material-silver-tone-finish/product_material/material-mixed-metal-finish/product_material/material-stainless-steel/product_material/material-rhodium-plated/'
},];
cards.map(item => {
    const kala = document.createElement('div');
    kala.classList.add('card');
    kala.classList.add('mx-2');
    kala.classList.add('mt-5');
    kala.innerHTML = ` 
    <a
      href="${item.link}">
      <img src="${item.src}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-center">${item.title}</h5>
    </a>
`;
    mahsol.appendChild(kala);
})