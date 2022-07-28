import pizza1Url from './images/pizza1.jpg';
import pizza2Url from './images/pizza2.jpg';
import pizza3Url from './images/pizza3.jpg';

function addMenuItem(imgUrl, name, price, description){
    const img = document.createElement(`img`);
    img.setAttribute(`src`, imgUrl);
    img.setAttribute(`alt`, `pic of ${name} pizza`);

    const imgWrapper = document.createElement(`div`);
    imgWrapper.classList.add(`img-wrapper`);
    imgWrapper.appendChild(img);

    const h3 = document.createElement(`h3`);
    h3.textContent = `${name}`;

    const itemPrice = document.createElement(`div`);
    itemPrice.classList.add(`item-price`);
    itemPrice.textContent = `${price}$`;

    const itemHeading = document.createElement(`div`);
    itemHeading.classList.add(`item-heading`);
    itemHeading.appendChild(h3);
    itemHeading.appendChild(itemPrice);

    const itemDescription = document.createElement(`p`);
    itemDescription.textContent = `${description}`;

    const itemInfo = document.createElement(`div`);
    itemInfo.classList.add(`item-info`);
    itemInfo.appendChild(itemHeading);
    itemInfo.appendChild(itemDescription);

    const item = document.createElement(`div`);
    item.classList.add(`menu-item`);
    item.appendChild(imgWrapper);
    item.appendChild(itemInfo);

    return item;



}
function renderMenuTab(){
const h2 = document.createElement(`h2`);
h2.textContent = `Menu`;

const menuTab = document.createElement(`div`);
menuTab.setAttribute(`id`, `menu-tab`);
menuTab.appendChild(h2);
menuTab.appendChild(addMenuItem(pizza1Url, `Cheesy`, 21.37, `Gummi bears topping sweet macaroon donut croissant gummi bears. Tootsie roll shortbread macaroon lemon drops jelly. Chocolate bar bonbon marzipan danish lollipop jelly-o lemon drops bear claw. Sweet sweet roll macaroon icing sweet gummi bears ice cream marzipan lemon drops.`));
menuTab.appendChild(addMenuItem(pizza2Url, `Italian`, 36.99,`Gummi bears topping sweet macaroon donut croissant gummi bears. Tootsie roll shortbread macaroon lemon drops jelly. Chocolate bar bonbon marzipan danish lollipop jelly-o lemon drops bear claw. Sweet sweet roll macaroon icing sweet gummi bears ice cream marzipan lemon drops.`));
menuTab.appendChild(addMenuItem(pizza3Url, `Funghi`, 40.99,`Gummi bears topping sweet macaroon donut croissant gummi bears. Tootsie roll shortbread macaroon lemon drops jelly. Chocolate bar bonbon marzipan danish lollipop jelly-o lemon drops bear claw. Sweet sweet roll macaroon icing sweet gummi bears ice cream marzipan lemon drops.`));

const selectedContent = document.querySelector(`#selected-content`);
selectedContent.appendChild(menuTab);
}

export {renderMenuTab};