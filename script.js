let btnRandom = document.querySelector('button');
//creates a variable for the button created in the HTML file

let result = document.querySelector('h2');
//creates a variable for the h1 element in the HTML file


// Get all the images
image_array = [
    'anime-kitten-1.jpg',
    'cartoon-cat-1.jpg',
    'cartoon-cat-2.jpg',
    'cartoon-kitten-1.jpg',
    'cartoon-kitten-2.jpg',
    'cat-1.jpg',
    'Kitten-1.jpg',
    'kitten-3.jpg',
    'kitten-4.jpg',
    'kitten-5.jpg',
    'kitten-6.jpg',
    'kitten-7.jpg',
    'kitten-8.jpg',
    'kitten-9.jpg',
    'kitten-10.jpg',
    'kitten-11.jpg',
    'kitten-12.jpg',
    'kitten-2.jpg',
    'kittens-1.jpg',
    'kittens-2.jpg'
  ];
  
  function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index]
  
    // Display the image
    document.getElementById('image_shower').src = `./images/${selected_image}`
}



const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
});


