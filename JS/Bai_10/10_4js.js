var listProduct = [
      1, 2, 3, 4, 5, 6, 7, 8
]
var a = [
      { id: 1, name: "sonny0" },
      { id: 2, name: "sonny1" },
      { id: 3, name: "sonny2" },
      { id: 4, name: "sonny3" },
      { id: 5, name: "sonny4" }
]

console.log(a[3].name)
var listNum = listProduct.length

const addProduct = document.getElementById('addProduct')
const todolist = document.getElementById('todo-list')
const div_right = document.getElementById('div_right')
const newProductId = document.getElementById("newProductId")
const abc = document.getElementById("abc")

for (let i = 0; i < a.length; i++) {
      const row = document.createElement('tr')
      row.innerHTML = `
            <th>${i + 1}</th>
            <th>Name ${a[i].name}</th>
            <th><input type="button" id="abc" class="${a[i].id}" value="Delete"></th>
            <th>Edit</th>
`
      todolist.appendChild(row);
}

// function addProduct_onclick() {
//       if (newProductId.value != '') { listProduct.push(newProductId.value) }
//       div_right.innerHTML = `${listProduct.length} Product`
//       todolist.innerHTML = ''

//       for (let i = 0; i < listProduct.length; i++) {
//             const row = document.createElement('tr')
//             row.innerHTML = `
//                   <th>${listProduct[i]}</th>
//                   <th>Name ${listProduct[i]}</th>
//                   <th><input type="button" class="abc" 
//                   value="Delete" id="${listProduct[i]}" 
//                   "></th>
//                   <th>Edit</th>
// `
//             todolist.appendChild(row)
//       }
// };
addProduct.addEventListener("click", function () {
      if (newProductId.value != '') { listProduct[i].push(newProductId.value) }
      div_right.innerHTML = `${listProduct.length} Product`
      todolist.innerHTML = ''

      for (let i = 0; i < listProduct.length; i++) {
            const row = document.createElement('tr')
            row.innerHTML = `
                  <th>${i + 1}</th>
                  <th>Name ${listProduct[i]}</th>
                  <th><input type="button" id="abc" class="${listProduct[i]}" value="Delete"></th>
                  <th>Edit</th>
`
            todolist.appendChild(row);
      }
});


// abc.addEventListener("click", function (ev) {
//       alert(ev.target.getAttribute("class"))
// });