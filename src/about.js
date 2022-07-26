import furnaceUrl from './images/furnace.jpg';

function renderAboutTab(pageDescription){
    const img = document.createElement(`img`);
    img.setAttribute(`src`, furnaceUrl);
    img.setAttribute(`alt`, `pic of our furnace`);

    const imgWrapper = document.createElement(`div`);
    imgWrapper.classList.add(`img-wrapper`);
    imgWrapper.appendChild(img);

    const h2 = document.createElement(`h2`);
    h2.textContent = `About us`;

    const p = document.createElement(`p`);
    p.setAttribute(`id`, `restaurant-description`);
    p.textContent = `Topping cheesecake candy canes ice cream liquorice sweet powder cheesecake. Lemon drops marshmallow wafer caramels
    cupcake candy chocolate bar gummi bears. Oat cake marzipan liquorice caramels chocolate cake caramels chocolate pastry.
    Cheesecake sweet roll donut dragée marzipan pudding shortbread. Cupcake powder lollipop cotton candy jelly beans jelly
    beans brownie chocolate cake bonbon. Biscuit pudding wafer tootsie roll dragée halvah gummies. Apple pie chocolate bar
    gingerbread muffin sugar plum sugar plum jelly beans jelly. Pudding chocolate dragée cupcake chocolate cake topping
    bonbon. Chocolate bar marshmallow gummies sugar plum candy canes powder chupa chups shortbread. Carrot cake chupa chups
    tootsie roll toffee cake. Lollipop ice cream marshmallow brownie gummi bears soufflé oat cake jelly. Jelly-o danish
    dragée liquorice powder oat cake.`
    const description = document.createElement(`div`);
    description.setAttribute(`id`,`about-description`);

    description.appendChild(h2)
    description.appendChild(p)

    const aboutTab = document.createElement(`div`);
    aboutTab.setAttribute(`id`,`about-tab`);
    aboutTab.appendChild(imgWrapper)
    aboutTab.appendChild(description);

    const selectedContent = document.querySelector(`#selected-content`);
    selectedContent.appendChild(aboutTab)
}

export {renderAboutTab};