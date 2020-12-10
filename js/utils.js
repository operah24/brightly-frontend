  const displayAlert = (type, message) => {
    const container = document.querySelector('.alert-container');
    const h5 = document.createElement('h5');
    h5.className = `text-center alert alert-dismissables alert-${type}`;
    h5.textContent = message;
    container.append(h5);
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  };
  

function myFunction() {
    var x = document.getElementById('password');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }
const makeFetch = async (url) => {
    const token = localStorage.getItem("token");
    // console.log(token)
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          "Authorization": `Bearer ${token}`
        }
      });
      const data_1 = await res.json();
      return data_1;
    } catch (err) {
      return err;
    }
};




const toggleBtn = document.querySelector(".toggler");

const nav = document.querySelector(".sidebar")

toggleBtn.onclick = () => {
  if(nav.style.display === 'none') {
    nav.style.display = 'block';
} else if(nav.style.display === 'block') {
  // header.classList.remove('header')
  nav.style.display = 'none'
} else {
  // header.classList.add('header')
  nav.style.display = 'block'
}

};