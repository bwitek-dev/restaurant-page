function formatTabName(tabName){
    const alphaRegex = new RegExp(`[^a-zA-Z0-9]`,'g');
    let alphaTabName = tabName.replaceAll(alphaRegex,` `);
    let firstLetter = alphaTabName.slice(0, 1).toUpperCase();

    let formatedTabName = firstLetter+alphaTabName.slice(1);
    return formatedTabName;
}
function createHeader(title, tabNames){
    const header = document.createElement(`header`);

    const h1 = document.createElement(`h1`);
    h1.textContent = `${title}`;

    header.appendChild(h1);

    const ul = document.createElement(`ul`);
    ul.setAttribute(`id`,`content-selection`)

    for(let tabName of tabNames){
        let li = document.createElement(`li`);

        let a = document.createElement(`a`);
        a.setAttribute(`href`,`#`);
        a.setAttribute(`id`,`${tabName}-link`);
        a.textContent = `${formatTabName(tabName)}`;
        
        li.appendChild(a);
        ul.appendChild(li);
    }

    header.appendChild(ul);

    return header;

}
function createMain(){
    const main = document.createElement(`main`);
    const selectedContent = document.createElement(`div`);
    selectedContent.setAttribute(`id`,`selected-content`);

    main.appendChild(selectedContent);

    return main;
}
function createFooter(authorName){
    const footer = document.createElement(`footer`);
    footer.textContent = `Created by `;
    let a = document.createElement(`a`);
    a.setAttribute(`href`,`https://github.com/bwitek-dev`);
    a.textContent = `${authorName}`;

    footer.appendChild(a);

    return footer;
}
function initLayout(){
    const content = document.querySelector(`#content`);

    const header = createHeader(`Italian pizzeria`, [`about-us`, `menu`, `contact`]);
    const main = createMain();
    const footer = createFooter(`bwitek-dev`);

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
}

export {initLayout};