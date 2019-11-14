let completed = document.getElementById('completed');
let completedNumber = document.getElementById('completed-number');
let openNumber = document.getElementById('open-number');
let photo_array = document.querySelectorAll('.uploaded-photos .uploaded-photo');
let photo_notification = document.getElementById('notifications'); 

completed.onclick = function() {
    
    if (openNumber.innerHTML <= 0) {
        alert('There is no open tasks');
    } else {
        confirm('Are you sure you want to change the number of tasks?');
        completedNumber.innerHTML++;
        openNumber.innerHTML--;
    }
 }

let photo_array_listner = function(image, index) {
    image.onclick = function() {
        photo_notification.innerHTML = index;
    }
}

for  (i = 0; i < photo_array.length; i++) {
    photo_array_listner(photo_array[i], i);
}