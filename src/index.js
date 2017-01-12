import styles from  './index.css';

const image = document.createElement('img');
image.src = 'http://lorempixel.com/400/400';
console.log(styles)
image.className = styles.img;
document.body.appendChild(image);
