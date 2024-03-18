// 
// 
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
// 

// 
let products = [
    {
        id: 1,
        name: 'Batman: The Bat Sigil',
        image: '1.webp',
        price: 1000
    },
    {
        id: 2,
        name: 'Harry Potter:Hogwarts 07',
        image: '2.webp',
        price: 1000
    },
    {
        id: 3,
        name: 'The Mandalorian:This The Way3',
        image: '3.webp',
        price: 1000
    },
    {
        id: 4,
        name: 'Solids: Greenlake',
        image: '4.webp',
        price: 1000
    },
    {
        id: 5,
        name: 'Solids:Light Beige(Straight Fit)',
        image: '5.webp',
        price: 1000
    },
    {
        id: 6,
        name: 'TSS Originals: Ignite',
        image: '6.webp',
        price: 2000
    },
    {
        id: 7,
        name: 'Breaking Bad: Heisenberg',
        image: '7.webp',
        price: 1000
    },
    {
        id: 8,
        name: 'Pure Cotton Green T-Shirt',
        image: '8.webp',
        price: 500
    },
    {
        id: 9,
        name: 'TSS Originals: Meadows',
        image: '9.webp',
        price: 2199
    },
    {
        id: 10,
        name: 'Naruto: Itachi Uchiha',
        image: '10.png',
        price: 1000
    },
    {
        id: 11,
        name: 'Marvel: Logo',
        image: '11.webp',
        price: 700
    },
    {
        id: 12,
        name: 'Naruto: Split Sneakers',
        image: '12.webp',
        price: 5000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
    // 
    document.getElementById("totalAmt").value = totalPrice;
    // 
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}