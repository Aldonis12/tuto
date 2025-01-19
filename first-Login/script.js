document.getElementById('register-link').addEventListener('click', function () {
    switchForm('register-form', 'Créer un compte');
  });
  
  document.getElementById('login-link').addEventListener('click', function () {
    switchForm('login-form', 'Connexion');
  });
  
  document.getElementById('forget-password-link').addEventListener('click', function () {
    switchForm('forgot-password-form', 'Réinitialiser le mot de passe');
  });
  
  document.getElementById('back-to-login').addEventListener('click', function () {
    switchForm('login-form', 'Connexion');
  });
  
function switchForm(formId, title) {
    const activeForm = document.querySelector('.form.active');
    const newForm = document.getElementById(formId);
  
    if (activeForm) {
      activeForm.classList.remove('active');
      activeForm.style.opacity = 0;
    }
  
    setTimeout(() => {
      if (activeForm) activeForm.style.display = 'none';
      newForm.style.display = 'block';
      newForm.style.opacity = 1;
      newForm.classList.add('active');
      document.getElementById('form-title').textContent = title;
    }, 500);
  }
  
  document.getElementById('password-register').addEventListener('input', function () {
    const password = this.value;
    const passwordError = document.getElementById('password-error');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!passwordRegex.test(password)) {
      passwordError.style.display = 'block';
      passwordError.textContent = "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.";
    } else {
      passwordError.style.display = 'none';
    }
  });
  
  document.getElementById('confirm-password-register').addEventListener('input', function () {
    const password = document.getElementById('password-register').value;
    const confirmPassword = this.value;
    const confirmPasswordError = document.getElementById('confirm-password-error');
  
    if (password !== confirmPassword) {
      confirmPasswordError.style.display = 'block';
      confirmPasswordError.textContent = "Les mots de passe ne correspondent pas.";
    } else {
      confirmPasswordError.style.display = 'none';
    }
  });
  