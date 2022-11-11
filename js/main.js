
/* Menu desplegable*/

((d) => {
    const $btnMenu = d.querySelector(".menu-btn");
    const $menu = d.querySelector(".header");

    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", (e) => {
        if (!e.target.matches(".header")) return false;

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");

    });
})(document);

const flags = document.getElementById("flags");
const textsChange = document.querySelectorAll("[data-section]");
const changeLanguage = async (language) => {
    const requestJson = await fetch(`./language/${language}.json`);
    const text = await requestJson.json();
    for (const textChange of textsChange) {
        const section = textChange.dataset.section;
        const value = textChange.dataset.value;
        textChange.innerHTML = text[section][value];
    }
}
flags.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});


function Scrollbtn(btn) {

    const $crollbtn = document.querySelector(btn);

    window.addEventListener("scroll", (e) => {
        let scrollTop = window.pageYOffset;

        if (scrollTop > 800) {
            $crollbtn.classList.remove("hidden");
        } else {
            $crollbtn.classList.add("hidden");
        }
    });

    document.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            window.scrollTo({
                behavior: "smooth",
                top: 0,
            })
        }
    });
}
Scrollbtn(".scroll-top-btn");
