(function () {
  const doc = document;
  const email = doc.getElementById('email');
  const company = doc.getElementById('company');
  const sbj = doc.getElementById('subject');
  const msg = doc.getElementById('message');
  const form = doc.querySelector('.form__wrapper');
  const btn = doc.getElementById('js-submit');
  const hendler = function event(e) {
    if (e.target.name === email.name) {
      localStorage.setItem(e.target.name, email.value);
    } else if (e.target.name === company.name) {
      localStorage.setItem(e.target.name, company.value);
    } else if (e.target.name === sbj.name) {
      localStorage.setItem(e.target.name, sbj.value);
    } else if (e.target.name === msg.name) {
      localStorage.setItem(e.target.name, msg.value);
    }
  };
  form.addEventListener('focusout', hendler, false);
  form.addEventListener('keypress', hendler, false);
  window.addEventListener('load', () => {
    email.value = localStorage.getItem('email');
    company.value = localStorage.getItem('company');
    sbj.value = localStorage.getItem('subject');
    msg.value = localStorage.getItem('msg');
  }, false);
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
    email.value = '';
    company.value = '';
    sbj.value = '';
    msg.value = '';
  });
})();
