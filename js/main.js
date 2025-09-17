document.addEventListener("DOMContentLoaded", function () {
  // Кнопка згоди
  var checkbox = document.getElementById("agree");
  var sendBtn = document.querySelector(".questions__submit");
  if (checkbox && sendBtn) {
    sendBtn.disabled = !checkbox.checked;
    checkbox.addEventListener("change", function () {
      sendBtn.disabled = !this.checked;
    });
  }
});

document.querySelectorAll(".input-clear").forEach((btn) => {
  btn.addEventListener("click", function () {
    const input = this.previousElementSibling;
    if (input && input.value !== undefined) input.value = "";
    input.focus();
    this.style.display = "none";
  });
});

document.querySelectorAll(".questions__input").forEach((input) => {
  const clearBtn = input.nextElementSibling;
  function toggleClearBtn() {
    if (input.value.length > 0) {
      clearBtn && (clearBtn.style.display = "flex");
    } else {
      clearBtn && (clearBtn.style.display = "none");
    }
  }
  input.addEventListener("input", toggleClearBtn);
  input.addEventListener("change", toggleClearBtn);
  input.addEventListener("keyup", toggleClearBtn);
  toggleClearBtn();
});

///
$(document).ready(function () {
  $(".header__burger").on("click", function (event) {
    $(".header__burger, .header__nav").toggleClass("active");
    $("body").toggleClass("lock");
  });

  // Закриття бургер-меню при кліку на пункт навігації
  $(".header__nav-list .nav-item a").on("click", function () {
    if ($(".header__burger").is(":visible")) {
      $(".header__burger, .header__nav").removeClass("active");
      $("body").removeClass("lock");
    }
  });
});
