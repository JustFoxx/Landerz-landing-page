
    $('.hamburger').on('click', () => {
        $('.hamburger').toggleClass('active')
        $('.mobile-menu').toggleClass('active')
    })

    $('.dmode-toggle').on('click', () => {
        $('body').toggleClass('darkmode')
    })

    $('.close-menu').on('click', () => {
        $('.mobile-menu').toggleClass('active')
        $('.hamburger').removeClass('active')
    })
    
