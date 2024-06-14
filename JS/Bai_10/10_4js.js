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

var listNum = listProduct.length

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
      todolist.innerHTML = ''
      for (let i = 0; i < listProduct.length; i++) {
            const row = document.createElement('tr')
            row.innerHTML = `
                  <th>${i + 1}</th>
                  <th>Name ${listProduct[i]}</th>
                  <th><input type="button" id="${listProduct[i]}" class="abc" onclick='del(${i})' value="Delete"></th>
                  <th><input type="button" id="${listProduct[i]}" class="abc" onclick='edit(${i})' value="edit"></th>
      `
            todolist.appendChild(row);
      }

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
            <th>Name ${a[i].name}</th>
            <th><input type="button" id="${a[i].id}" class="abc" onclick='del(${i})' value="Delete"></th>
            <th>Edit</th>
`
            todolist.appendChild(row);
      }
});
// function del() {
//       alert('delete')
//       alert(tar)

// }

// abc.addEventListener("click", function (ev) {
//       alert(ev.target.getAttribute("class"))
// });



// Sets callbacks to the buttons and other elements in the list
// refreshCallbacks();

// function refreshCallbacks() {
//       // Trigger event for new generated row/object
//       removeBtns = $(removeBtns.selector);
//       removeBtns.click(function () {
//             var itemId = $(this).closest('tr').data('id');
//             userList.remove('id', itemId);
//       });

//       // Re-set device of each select
//       let deviceOptions = $('.deviceType');
//       deviceOptions.each(function () {
//             let parentSelect = $(this).closest('select').data('value');
//             if (parentSelect === this.value) {
//                   $(this).attr('selected', 'selected');
//             }
//       });

//       // Add Datetime Picker
//       $('.datetimepicker').datetimepicker({
//             format: 'YYYY-MM-DD HH:mm:ss'
//       });
// }

// // Add new blank row into tables if click button Add
// addBtn.click(function () {
//       userList.add({
//             id: ++size,
//             itemId: `#${size}`,
//             name: "",
//             born: "",
//             joinAt: ""
//       });
//       refreshCallbacks();
// });