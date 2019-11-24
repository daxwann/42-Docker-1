const cats = []

// display cats
const displayCats = (cats) => {
  const table = document.getElementById("catsList")
  
  // remove previous data
  const data = table.getElementsByClassName("cat-data")

  if (data.length > 0) {
    data.forEach(d => {
      table.removeChild(d)
    })
  }

  // add new data
  cats.forEach(cat => {
    const row = document.createElement('tr');
    row.className = "cat-data";

    // create table data from JSON
    const nameData = document.createElement('td').createTextNode(cat.name)
    const ageData = document.createElement('td').createTextNode(cat.age)
    const genderData = document.createElement('td').createTextNode(cat.sex)
    const colorData = document.createElement('td').createTextNode(cat.color)

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
  if (this.readyState == 4 && this.status == 200) {
    cats = JSON.parse(this.responseText)
    displayCats(cats)
  }
}

getCats.open("GET", '/cats', true);
getCats.send();

// add new cat
const createNewCat = newCat => {
    const createCat = new XMLHttpRequest()

    createCat.onreadystatechange = () => {
      if (this.readyState == 4 && this.status == 201) {
        console.log(this.responseText)
      }
    }
  
    createCat.open("POST", '/cats', true)
    createCat.setRequestHeader("Content-type", "application/json")
    createCat.send(JSON.stringify(newCat));
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