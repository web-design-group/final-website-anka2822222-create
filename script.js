document.addEventListener('DOMContentLoaded', function() {
  // Получаем все необходимые элементы
  const ordersLink = document.getElementById('orders-link');
  const profileLink = document.getElementById('profile-link');
  const profileContent = document.getElementById('profile-content');
  const ordersContent = document.getElementById('orders-content');

  // Функция для скрытия всех контейнеров
  function hideAllContent() {
    profileContent.style.display = 'none';
    ordersContent.style.display = 'none';
  }

  // Обработчик для ссылки «Заказы»
  ordersLink.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllContent();
    ordersContent.style.display = 'block';
    console.log('Отображены заказы');
  });

  // Обработчик для имени «Анна»
  profileLink.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllContent();
    profileContent.style.display = 'block';
    console.log('Отображён профиль');
  });

  // При загрузке страницы показываем профиль по умолчанию
  hideAllContent();
  profileContent.style.display = 'block';
});





