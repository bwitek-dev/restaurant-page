function addContactItem(title, value){
    const itemTitle = document.createElement(`h3`);
    itemTitle.textContent = `${title}:`;

    const itemValue = document.createElement(`p`);
    itemValue.textContent = `${value}`;

    const contactItem = document.createElement(`div`);
    contactItem.classList.add(`contact-item`);

    contactItem.appendChild(itemTitle);
    contactItem.appendChild(itemValue);

    return contactItem;
}
function renderContactTab(){
    const h2 = document.createElement(`h2`);
    h2.textContent = `Contact`;

    const contactTab = document.createElement(`div`);
    contactTab.setAttribute(`id`, `contact-tab`);
    contactTab.appendChild(h2);
    contactTab.appendChild(addContactItem(`Phone1`,`+48 123 123 123`));
    contactTab.appendChild(addContactItem(`Phone2`,`+48 213 723 321`));
    contactTab.appendChild(addContactItem(`Email`,`malpka33@example.com`));

    const selectedContent = document.querySelector(`#selected-content`);
    selectedContent.appendChild(contactTab);
}

export {renderContactTab};