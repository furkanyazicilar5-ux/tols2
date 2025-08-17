const screens = {
  welcome: document.getElementById('screen-welcome'),
  select: document.getElementById('screen-select'),
  pay: document.getElementById('screen-pay')
};

function show(name) {
  Object.values(screens).forEach(s => s.classList.add('hidden'));
  screens[name].classList.remove('hidden');
}

// Navigation
const startBtn = document.getElementById('start-order');
startBtn.addEventListener('click', () => show('select'));

document.querySelectorAll('.option').forEach(opt => {
  opt.addEventListener('click', () => {
    // Here we would normally send order info to backend
    show('pay');
  });
});

// Language handling
let lang = 'tr';
const translations = {
  tr: {
    start: 'BAŞLAYALIM',
    small: 'Küçük Boy',
    smallPrice: '300mL 30€',
    large: 'Büyük Boy',
    largePrice: '400mL 40€',
    payPrompt: 'Lütfen Ödeme Yapınız'
  },
  en: {
    start: 'START',
    small: 'Small Size',
    smallPrice: '300mL €30',
    large: 'Large Size',
    largePrice: '400mL €40',
    payPrompt: 'Please Pay'
  }
};

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key];
  });
}

function toggleLang() {
  lang = lang === 'tr' ? 'en' : 'tr';
  applyTranslations();
}

document.querySelectorAll('.lang-toggle').forEach(btn => {
  btn.addEventListener('click', toggleLang);
});

applyTranslations();
show('welcome');
