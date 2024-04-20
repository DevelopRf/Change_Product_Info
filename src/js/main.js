const modal = document.querySelector('.modal')

const close = document.querySelector('span')
const btnCancel = document.querySelector('.btn button:nth-child(1)')
const btnOk = document.querySelector('.btn button:nth-child(2)')

const container = document.querySelector('.products .container')
let colorPicker;
const products = [
    {
        productName: 'Smartfon Motorola G13 4GB/128GB',
        price: 370,
        currency: 'AZN',
        color: '#34434D',
        img: './img/phone/motorola-g13-4gb128gb-matte-charcoal-18_260x204.jpg'
    },
    {
        productName: 'Smartfon Honor X5 Plus 4GB/64GB',
        price: 280,
        currency: 'AZN',
        color: '#679CB0',
        img: './img/phone/smartfon_honor_x5_plus_4gb_64gb.jpg'
    },
    {
        productName: 'Smartfon Xiaomi Redmi Note 12 6/128GB',
        price: 500,
        currency: 'AZN',
        color: '#697077',
        img: './img/phone/smartfon-xiaomi-redmi-note12-6-128gb.jpg'
    },
    {
        productName: 'Smartfon Infinix Note 30 8GB/128GB',
        price: 500,
        currency: 'AZN',
        color: '#EBB722',
        img: './img/phone/smartfon-infinix-note-30-8gb128gb-sunset-gold-1_260x204.jpg'
    },
    {
        productName: 'Smartfon HUAWEI nova 11 8GB/256GB',
        price: 1100,
        currency: 'AZN',
        color: '#027D59',
        img: './img/phone/huawei-nova-11-3_260x204_adf.jpg'
    },

    {
        productName: 'Smartfon HUAWEI nova 11 Pro 8GB/256GB',
        price: 1300,
        currency: 'AZN',
        color: '#1E1E1E',
        img: './img/phone/smartfon-huawei-nova-11-pro-black-7_260x204_adf.jpg'
    },
    {
        productName: 'Smartfon Xiaomi Redmi Note 12 8GB/256GB',
        price: 1300,
        currency: 'AZN',
        color: '#8BD0EC',
        img: './img/phone/xiaomi-redmi-note-12-8gb256gb-ice-blue-nfc-7_260x204_adf.jpg'
    },
    {
        productName: 'Smartfon Xiaomi Redmi 12 8GB/256GB',
        price: 480,
        currency: 'AZN',
        color: '#C6CED9',
        img: './img/phone/smartfon-xiaomi-redmi-12-8gb256gb-polar-silver-nfc-1_260x204_adf.jpg'
    },
    {
        productName: 'Smartfon Motorola Razr 40 Ultra 8GB/256GB',
        price: 2600,
        currency: 'AZN',
        color: '#1E1E1E',
        img: './img/phone/smartfon-motorola-razr-40-ultra-8gb256gb-infinite-black-1_260x204_cd6.png'
    },
    {
        productName: 'Smartfon Honor X6A 6GB/128GB',
        price: 700,
        currency: 'AZN',
        color: '#C6CED9',
        img: './img/phone/smartfon-honor-x6a-titanuim-silver-1_260x204_244.jpeg'
    },
    {
        productName: 'Smartfon Xiaomi POCO X5 8GB/256GB',
        price: 400,
        currency: 'AZN',
        color: '#027D59',
        img: './img/phone/xiaomi-poco-x5-green-1_260x204_adf.jpg'
    },
    {
        productName: 'Smartfon Infinix Hot 30 8GB/256GB',
        price: 500,
        currency: 'AZN',
        color: '#1E1E1E',
        img: './img/phone/infinix-hot-30-8gb256gb-nfc-black-1_260x204_adf.jpg'
    },
]

const cards = document.createElement('div')
cards.classList.add('cards')
container.appendChild(cards)


for (const item of products) {
    const card = document.createElement('div')
    card.classList.add('card')
    const image = document.createElement('img')
    image.classList.add('image')
    const productInfo = document.createElement('div')
    productInfo.classList.add('productInfo')
    const productName = document.createElement('h2')
    const priceContent = document.createElement('div')
    priceContent.classList.add('priceContent')
    const priceInfo = document.createElement('div')
    priceInfo.classList.add('priceInfo')
    const colorContent = document.createElement('div')
    colorContent.classList.add('colorContent')
    const colorProduct = document.createElement('div')
    colorProduct.classList.add('colorProduct')
    const price = document.createElement('h3')
    const currency = document.createElement('span')
    const priceText = document.createElement('p')
    const colorText = document.createElement('p')
    priceText.innerText = 'Qiyməti'
    colorText.innerText = 'Rəngi'
    const edit = document.createElement('div')
    edit.classList.add('edit')
    const btnEdit = document.createElement('button')
    btnEdit.innerText = 'Düzəliş et'
    btnEdit.classList.add('btnEdit')


    image.src = item.img
    cards.appendChild(card)
    edit.appendChild(btnEdit)
    card.append(image, productInfo)
    productName.innerText = item.productName
    price.innerText = item.price
    currency.innerText = ' ' + item.currency
    colorProduct.style.backgroundColor = item.color
    productInfo.append(productName, priceContent, edit)
    priceContent.append(priceInfo, colorContent)
    colorContent.append(colorText, colorProduct)
    
    priceInfo.append(priceText, price, currency)

}

function showInfo(element) {
    const nameValue = document.getElementById('productName')
    const priceValue = document.getElementById('productPrice')
    const colorValue = document.querySelector('.colorChange')
    const productName = element.querySelector('.productInfo h2').textContent;    
    const productPrice = element.querySelector('.productInfo .priceContent .priceInfo h3').textContent;    
    const Productcolor = element.querySelector('.productInfo .priceContent .colorContent .colorProduct').style.backgroundColor;
    nameValue.value = productName
    priceValue.value = productPrice
    colorValue.style.backgroundColor = Productcolor
}

function changeInfo(element) {
    const nameValue = document.getElementById('productName')
    const priceValue = document.getElementById('productPrice')
    const colorValue = document.querySelector('.colorChange')
    const productName = element.querySelector('.productInfo h2')
    const productPrice = element.querySelector('.productInfo .priceContent .priceInfo h3')
    const Productcolor = element.querySelector('.productInfo .priceContent .colorContent .colorProduct')
    productName.innerText = nameValue.value
    productPrice.innerText = priceValue.value
    Productcolor.style.backgroundColor = colorValue.style.backgroundColor
}

function start() {
    colorPicker = document.querySelector('#color')
    colorPicker.addEventListener('change', updateAll, false)
    colorPicker.select()
}

const colorValue = document.querySelector('.colorChange')

function updateAll(event) {
    colorValue.style.backgroundColor = event.target.value;
}

const card = document.querySelectorAll('.card')
const btnEdit = document.querySelectorAll('.btnEdit')

for (const item of card) {
    item.addEventListener('click', () => {
        modal.style.display = 'block'
        start()
        showInfo(item)
        btnOk.addEventListener('click', () =>
        {
            changeInfo(item)
            closeModal()
        })
    })
}

function closeModal()
{
    modal.style.display = 'none'
}

close.addEventListener('click', closeModal)
btnCancel.addEventListener('click', closeModal)