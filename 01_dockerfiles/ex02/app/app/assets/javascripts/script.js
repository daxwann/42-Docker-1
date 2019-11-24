let cats = []

// display cats
const displayCats = (cats) => {
  const table = document.getElementById("catsListBody")
  
  // remove previous data
  table.innerHTML = "";

  // add new data
  cats.forEach(cat => {
    const row = document.createElement('tr');
    row.className = "cat-data";

    // create table data from JSON
    const nameData = document.createElement('td');
    nameData.appendChild(document.createTextNode(cat.name));

    const ageData = document.createElement('td');
    ageData.appendChild(document.createTextNode(cat.age));

    const genderData = document.createElement('td');
    genderData.appendChild(document.createTextNode(cat.sex));

    const colorData = document.createElement('td'); 
    colorData.appendChild(document.createTextNode(cat.color));

    row.appendChild(nameData)
    row.appendChild(ageData)
    row.appendChild(genderData)
    row.appendChild(colorData)

    table.appendChild(row)
  })
}

// get all cats 
const getCats = new XMLHttpRequest()

getCats.onreadystatechange = () => {
  if (getCats.readyState == 4 && getCats.status == 200) {
    cats = JSON.parse(getCats.responseText)
    displayCats(cats)
  }
}

getCats.open("GET", '/cats', true);
getCats.send();

// add new cat
const createNewCat = newCat => {
    const createCat = new XMLHttpRequest()

    createCat.onreadystatechange = () => {
      if (createCat.readyState == 4 && createCat.status == 201) {
        let newCat = JSON.parse(createCat.responseText)
        cats = cats.concat(newCat);
        displayCats(cats)
      }
    }
  
    createCat.open("POST", '/cats', true)
    createCat.setRequestHeader("Content-type", "application/json")
    createCat.send(JSON.stringify({cat: newCat}));
}

// after dom has loaded
window.onload = function (e) {
    const form = document.getElementById("createCat")

    form.onsubmit = function (e) {
      e.preventDefault()

      const newCat = {
        name: e.target.elements[0].value,
        age: e.target.elements[1].value,
        sex: e.target.elements[2].checked ? "F" : "M",
        color: e.target.elements[4].value
      }
      
      createNewCat(newCat);
    }
  }