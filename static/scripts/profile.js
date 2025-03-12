function showTab(tabId) {
  // Убираем активность у всех кнопок
  document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

  // Делаем активной нажатую кнопку и показываем контент
  document.querySelector(`.tabs button[onclick="showTab('${tabId}')"]`).classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

function showSubTab(subTabId) {
  // Сбрасываем активность у подкатегорий
  document.querySelectorAll('.choose-mgb button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.sub-tab-content').forEach(subTab => subTab.classList.remove('active'));

  // Делаем активной нажатую подкатегорию и показываем её контент
  document.querySelector(`.choose-mgb button[onclick="showSubTab('${subTabId}')"]`).classList.add('active');
  document.getElementById(subTabId).classList.add('active');
}