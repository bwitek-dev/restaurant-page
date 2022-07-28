import './style.scss';
import { initLayout } from './init';
import {renderAboutTab} from './about';
import{renderMenuTab} from './menu';
import{renderContactTab} from './contact';

function clearSelectedContent(){
    const selectedContent = document.querySelector(`#selected-content`);

    while(selectedContent.firstChild){
        selectedContent.removeChild(selectedContent.firstChild);
    }
}
function switchTab(renderFunction){
    clearSelectedContent();
    renderFunction();
}
initLayout();
renderAboutTab();

const aboutTab = document.querySelector(`#about-usLink`);
aboutTab.addEventListener(`click`, switchTab.bind(aboutTab, renderAboutTab));

const menuTab = document.querySelector(`#menuLink`);
menuTab.addEventListener(`click`, switchTab.bind(menuTab, renderMenuTab));

const contactTab = document.querySelector(`#contactLink`);
contactTab.addEventListener(`click`, switchTab.bind(contactTab, renderContactTab));
// renderAboutTab();
// renderMenuTab();
// renderContactTab();
