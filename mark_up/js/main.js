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

// product carousel 
const arrow_prev = document.querySelector('.carousel_container .arrow_prev')
const arrow_next = document.querySelector('.carousel_container .arrow_next')
const carousel_container = document.querySelector('.carousel_container .carousel_product_container')
const slider = document.querySelector('.carousel_container .carousel_product_container .slider')

arrow_prev.addEventListener('click',() => {
    let slider_left = slider.style.marginLeft
    let slider_left_adj = Math.floor(slider_left.replace('px',''))
    console.log(slider_left_adj)
    if(slider_left_adj < 0){
        const carousel_container_width = carousel_container.offsetWidth;
        const slider_width = slider.offsetWidth;
        const adjust_amount = slider.children[0].offsetWidth
        let newNum = Math.floor(slider_left_adj+adjust_amount) 
        slider.style.marginLeft = newNum+ 'px'


        if(arrow_next.style.color === 'rgb(238, 238, 238)'){
            arrow_next.style.color = '#000000'
            arrow_next.style.cursor = 'pointer'
        }
        arrow_prev.style.color = '#000000'
        arrow_prev.style.cursor = 'pointer'
    }else{
        arrow_prev.style.color = '#eeeeee'
        arrow_prev.style.cursor = 'default'
    }
})
arrow_next.addEventListener('click',() => {
    // find the number of items
    const item_amount = slider.children.length
    // find how wide each is.
    const item_width = -(slider.children[0].offsetWidth)
    // mobile or not. tells how many clicks we can do
    const carousel_width = carousel_container.offsetWidth
    let slide_amount
    if(carousel_width===1200){
        slide_amount = item_amount - 4
    }else if(carousel_width===300){
        slide_amount = item_amount - 2
    }
    let slider_left = slider.style.marginLeft
    let slider_left_adj = Math.floor(slider_left.replace('px',''))
    const slide_amount_px = Math.floor(slide_amount*item_width)

    if(arrow_prev.style.color === 'rgb(238, 238, 238)'){
        arrow_prev.style.color = '#000000'
        arrow_prev.style.cursor = 'pointer'
    }
    if(slider_left_adj > slide_amount_px){
        //console.log(slider_left)
        let newNum = Math.floor(slider_left_adj+item_width) 
        slider.style.marginLeft = newNum+ 'px'
        arrow_next.style.color = '#000000'
        arrow_next.style.cursor = 'pointer'
    }else{
        arrow_next.style.color = '#eeeeee'
        arrow_next.style.cursor = 'default'
    }
    
    

})