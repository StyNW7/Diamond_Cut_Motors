let currentImageIndex = 0;

const images = [
    "../Images/Cars/17.png",
    "../Images/Cars/16.png",
    "../Images/Cars/15.png"
];

const title = [
    "Showroom at Tangerang",
    "Showroom at Jakarta",
    "Showroom at Bekasi"
];

const text = [
    "Immerse yourself in the epitome of luxury and tranquility at our Tangerang showroom. Nestled in a peaceful area, our showroom offers a serene escape from the hustle and bustle of daily life. Here, you can take your time to explore our meticulously curated collection of luxury cars, each selected for its exceptional quality and performance. Whether you are looking for a sleek sports car or a sophisticated sedan, our knowledgeable staff is dedicated to understanding your unique preferences and helping you find the perfect vehicle that aligns with your lifestyle and desires. Experience car shopping like never before in a setting designed for your comfort and satisfaction.",

    "Step into the vibrant world of luxury car shopping in the heart of Jakarta. Our centrally located showroom is a haven for car enthusiasts, offering an extensive and diverse selection of high-end vehicles from the world’s most prestigious brands. From cutting-edge sports cars to elegant luxury sedans, our collection is designed to cater to the discerning tastes of our clientele. Our team of experts is always on hand to provide personalized assistance, ensuring that your car-buying experience is both enjoyable and informative. Whether you are a seasoned collector or a first-time buyer, we are committed to helping you discover the vehicle that perfectly matches your style and needs in one of the most dynamic cities in the world.",

    "Uncover automotive excellence at our state-of-the-art showroom in Bekasi. Designed with modern aesthetics and customer comfort in mind, our showroom boasts a comprehensive selection of luxury vehicles, each exemplifying superior craftsmanship and innovation. Whether you are in search of a powerful SUV, a refined sedan, or a high-performance sports car, our diverse inventory is sure to have something that captures your interest. Our dedicated staff is committed to providing personalized service, taking the time to understand your specific needs and desires to ensure you drive away in the perfect car. Experience unparalleled service and an impressive array of luxury vehicles in a contemporary setting that elevates the car-buying experience in Bekasi."
]

function addSpanToTitle(title) {
    return title.split(' ').map(word => `<span>${word.charAt(0)}</span>${word.slice(1)}`).join(' ');
}

document.querySelector('#slider-title').innerHTML = addSpanToTitle(title[currentImageIndex]);

function showImage(index) {
    currentImageIndex = index;
    document.querySelector('#slider').src = images[currentImageIndex];
    document.querySelector('#slider2').src = images[currentImageIndex];
    document.querySelector('#slider-title').innerHTML = addSpanToTitle(title[currentImageIndex]);
    document.querySelector('#slider-text').innerHTML = text[currentImageIndex];
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } 
    
    else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.querySelector('#slider').src = images[currentImageIndex];
    document.querySelector('#slider2').src = images[currentImageIndex];
    document.querySelector('#slider-title').innerHTML = addSpanToTitle(title[currentImageIndex]);
    document.querySelector('#slider-text').innerHTML = text[currentImageIndex];
}