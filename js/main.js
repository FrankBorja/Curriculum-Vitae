

/*--------------- about section tabs ---------------*/

(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
        /* if event.target contains 'tab-item' class and not contains 'active' class */
        if(event.target.classList.contains("tab-item") &&
          !event.target.classList.contains("active")){
           const target = event.target.getAttribute("data-target");
           // deactive existing active 'tab-item'
           tabsContainer.querySelector(".active").classList.remove("outer-shadow" 
                ,"active");
            // activate new 'tab-item'
            event.target.classList.add("active","outer-shadow");
        }
    })
})();


