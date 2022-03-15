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
const btn_checkout = document.querySelector(".btn-checkout");

//Cart modal
const cart_container = document.querySelector(".cart-container");


//Menu
const menu = document.querySelector(".nav-container");


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

	if(image_index >= images.length) {
		image_index = 0;
	}

})

previus_icon.addEventListener("click", () => {
	product_image.src = images[image_index].img;
	image_index--;

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

//Total products
const total_products = document.querySelector(".total-products");

//Add item to cart
const cart_empty_text = document.querySelector(".cart-empty-text");
const cart_items = document.querySelector(".cart-items");
const total_products_cart = document.querySelector(".total-products-cart");
const product_price = document.querySelector(".product-price");

//Add a new item to cart

btn_add.addEventListener("click", () => {

	if(total_products.textContent == "0") {
		alert("Add item to cart.");
	}
	else {

		const item = document.createElement("DIV");


		item.classList.add("cart-item");
		cart_empty_text.style.display = "none";
		total_products_cart.textContent = total_products.textContent;
		total_products_cart.style.display = "block";
		let total_price = +product_price.textContent.slice(1) * +total_products_cart.textContent;
		btn_checkout.style.display = "block";

		item.innerHTML = `
		<div class="item-content-div">
			<img src="images/image-product-${image_index}.jpg" class="cart-item-img" alt="cart-item-img">
			<div class="description-div">
				<p class="product-title">Autumn Limited Edition...</p>
					<p class="product-price">${product_price.textContent} x ${total_products_cart.textContent} <span class="total-product-span">$${total_price}.00</span></p>
			</div>
			<img src="images/icon-delete.svg" class="delete-icon" alt="delete-icon">
		</div>

		`;
		cart_items.appendChild(item);

		cart_items.addEventListener("click", e => {
			if(e.target.className === "delete-icon") {
				cart_items.removeChild(item);
				cart_empty_text.style.display = "block";
				btn_checkout.style.display = "none";
			}
		})
	}

})