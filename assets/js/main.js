/*=============== Nav underline ===============*/
const links = document.getElementsByClassName('nav-link');
for (const link of links) {
    const underline = document.getElementsByClassName('underline');
    link.addEventListener('click', function onClick() {
        underline[0].classList.remove("underline");
        link.classList.add("underline");
    });
}


/*=============== Bg Nav ===============*/
var nav = document.querySelector('nav');

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 100) {
                nav.classList.add('bg-nav', 'shadow');
            } else {
                nav.classList.remove('bg-nav', 'shadow');
            }
        });


/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')


        tabContents.forEach(tc =>{
            tc.classList.remove('filterse__active')
        })
        target.classList.add('filterse__active')

        tabs.forEach(t =>{
            t.classList.remove('filtere-tab-active')
        })
        tab.classList.add('filtere-tab-active')
    })
})