function showTab(tabId) {
  document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

  document.querySelector(`.tabs button[onclick="showTab('${tabId}')"]`).classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

function showSubTab(subTabId) {
  document.querySelectorAll('.choose-mgb button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.sub-tab-content').forEach(subTab => subTab.classList.remove('active'));

  document.querySelector(`.choose-mgb button[onclick="showSubTab('${subTabId}')"]`).classList.add('active');
  document.getElementById(subTabId).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
  const editProfileModal = document.getElementById("editProfile");
  const openEditProfile = document.getElementById("editProfileBtn");
  const closeButton = document.querySelector(".close-modal");

  const headerInput = document.getElementById("headerUpload");
  const headerPreview = document.getElementById("headerPreview"); 
  const originalHeader = headerPreview.style.backgroundImage;

  const avatarInput = document.getElementById("avatarUpload");
  const avatarPreview = document.getElementById("avatarPreview"); 
  const originalAvatar = avatarPreview.style.backgroundImage;

  // Открытие модального окна
  if (openEditProfile && editProfileModal) {
    openEditProfile.addEventListener("click", function () {
      editProfileModal.classList.add("--show");
    });
  }

  // Закрытие модального окна (крестик)
  if (closeButton) {
    closeButton.addEventListener("click", function (event) {
      event.stopPropagation();
      editProfileModal.classList.remove("--show");
      headerPreview.style.backgroundImage = originalHeader;
      avatarPreview.style.backgroundImage = originalAvatar;
    });
  }

  // Закрытие по клику вне формы
  editProfileModal.addEventListener("click", function (event) {
    if (event.target === editProfileModal) {
      editProfileModal.classList.remove("--show");
      headerPreview.style.backgroundImage = originalHeader;
      avatarPreview.style.backgroundImage = originalAvatar;
    }
  });

  // Обработчик выбора фото для шапки (мгновенный предпросмотр)
  if (headerInput) {
    headerInput.addEventListener("change", function () {
      const file = this.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          headerPreview.style.backgroundImage = `url('${e.target.result}')`;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Обработчик выбора фото для шапки (мгновенный предпросмотр)
  if (avatarInput) {
    avatarInput.addEventListener("change", function () {
      const file = this.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          avatarPreview.style.backgroundImage = `url('${e.target.result}')`;
        };
        reader.readAsDataURL(file);
      }
    });
  }
});