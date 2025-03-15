document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
      loop: true,
      speed: 800,
      grabCursor: true,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });

  document.addEventListener("click", function (event) {
      const starBtn = event.target.closest(".btn-star");
      const playedBtn = event.target.closest(".btn-played");
      const ratingBtn = event.target.closest(".rating-btn");
      const trashBtn = event.target.closest(".btn-trash");

      if (starBtn) {
          toggleRatingBlock(starBtn);
      }

      if (playedBtn) {
          togglePlayed(playedBtn);
      }

      if (ratingBtn) {
          selectRating(ratingBtn);
      }

      if (trashBtn) {
          resetRating(trashBtn);
      }
  });

  function toggleRatingBlock(button) {
    const slide = button.closest(".swiper-slide");
    const ratingContainer = slide.querySelector(".rating-container");
    const learnBtn = slide.querySelector(".btn-learn");
    const favBtn = slide.querySelector(".btn-favourite");
    const playedBtn = slide.querySelector(".btn-played");
    const iconStar = button.querySelector(".icon-star");
    const iconClose = button.querySelector(".icon-close");

    const isExpanded = ratingContainer.classList.contains("visible");

    if (isExpanded) {
        ratingContainer.classList.add("closing");
        setTimeout(() => {
            ratingContainer.classList.remove("visible", "closing");

            learnBtn.classList.remove("hidden");
            favBtn.classList.remove("hidden");
            playedBtn.classList.remove("hidden");

            gsap.to([learnBtn, favBtn, playedBtn], { opacity: 1, scale: 1, duration: 0.3, stagger: 0.05 });
        }, 300);
    } else {
        gsap.to([learnBtn, favBtn, playedBtn], { opacity: 0, scale: 0.9, duration: 0.2, stagger: 0.05, onComplete: () => {
            learnBtn.classList.add("hidden");
            favBtn.classList.add("hidden");
            playedBtn.classList.add("hidden");

            ratingContainer.classList.add("visible");
        }});
    }

    iconStar.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
  }

  function togglePlayed(button) {
      const slide = button.closest(".swiper-slide");
      const container = slide.querySelector(".btns-game");
      const isPlayed = button.classList.toggle("active");

      button.querySelector("img").src = isPlayed ? "/static/imgs/icons/red_watch.svg" : "/static/imgs/icons/watch.svg";

      if (isPlayed) {
          launchAchievements(container, button);
      } else {
          removeAchievements();
      }
  }

  function launchAchievements(container, playedBtn) {
      const icons = ["trophy.svg", 
                    "gamepad.svg", 
                    "playstation.svg", 
                    "packman.svg",
                    "fast_game.svg",
                    "trophy.svg", 
                    "packman.svg",
                    "fast_game.svg",
                    "trophy.svg", 
                    "playstation.svg"
        ];

      for (let i = 0; i < 6; i++) {
          let achievement = document.createElement("img");
          achievement.src = "/static/imgs/icons/" + icons[Math.floor(Math.random() * icons.length)];
          achievement.classList.add("achievement");
          achievement.style.position = "absolute";
          achievement.style.width = "35px";
          achievement.style.pointerEvents = "none";
          achievement.style.left = `${playedBtn.offsetLeft + playedBtn.offsetWidth / 2}px`;
          achievement.style.top = `${playedBtn.offsetTop + playedBtn.offsetHeight / 2}px`;
          container.appendChild(achievement);

          gsap.to(achievement, {
              x: (Math.random() - 0.5) * 300,
              y: (Math.random() - 0.5) * 300 - 150,
              opacity: 0,
              scale: 1.5,
              duration: 2,
              ease: "power2.out",
              onComplete: () => achievement.remove(),
          });
      }
  }

  function removeAchievements() {
      document.querySelectorAll(".achievement").forEach((el) => {
          gsap.to(el, { opacity: 0, duration: 0.5, onComplete: () => el.remove() });
      });
  }

  function selectRating(button) {
      const slide = button.closest(".swiper-slide");
      const ratingButtons = slide.querySelectorAll(".rating-btn");
      const ratingStar = slide.querySelector(".rating-options img:nth-child(2)");

      const ratingValue = parseInt(button.textContent, 10);

      // Сбрасываем цвета всех кнопок
      ratingButtons.forEach(btn => btn.style.color = "#6C6C6C");

      // Красим выбранную кнопку
      if (ratingValue === 1) {
          button.style.color = "#B7485C";
      } else if (ratingValue >= 2 && ratingValue <= 4) {
          button.style.color = "#FF4949";
      } else if (ratingValue >= 5 && ratingValue <= 7) {
          button.style.color = "#FCDA17";
      } else if (ratingValue >= 8 && ratingValue <= 10) {
          button.style.color = "#15B000";
      }

      // Меняем иконку звезды
      ratingStar.src = "/static/imgs/icons/yellow_star.svg";
  }

  function resetRating(button) {
      const slide = button.closest(".swiper-slide");
      const ratingButtons = slide.querySelectorAll(".rating-btn");
      const ratingStar = slide.querySelector(".rating-options img:nth-child(2)");

      // Сбрасываем цвета всех кнопок
      ratingButtons.forEach(btn => btn.style.color = "#6C6C6C");

      // Возвращаем серую звезду
      ratingStar.src = "/static/imgs/icons/gray_star.svg";
  }
});
