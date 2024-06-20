var listProduct = [
      'Sony Xperia',
      'Samsung Galaxy',
      'Nokia 6',
      'Xiaomi Redmi Note 4',
      'Oppo A71',
]

const addProduct = document.getElementById('addProduct')
const todolist = document.getElementById('todo-list')
const div_right = document.getElementById('div_right')
const newProductId = document.getElementById("newProductId")
const abc = document.getElementById("abc")

displayData()

function del(index) {
      alert("You have remove " + listProduct[index]);
      listProduct.splice(index, 1);
      displayData();
}

function edit(index) {
      alert("You have edit " + listProduct[index]);
      var newName = prompt("Enter new Name");
      listProduct[index] = newName;
      displayData();
}

function displayData() {
      div_right.innerHTML = `${listProduct.length} Product`
      todolist.innerHTML = ''
      for (let i = 0; i < listProduct.length; i++) {
            const row = document.createElement('tr')
            row.innerHTML = `
                  <th>${i + 1}</th>
                  <th>Name ${listProduct[i]}</th>
                  <th><input type="button" id="${listProduct[i]}" class="abc" onclick='del(${i})' value="Delete"></th>
                  <th><input type="button" id="${listProduct[i]}" class="abcc" onclick='edit(${i})' value="edit"></th>
      `
            todolist.appendChild(row);
      }
}

addProduct.addEventListener("click", function () {
      if (newProductId.value != '') { listProduct.push(newProductId.value) }
      div_right.innerHTML = `${listProduct.length} Product`
      todolist.innerHTML = ''

      for (let i = 0; i < listProduct.length; i++) {
            const row = document.createElement('tr')
            row.innerHTML = `
                  <th>${i + 1}</th>
                  <th>Name ${listProduct[i]}</th>
                  <th><input type="button" id="${listProduct[i]}" class="abc" onclick='del(${i})' value="Delete"></th>
                  <th><input type="button" id="${listProduct[i]}" class="abcc" onclick='edit(${i})' value="edit"></th>
                              `
            todolist.appendChild(row);
      }
});
