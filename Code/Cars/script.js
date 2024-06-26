let currentImageIndex = 0;

const images = [
    "../Images/Brand/11.png",
    "../Images/Brand/12.png",
    "../Images/Brand/13.png"
];

const title = [
    "Bugatti Brand",
    "Porsche Brand",
    "Mercedes Benz"
];

const text = [
    "Bugatti, a name synonymous with luxury, performance, and exclusivity, has a storied legacy that dates back over a century. Founded in 1909 by the visionary Ettore Bugatti in Molsheim, France, the brand quickly became renowned for its high-performance automobiles and innovative engineering. Bugatti's legacy is built on a foundation of automotive masterpieces that blend art with technology, creating vehicles that are not only incredibly fast but also exquisitely designed.<br><br>Every Bugatti is a masterpiece of craftsmanship and exclusivity, with each car being meticulously hand-built by skilled artisans. The brand's commitment to perfection is evident in every detail, from the luxurious interiors to the advanced aerodynamics and engineering precision. Owning a Bugatti is not just about driving a car; it's about possessing a piece of automotive art that represents the pinnacle of human achievement in motoring.",

    "Porsche, established in 1931 by Ferdinand Porsche in Stuttgart, Germany, is a brand that embodies the perfect blend of heritage and innovation. Known for its timeless designs and exceptional performance, Porsche has consistently delivered sports cars that are as thrilling to drive as they are beautiful to behold.<br><br>Porsche's racing heritage is unparalleled, with numerous victories in prestigious motorsport events such as the 24 Hours of Le Mans, where the brand holds the record for the most overall wins. This racing pedigree translates into the performance and engineering excellence found in every Porsche road car, ensuring a driving experience that is both dynamic and exhilarating.",

    "Mercedes-Benz, a brand that has been at the forefront of the automotive industry since its inception in 1926, represents the pinnacle of luxury, innovation, and engineering excellence. With a commitment to producing vehicles that offer the highest levels of comfort, safety, and performance, Mercedes-Benz has become a symbol of automotive sophistication.<br><br>Mercedes-Benz is a leader in automotive innovation, continually pushing the boundaries with advancements in safety, connectivity, and autonomous driving technology. The brand's dedication to research and development ensures that each new model is equipped with the latest features, providing drivers with an unparalleled driving experience."
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