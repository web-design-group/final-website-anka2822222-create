
document.addEventListener('DOMContentLoaded', function() {

  const ordersLink = document.querySelector('.sidebar ul li:first-child a'); 
  const profileContent = document.querySelector('.profile-content'); 
  const ordersContent = document.getElementById('orders-content'); 


  ordersLink.addEventListener('click', function(event) {
    event.preventDefault(); 


    profileContent.style.display = 'none';
    ordersContent.style.display = 'block';


    console.log('Клик обработан. Профиль скрыт, заказы показаны.');
  });
});



