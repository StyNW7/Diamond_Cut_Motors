// document.addEventListener('DOMContentLoaded', () => {
//     const carImages = [
//         "../Images/Cars/bugatti.jpg",
//         "../Images/Cars/bugatti.webp",
//         "../Images/Cars/bugatti2.webp",
//         "../Images/Cars/bugatti3.png",
//         "../Images/Cars/Bugatti4.jpg"
//     ];

//     const carContainers = document.getElementById('carContainers');

//     for (let i = 0; i < 3; i++) {
//         const container = document.createElement('div');
//         container.className = 'container';

//         carImages.forEach((src, index) => {
//             const imageDiv = document.createElement('div');
//             imageDiv.className = 'image';
//             const img = document.createElement('img');
//             img.src = src;
//             img.alt = `Car ${index + 1}`;
//             imageDiv.appendChild(img);
//             container.appendChild(imageDiv);
//         });

//         const dotsDiv = document.createElement('div');
//         dotsDiv.className = 'dots';

//         carImages.forEach((_, index) => {
//             const dot = document.createElement('span');
//             dot.className = 'dot';
//             dot.onclick = () => currentSlide(index + 1, container);
//             dotsDiv.appendChild(dot);
//         });

//         container.appendChild(dotsDiv);
//         carContainers.appendChild(container);
//     }

//     displaying(1);
// });

// let carsImage = 1;

// function currentSlide(n, container) {
//     displaying(carsImage = n, container);
// }

// function displaying(n, container) {
//     let i;
//     const images = container.getElementsByClassName("image");
//     const dots = container.getElementsByClassName("dot");

//     if (n > images.length) {
//         carsImage = 1;
//     }

//     if (n < 1) {
//         carsImage = images.length;
//     }

//     for (i = 0; i < images.length; i++) {
//         images[i].style.display = "none";
//     }

//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }

//     images[carsImage - 1].style.display = "block";
//     dots[carsImage - 1].className += " active";
// }
