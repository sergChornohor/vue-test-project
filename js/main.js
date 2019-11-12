let completed = document.getElementById('completed');
let completedNumber = document.getElementById('completed-number');
let openNumber = document.getElementById('open-number');
let photo_array = document.querySelectorAll('.uploaded-photos .uploaded-photo');
let photo_notification = document.getElementById('notifications'); 

completed.onclick = function() {
    confirm('Are you sure you want to change the number of tasks?');

    if (openNumber.innerHTML <= 0) {
        alert('There is no open tasks');
        openNumber.innerHTML = 0;
        completedNumber.innerHTML = completedNumber.innerHTML;
    } else {
       completedNumber.innerHTML = Number(completedNumber.innerHTML) + 1;
        openNumber.innerHTML = Number(openNumber.innerHTML) - 1;
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

