/* all javascript for home page */


/* Mobile Search toggle */
const toggleSearch = () => {
    const hamburger = document.getElementById('hamburger')
    const style = getComputedStyle(hamburger)
    if(style.display === 'none'){
        // If the hamburger is not showing we are on desktop.
    }else{
        // if the hamburger is showing. We are using mobile.
        const search_bar = document.getElementById('mobile_search_bar')
        const style_search_bar = getComputedStyle(search_bar)
        if(style_search_bar.display === 'none'){
            // show the search bar
            search_bar.style.display = 'block'
        }else{
            // hide the search bar
            search_bar.style.display = 'none'
        }
    }
}
const toggleNavigationMobile = () => {
    
    const mobile_menu_container = document.getElementById('mobile_menu_container')
    const style_mobile_menu_container = getComputedStyle(mobile_menu_container)
    if(style_mobile_menu_container.display === 'none'){
        // show the search bar
        mobile_menu_container.style.display = 'block'
        //limit scrolling by setting main div to overflow hidden.
    }else{
        // hide the search bar
        mobile_menu_container.style.display = 'none'
    }
    
}
const search_nav = document.getElementById('search_symbol')
search_nav.addEventListener('click', toggleSearch)
const submit_search_nav = document.getElementById('submit_search_form')
submit_search_nav.addEventListener('click', toggleSearch)

// Navigation Mobile
const hamburger = document.getElementById('hamburger')
hamburger.addEventListener('click', toggleNavigationMobile)
const mobile_close_btn = document.getElementById('mobile_close_btn')
mobile_close_btn.addEventListener('click', toggleNavigationMobile)

//Accordion Slide
const nav_sections = document.querySelectorAll('.nav_section')
for (const nav_section of nav_sections) {  
    nav_section.addEventListener('click',()=>{
        if(nav_section.children[1].classList.contains('open')) {
            nav_section.children[0].children[1].classList.replace('arrow_open','arrow_close')
            nav_section.children[1].classList.replace('open','close')
          }else{
            nav_section.children[0].children[1].classList.replace('arrow_close','arrow_open')
            nav_section.children[1].classList.replace('close','open')
          }
        
    })
}
//Footer Accordion Slide
const footer_nav_sections = document.querySelector('.footer_nav')
for (const nav_section of footer_nav_sections.children) {  
    nav_section.addEventListener('click',()=>{
        console.log(nav_section)
        if(nav_section.children[1].classList.contains('open')) {
            nav_section.children[0].children[1].innerHTML = '-'
            nav_section.children[1].classList.replace('open','close')
          }else{
            nav_section.children[0].children[1].innerHTML = '+'
            nav_section.children[1].classList.replace('close','open')
          }
    })
}
// // add event listener to close the filters side bar.
// const hide_filter_btn = document.querySelector('.filter_header h2')
// const btn_txt = document.querySelector('.filter_header h2 span')
// hide_filter_btn.addEventListener('click',(evt) => {
//   evt.stopPropagation()
//   const container = document.getElementById('accordion_container')
//   if(container.classList.contains('accordion_container_closed')) {
//     btn_txt.innerHTML = '~ hide'
//     container.classList.replace('accordion_container_closed','accordion_container_open')
//   }else{
//     btn_txt.innerHTML = '~ open'
//     container.classList.replace('accordion_container_open','accordion_container_closed')
//   }
// })