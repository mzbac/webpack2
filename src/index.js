import bigImage from '../assets/big.jpg';
import smallImage from '../assets/small.jpg';
import styles from  './index.css';

const image = document.createElement('img');
image.src = bigImage;
image.className = styles.img;
document.body.appendChild(image);
