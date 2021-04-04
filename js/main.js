/* all javascript for home page */


/* Mobile Search toggle */
const toggleSearch = () => {
    const hamburger = document.getElementById('hamburger')
    const style = getComputedStyle(hamburger)

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
const toggleNavigationMobile = () => {
    
    const mobile_menu_container = document.getElementById('mobile_menu_container')
    const style_mobile_menu_container = getComputedStyle(mobile_menu_container)
    if(style_mobile_menu_container.display === 'none'){
        // show the search bar
        mobile_menu_container.style.display = 'block'
        //limit scrolling by setting main div to overflow hidden.
        document.querySelector('body').style.overflow='hidden'
    }else{
        // hide the search bar
        mobile_menu_container.style.display = 'none'
        document.querySelector('body').style.overflow='auto'
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
const nav_sections = document.querySelectorAll('.mobile_navigation_header')
for (const nav_section of nav_sections) {  
    nav_section.addEventListener('click',()=>{
        if(nav_section.parentElement.children[1].classList.contains('open')) {
            nav_section.children[1].classList.replace('arrow_open','arrow_close')
            nav_section.parentElement.children[1].classList.replace('open','close')
          }else{
            nav_section.children[1].classList.replace('arrow_close','arrow_open')
            nav_section.parentElement.children[1].classList.replace('close','open')
          }
        
    })
}
//Footer Accordion Slide
const footer_nav_sections = document.querySelector('.footer_nav')
for (const nav_section of footer_nav_sections.children) {  
    nav_section.children[0].addEventListener('click',()=>{
        if(nav_section.children[1].classList.contains('open')) {
            nav_section.children[0].children[1].innerHTML = '-'
            nav_section.children[1].classList.replace('open','close')
          }else{
            nav_section.children[0].children[1].innerHTML = '+'
            nav_section.children[1].classList.replace('close','open')
          }
    })
}


// Main Navigation DESKTOP
const desktop_nav = document.querySelector('.nav_bar_center ul');
for (const d_nav of desktop_nav.children){
    d_nav.addEventListener('click',()=>{
        const mega_menu = document.querySelector('.mega_menu_container')
        if(d_nav.children[0].dataset.mega){
            const mega_style_display = getComputedStyle(mega_menu)
            if(mega_menu.style.display === 'none' || mega_style_display.display ==='none'){
                mega_menu.style.display = 'flex'
            }else{
                mega_menu.style.display = 'none'
            }
        }else{
            mega_menu.style.display = 'none'
        }
        for (const d_nav of desktop_nav.children){
            d_nav.children[0].classList.remove('nav_bar_active')
        }
        d_nav.children[0].classList.add('nav_bar_active')
    })
}