const langSelect = document.getElementById('lang-select');
const themeBtn = document.getElementById('theme-btn');

// ========== THEME FUNCTION ==========
function setTheme(isLight) {
    if(isLight) {
        document.body.classList.add('light-theme');
        themeBtn.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-theme');
        themeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
}
// Load saved theme on page load
const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'light'){
    setTheme(true);
}else{
    setTheme(false);
}
// Toggle click
themeBtn.addEventListener('click', ()=>{
    const isLight = document.body.classList.contains('light-theme');
    setTheme(!isLight);
})

// ========== LANGUAGE SWITCH (your working old code) ==========
if (langSelect) {
    // Auto select language based on URL
    const path = window.location.pathname;
    if (path.startsWith('/zh-hans/')) {
        langSelect.value = "zh-hans";
    } else if (path.startsWith('/en/')) {
        langSelect.value = "en";
    }

    langSelect.addEventListener('change', function () {
        document.body.classList.add('fade-out');
        const newLang = this.value;
        const pathWithoutLang = window.location.pathname.replace(/^\/(en|zh-hans)\//, '/');
        const newUrl = `/${newLang}${pathWithoutLang}`;

        setTimeout(() => {
            window.location.href = newUrl;
        }, 350);
    });
}
