/*Header*/
/*Hide navigation bar*/
var header = document.getElementById('main__header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
mobileMenu.onclick = function(){
    var isClosed = header.clientHeight === headerHeight; 
    if(isClosed){
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

//auto open menu 
var menuItems = document.querySelectorAll('#header__nav li a[href*="#"]');
 for(var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
    var isParentMenu = this.menuItem.nextElementSibling;
    menuItem.onclick = function(event){
        if(isParentMenu) {
            event.preventDefault();
        } else{
            header.style.height = null;
        }
    }
 }


/*Portfolio*/
/*Classification the project*/

function tabsFilters() {
    const tabs = document.querySelectorAll('.js-portfolio-tabs');
    const projets = document.querySelectorAll('.js-portfolio-card');
  
    const resetActiveLinks = () => {
      tabs.forEach(element => {
        element.classList.remove('portfolio_all');
      });
    }
  
    const showProjets = (element) => {
      console.log(element);
      projets.forEach(projet => {
  
        let filter = projet.getAttribute('project-category');
  
        if (element === 'all') {
          projet.parentNode.classList.remove('hide');
          return
        }
        if(filter !== element){
            projet.parentNode.classList.add('hide');
        } else {
            projet.parentNode.classList.remove('hide');
        }
  
      });
    }
  
    tabs.forEach(element => {
        element.addEventListener('click', (event) => {
        event.preventDefault();
        let filter = element.getAttribute('project-filter');
        showProjets(filter)
        resetActiveLinks();
        element.classList.add('portfolio_alL');
      });
    });
  }
  
tabsFilters()




/*click on project --> open detail*/
const openModals = document.querySelectorAll('.js-open-modal');
const modalCloseButtons = document.querySelectorAll('.js-modal-close');
const modals = document.querySelectorAll('.js-modal');

function showDetailProject(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    const modalId = this.getAttribute('data-id');
    const modal = document.getElementById(modalId);
    modal.classList.add('open');
}

function hideDetailProject() {
    for (const modal of modals) {
        modal.classList.remove('open');
    }
}

for (const openModal of openModals) {
    openModal.addEventListener('click', showDetailProject);
}

for (const closeButton of modalCloseButtons) {
    closeButton.addEventListener('click', hideDetailProject);
}
// Close the modal when clicking outside its container
for (const modal of modals) {
    modal.addEventListener('click', function (event) {
        if (!event.target.closest('.js-modal-container')) {
            hideDetailProject();
        }
    });
}

// Prevent clicks inside the modal from closing it
for (const modalContainer of document.querySelectorAll('.js-modal-container')) {
    modalContainer.addEventListener('click', function (event) {
        event.stopPropagation();
    });
}


