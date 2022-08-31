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