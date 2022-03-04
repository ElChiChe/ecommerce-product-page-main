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


//Product image
const product_image = document.querySelector(".image-product");

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
