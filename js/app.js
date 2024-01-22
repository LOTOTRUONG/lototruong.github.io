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

 /*Skill*/
 //skillbar

 document.querySelectorAll('.skillbar').forEach(function(skillbar) {
    var dataWidth  = skillbar.getAttribute('data-width');
    var skillbarTitle = skillbar.querySelector('.skillbar__title');
    var skillbarPercent = skillbar.querySelector('.skill-bar-percent');

    skillbar.style.width = '0%';
    skillbar.style.transition = 'width  2s ease-in-out';
     setTimeout(function() {
        skillbar.style.width = dataWidth;
        skillbarPercent.innerHTML = dataWidth;
        skillbarTitle.style.opacity = '1';
    }, 20); 
});



/*Portfolio*/
/*Classification the project*/

function tabsFilters() {
    const tabs = document.querySelectorAll('.js-portfolio-tabs');
    const projects = document.querySelectorAll('.js-portfolio-card');
  
    const resetActiveLinks = () => {
      tabs.forEach(tab => {
        tab.classList.remove('portfolio_all');
      });
    };
  
    const showProjects = (category) => {
      console.log(category);
      projects.forEach(project => {
        let filter = project.getAttribute('project-category');
  
        if (category === 'all') {
          project.parentNode.classList.remove('hide');
          return;
        }
  
        if (filter !== category) {
          project.parentNode.classList.add('hide');
        } else {
          project.parentNode.classList.remove('hide');
        }
      });
    };
  
    tabs.forEach(tab => {
      tab.addEventListener('click', (event) => {
        event.preventDefault();
        let filter = tab.getAttribute('project-filter');
        showProjects(filter);
        resetActiveLinks();
        tab.classList.add('portfolio_all');
      });
    });
  }
  
  tabsFilters();
  




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

