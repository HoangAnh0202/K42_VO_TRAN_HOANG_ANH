const batteryLevel = document.getElementById('batteryLevel');
const batteryNumber = document.getElementById('batteryNumber')









// mức pin
function setBatteryLevel(level) {
      batteryLevel.style.width = `${level}%`;
      if (level > 50) {
            batteryLevel.style.backgroundColor = 'green';
      } else if (level > 20) {
            batteryLevel.style.backgroundColor = 'orange';
      } else {
            batteryLevel.style.backgroundColor = 'red';
      }
      batteryNumber.innerHTML = level;
}

// Ví dụ: Đặt mức pin là 75%
setBatteryLevel(100);
