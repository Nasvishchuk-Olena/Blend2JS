import './styles/normalize.css';
import './styles/index.css';
import './requests/products';
import { getProducts } from './requests/products';

const allProductsEl = document.querySelector('#allProducts');

async function createMarkup() {
  const { data } = await getProducts();
  const markup = data.products
    .map(
      product =>
        `<li class="product">
          <h2 class="title">${product.title}</h2>
          <p class="price">${product.price}</p>
          <p class="description">${product.description}</p>
        </li>`
    )
    .join('');
  allProductsEl.innerHTML = markup;
}

createMarkup();
