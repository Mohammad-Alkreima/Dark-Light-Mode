const myIcon = document.getElementById('myIcon');

// تغيير الأيقونة إلى أيقونة أخرى
function changeIcon() {
  myIcon.classList.remove('fa-home');
  myIcon.classList.add('fa-star');
}

// تغيير الأيقونة بناءً على شرط
function toggleIcon() {
  if (myIcon.classList.contains('fa-home')) {
    myIcon.classList.remove('fa-home');
    myIcon.classList.add('fa-star');
  } else {
    myIcon.classList.remove('fa-star');
    myIcon.classList.add('fa-home');
  }
}




// function dark() {
//     let html = document.documentElement;
//         if (html.className === "dark-mode") {
//             html.className = "";
//             // moon.classList.remove('fa-moon');
//             // moon.classList.add('fa-sun');
//         } else {
//             html.className = "dark-mode";
//             // moon.classList.remove('fa-sun');
//             // moon.classList.add('fa-moon');
//         }
// }








//         function toggle() {
//             if(moon.classList.contains("fa-sun")) {
//                 moon.classList.remove("fa-sun");
//                 moon.classList.add("fa-moon");
//             } else {
//                 moon.classList.remove("fa-moon");
//                 moon.classList.add("fa-sun");
//         }
// }






// function dark() {
//     let html = document.documentElement;
//         if (html.classList.contains("dark-mode")) {
//             html.classList.toggle("");
//             // moon.innerHTML = `<i class="fa-solid fa-sun"></i>`
            
//         } else {
//             html.classList.toggle("dark-mode");
//             // moon.classList.remove("fa-moon");
//             // moon.classList.add("fa-sun");
//         }
// }


