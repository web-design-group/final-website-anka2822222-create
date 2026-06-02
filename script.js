document.addEventListener('DOMContentLoaded', function() {
  
  const ordersLink = document.getElementById('orders-link');
  const profileLink = document.getElementById('profile-link');
  const profileContent = document.getElementById('profile-content');
  const ordersContent = document.getElementById('orders-content');

  
  function hideAllContent() {
    profileContent.style.display = 'none';
    ordersContent.style.display = 'none';
  }


  ordersLink.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllContent();
    ordersContent.style.display = 'block';
    console.log('Отображены заказы');
  });

 
  profileLink.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllContent();
    profileContent.style.display = 'block';
    console.log('Отображён профиль');
  });


  hideAllContent();
  profileContent.style.display = 'block';
});





