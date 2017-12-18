const input = document.querySelector('#file');
const preview = document.querySelector('#preview img');

input.addEventListener('change', () => {
  const file = input.files[0];
  const reader = new FileReader();
  const res = reader.readAsArrayBuffer(file);
  /*  preview.src = res.result; */
  console.log(res);
}, false);
