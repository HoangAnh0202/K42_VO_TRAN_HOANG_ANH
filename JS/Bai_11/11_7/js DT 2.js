const batteryLevel = document.getElementById('batteryLevel');
const input = document.getElementById('messageInput');
const batteryNumber = document.getElementById('batteryNumber');
const openAppMessages = document.getElementById('openAppMessages')
const closeButton = document.getElementById('closeButton')
const messagesContainer = document.getElementById('messages');
const messageElement = document.createElement('div');
const powerButton = document.getElementById('powerButton')
// Đặt mức pin ban đầu
function setBatteryLevel(level) {
      batteryLevel.style.width = `${level}%`;
      if (level > 50) {
            batteryLevel.style.backgroundColor = 'green';
      } else if (level > 20) {
            batteryLevel.style.backgroundColor = 'orange';
      } else {
            batteryLevel.style.backgroundColor = 'red';
      }
      batteryNumber.innerHTML = level + '%';
}
setBatteryLevel(100); // Ví dụ: Đặt mức pin là 75%

document.getElementById('appGrid').style.display = 'none';
document.getElementById('messagesApp').style.display = 'flex';

// Hiển thị ứng dụng tin nhắn và ẩn lưới ứng dụng
openAppMessages.addEventListener("click", function openMessagesApp() {
      document.getElementById('appGrid').style.display = 'none';
      document.getElementById('messagesApp').style.display = 'flex';
}
)

// Ẩn ứng dụng tin nhắn và hiển thị lưới ứng dụng
closeButton.addEventListener("click", function closeMessagesApp() {
      document.getElementById('appGrid').style.display = 'flex';
      document.getElementById('messagesApp').style.display = 'none';
}
)
let mesInputArr = getFromStorage('data') || []
let mesInputArr1 = getFromStorage('data1') || []

setInterval(() => {
      messagesContainer.innerHTML = ''
      mesInputArr1 = getFromStorage('data1') || []

      for (let i = 0; i < mesInputArr1.length; i++) {
            const message = mesInputArr1[i].id + " " + mesInputArr1[i].message;
            // Tạo một phần tử tin nhắn mới
            const messageElement = document.createElement('div');
            if (mesInputArr1[i].id === 2) {
                  messageElement.classList.add('message', 'sent1');
            }
            else { messageElement.classList.add('message', 'sent2'); }
            messageElement.textContent = message;
            // Thêm tin nhắn vào container
            messagesContainer.appendChild(messageElement);
      }
}, 500);
// tắt điện thoại
powerButton.addEventListener("click", function clossMyphone() {
      let a = alert('closs phone 02')
})
// Gửi tin nhắn
function sendMessage() {
      let data = {
            id: 2,
            message: input.value.trim(),
      }
      const message = input.value.trim();
      if (message != '') {
            mesInputArr.push(input.value)
            mesInputArr1.push(data)
            // Tạo một phần tử tin nhắn mới
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'sent');
            messageElement.textContent = message;
            // Thêm tin nhắn vào container
            messagesContainer.appendChild(messageElement);
            // Xóa nội dung trong ô nhập
            input.value = '';
            // Cuộn xuống cuối container để xem tin nhắn mới
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
      saveToStorage('data', mesInputArr)
      saveToStorage('data1', mesInputArr1)

}
function saveToStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value))
}
function getFromStorage(key) {
      return JSON.parse(localStorage.getItem(key))
}
