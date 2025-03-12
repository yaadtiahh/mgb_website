document.getElementById('open-reg').addEventListener('click', function () {
  document.getElementById('reg').classList.add('--show'); // Открывает форму
  document.getElementById('log').classList.remove('--show');  // Закрывает логин
});

document.getElementById('open-log').addEventListener('click', function () {
  document.getElementById('log').classList.add('--show'); // Открывает логин
  document.getElementById('reg').classList.remove('--show');  // Закрывает регистрацию
});

// Закрытие форм при клике на крестик
document.querySelectorAll('.krestik').forEach(function (button) {
  button.addEventListener('click', function () {
    document.getElementById('reg').classList.remove('--show');
    document.getElementById('log').classList.remove('--show');
  });
});

// Закрытие форм при клике вне их области
document.addEventListener('click', function (event) {
  if (!event.target.closest('.reg-modal') && !event.target.closest('.log-modal') &&
      !event.target.closest('#open-reg') && !event.target.closest('#open-log')) {
    document.getElementById('reg').classList.remove('--show');
    document.getElementById('log').classList.remove('--show');
  }
});

