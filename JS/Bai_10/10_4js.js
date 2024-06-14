var listProduct = ['b', 'v', 'g', 'h', 'h', 'j', 't', 'd']
var listNum = listProduct.length

const addProduct = document.getElementById('addProduct')
const todolist = document.getElementById('todo-list')
const div_right = document.getElementById('div_right')
const newProductId = document.getElementById("newProductId")
const abc = document.getElementById("abc")

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
      if (newProductId.value != '') { listProduct.push(newProductId.value) }
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


abc.addEventListener("click", function (ev) {
      alert(ev.target.getAttribute("class") != null)

});