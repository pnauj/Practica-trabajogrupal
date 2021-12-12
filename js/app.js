let listProducts = JSON.parse(localStorage.getItem('listProductsKey')) || [];
let inputSearch = document.querySelector(`#inputSearch`);

function initialCard(product){
    let grid = document.querySelector('#grid');
    grid.innerHTML += `<div class="col-sm-12 col-md-4 col-lg-4 my-3">
    <div class="card">
    <img src="${product.url}" class="card-img-top" alt="${product.product}">
    <div class="card-body">
    <h5 class="card-title">${product.product}</h5>
    <p class="card-text  text">${product.description}</p>
    <a href="../pages/pag404.html" class="btn btn-ver">Ver</a>
    </div>
    </div>
    </div>`
}

function initialLoad(){
    if(listProducts.length > 0){
        listProducts.forEach((itemProduct) =>{initialCard(itemProduct)});
    }
}

initialLoad();