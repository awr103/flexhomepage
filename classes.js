document.addEventListener('DOMContentLoaded', function() {
  // Modal and popup logic
  const modal = document.getElementById('join-modal');
  const closeModalBtn = document.querySelector('.close-modal');
  const joinClassBtns = document.querySelectorAll('.join-class-btn');
  const classInput = document.getElementById('class-input');
  const classNameField = document.getElementById('class-name');
  const form = document.getElementById('join-class-form');
  const popup = document.getElementById('success-popup');
  const closePopupBtn = document.getElementById('close-popup');
  const confettiPopup = document.getElementById('confetti-popup');
  const confettiCanvas = document.getElementById('confetti-canvas');

  // Open modal with class name
  joinClassBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const className = btn.getAttribute('data-class');
      classInput.value = className;
      classNameField.value = className;
      modal.classList.add('show');
    });
  });

  // Close modal
  closeModalBtn.onclick = () => {
    modal.classList.remove('show');
  };
  window.onclick = event => {
    if (event.target === modal) modal.classList.remove('show');
  };

  // Close popup
  closePopupBtn.onclick = () => {
    popup.style.display = 'none';
  };

  // Google Apps Script integration
  form.onsubmit = function(e) {
    e.preventDefault();
    const data = {
      class: classInput.value,
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value
    };
    fetch('https://script.google.com/macros/s/AKfycbypBPaasoT4e-gML9MYoWL-AolG6c_WiUEEtr4tuDY0PtcmsyZ4_owLN367M1Amz0um/exec', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams(data).toString()
    }).then(() => {
      modal.classList.remove('show');
      form.reset();
      // Show confetti popup
      confettiPopup.style.display = 'flex';
      playConfetti(confettiCanvas);
      setTimeout(() => {
        confettiPopup.style.display = 'none';
        confettiCanvas.getContext('2d').clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      }, 2500);
    });
  };

  // Confetti animation
  function playConfetti(canvas) {
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;
    const confettiCount = 40;
    const confettiColors = ['#3498db', '#e67e22', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6'];
    let confetti = [];
    for (let i = 0; i < confettiCount; i++) {
      confetti.push({
        x: Math.random() * W,
        y: Math.random() * -H,
        r: 6 + Math.random() * 6,
        d: 2 + Math.random() * 2,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        tilt: Math.random() * 10 - 5
      });
    }
    let frame = 0;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < confetti.length; i++) {
        let c = confetti[i];
        ctx.beginPath();
        ctx.ellipse(c.x, c.y, c.r, c.r / 2, c.tilt, 0, 2 * Math.PI);
        ctx.fillStyle = c.color;
        ctx.fill();
      }
      update();
      if (frame++ < 60) requestAnimationFrame(draw);
    }
    function update() {
      for (let i = 0; i < confetti.length; i++) {
        let c = confetti[i];
        c.y += c.d + Math.random() * 2;
        c.x += Math.sin(frame / 10 + i) * 1.5;
        c.tilt += Math.random() * 0.2 - 0.1;
        if (c.y > H) {
          c.y = Math.random() * -20;
          c.x = Math.random() * W;
        }
      }
    }
    draw();
  }

  // --- Language switching logic ---
  const translations = {
    en: {
      'nav.about': 'About Us',
      'nav.teachers': 'Our Teachers',
      'nav.classes': 'Our Classes',
      'nav.test': 'Take English Test',
      'classes.title': 'Our Classes',
      'classes.class1.title': 'First Flight (Ages 3–5)',
      'classes.class2.title': 'Power Up (Ages 6–12)',
      'classes.class3.title': 'Teen Class',
      'classes.class4.title': 'IELTS Class',
      'classes.class5.title': 'Adult Class',
      'classes.class6.title': 'Communication',
      'classes.class7.title': 'Business English',
      'classes.join': 'Join Class',
      'modal.title': 'Join Class',
      'modal.name': 'Name:',
      'modal.email': 'Email:',
      'modal.phone': 'Phone:',
      'modal.submit': 'Submit',
      'popup.success': 'Thank you! Our staff will contact you shortly.',
      'popup.close': 'Close',
    },
    vi: {
      'nav.about': 'Về Chúng Tôi',
      'nav.teachers': 'Giáo Viên',
      'nav.classes': 'Các Lớp Học',
      'nav.test': 'Làm Bài Kiểm Tra',
      'classes.title': 'Các Lớp Học',
      'classes.class1.title': 'First Flight (Ages 3–5)',
      'classes.class2.title': 'Power Up (Ages 6–12)',
      'classes.class3.title': 'Teen Class',
      'classes.class4.title': 'IELTS Class',
      'classes.class5.title': 'Adult Class',
      'classes.class6.title': 'Communication',
      'classes.class7.title': 'Business English',
      'classes.join': 'Đăng Ký Lớp',
      'modal.title': 'Đăng Ký Lớp',
      'modal.name': 'Họ và tên:',
      'modal.email': 'Email:',
      'modal.phone': 'Số điện thoại:',
      'modal.submit': 'Gửi',
      'popup.success': 'Cảm ơn bạn! Nhân viên của chúng tôi sẽ liên hệ với bạn sớm.',
      'popup.close': 'Đóng',
    }
  };

  const langButtons = document.querySelectorAll('.lang-btn');
  let currentLang = localStorage.getItem('language') || 'en';

  function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'BUTTON' || element.tagName === 'TEXTAREA') {
          element.value = translations[lang][key];
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });
  }

  // Set initial language
  updateLanguage(currentLang);

  // Add click event listeners to language buttons
  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      currentLang = lang;
      localStorage.setItem('language', lang);
      updateLanguage(lang);
      langButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
}); 