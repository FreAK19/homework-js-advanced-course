function timer(time) {
  return new Promise((resolve, reject) => {
    if (time !== undefined && typeof time === 'number') {
      setTimeout(() => {
        resolve(time);
      }, time);
    } else {
      reject();
    }
  });
}

/*
 timer(1000).then((time) => {
 console.log(`I was pullout from Promise, ${time / 1000} seconds ago`);
 }, reason => console.log(reason));*/


//  task 2

const btn = document.querySelector('#city-btn');
const preview = document.querySelector('.result');

function getData(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.responseType = 'json';
    request.timeout = 30000;
    request.addEventListener('load', () => {
      resolve(request);
    });
    request.addEventListener('error', (e) => {
      reject(e.message);
    });
    request.send(null);
  });
}

function appendItem(data) {
  const ul = document.createElement('ul');
  if (Array.isArray(data)) {
    data.sort();
    data.forEach((elem) => {
      const li = document.createElement('li');
      li.innerText = elem;
      ul.appendChild(li);
    });
  }
  return ul;
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!preview.childElementCount) {
    getData('city__lesson8.json').then((result) => {
      const ul = appendItem(result.response.city);
      preview.appendChild(ul);
    }, reason => console.log(reason));
  }
});

//  task 3

const search = document.querySelector('.search__result');
const input = document.querySelector('#city');
let city = [];
input.addEventListener('focus', () => {
  getData('city__lesson8.json').then((result) => {
    city = result.response.city;
  }, reason => reason);
});

function searchCityItem(arr, letters) {
  const result = [];
  arr.forEach((elem) => {
    const stringItem = elem.toString();
    if (stringItem.indexOf(letters) + 1 || stringItem.toUpperCase().indexOf(letters) + 1) {
      result.push(elem);
    }
  });
  return result;
}

input.addEventListener('keypress', (e) => {
  const letter = e.key;
  const res = searchCityItem(city, letter);
  const ul = appendItem(res);
  search.innerHTML = '';
  search.appendChild(ul);
});
