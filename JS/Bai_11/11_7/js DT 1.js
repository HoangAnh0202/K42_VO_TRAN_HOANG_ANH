const batteryLevel = document.getElementById('batteryLevel');
const input = document.getElementById('messageInput');
const batteryNumber = document.getElementById('batteryNumber');
const openAppMessages = document.getElementById('openAppMessages')
const closeButton = document.getElementById('closeButton')
const messagesContainer = document.getElementById('messages');
const messageElement = document.createElement('div');






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

// document.getElementById('appGrid').style.display = 'none';
// document.getElementById('messagesApp').style.display = 'flex';

// Hiển thị ứng dụng tin nhắn và ẩn lưới ứng dụng
openAppMessages.addEventListener("click", function openMessagesApp() {
      document.getElementById('appGrid').style.display = 'none';
      document.getElementById('messagesApp').style.display = 'flex';
}
)

// Ẩn ứng dụng tin nhắn và hiển thị lưới ứng dụng
closeButton.addEventListener("click", function closeMessagesApp() {
      document.getElementById('messagesApp').style.display = 'none';
      document.getElementById('appGrid').style.display = 'flex';
}
)
let mesInputArr = getFromStorage('data') || []

for (let i = 0; i < mesInputArr.length; i++) {
      const message = mesInputArr[i];
      // Tạo một phần tử tin nhắn mới
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', 'sent');
      messageElement.textContent = message;

      // Thêm tin nhắn vào container
      messagesContainer.appendChild(messageElement);


}
// Gửi tin nhắn

function sendMessage() {
      const message = input.value.trim();


      if (message != '') {
            mesInputArr.push(input.value)

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
}
function saveToStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value))
}
function getFromStorage(key) {
      return JSON.parse(localStorage.getItem(key))
}
