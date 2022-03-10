//Buttons
const btn_add = document.querySelector(".btn-add");
const icon_menu = document.querySelector(".icon-menu");
const cart_icon = document.querySelector(".cart-icon");
const avatar = document.querySelector(".avatar");
const close_icon = document.querySelector(".close-icon");
const previus_icon = document.querySelector(".previus-icon");
const next_icon = document.querySelector(".next-icon");
const minus_icon = document.querySelector(".minus-icon");
const plus_icon = document.querySelector(".plus-icon");


//Cart modal
const cart_container = document.querySelector(".cart-container");


//Menu
const menu = document.querySelector(".nav-container");

//Total products
const total_products = document.querySelector(".total-products");


//Product image
const product_image = document.querySelector(".image-product");
let counter_products = 0;

let image_index = 1;

const images = [

	{
		img: "images/image-product-1.jpg"
	},

	{
		img: "images/image-product-2.jpg"
	},

	{
		img: "images/image-product-3.jpg"
	},

	{
		img: "images/image-product-4.jpg"
	},

];


next_icon.addEventListener("click", () => {
	product_image.src = images[image_index].img;
	image_index++;

	console.log(image_index);

	if(image_index >= images.length) {
		image_index = 0;
	}

})

previus_icon.addEventListener("click", () => {
	product_image.src = images[image_index].img;
	image_index--;

	console.log(image_index);

	if(image_index < 0) {
		image_index = images.length - 1;
	}
})

cart_icon.addEventListener("click", () => {
	cart_container.classList.toggle("open-cart-container");
})

plus_icon.addEventListener("click", () => {
	counter_products++;
	total_products.textContent = counter_products;
})

minus_icon.addEventListener("click", () => {
	counter_products--;
	total_products.textContent = counter_products;

	if(counter_products < 0) {
		counter_products = 0;
		total_products.textContent = counter_products;
	}
})

icon_menu.addEventListener("click", () => {
	menu.classList.toggle("open-menu");

})

close_icon.addEventListener("click", () => {
	menu.classList.toggle("open-menu");
})


//Add item to cart
const cart_empty_text = document.querySelector(".cart-empty-text");
const cart_items = document.querySelector(".cart-items");
const total_products_cart = document.querySelector(".total-products-cart");
let total_items = 0;

//Add a new item to cart
/*btn_add.addEventListener("click", () => {

	const item = document.createElement("DIV");

	item.innerHTML = `<img src="images/icon-delete.svg" alt="delete-icon">`;

	item.classList.add("cart-item");
	cart_items.appendChild(item);
	cart_empty_text.style.display = "none";
	total_items++;
	total_products_cart.textContent = total_items;
	total_products_cart.style.display = "block";
})*/