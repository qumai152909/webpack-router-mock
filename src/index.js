import './css/style.css';
import imgTree from './img/tree.jpeg';

// 手动创建并插入一个img元素
let imgElement = document.createElement('img');
imgElement.src = imgTree;
imgElement.height = 200;
document.body.appendChild(imgElement);
