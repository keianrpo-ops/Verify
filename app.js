// ---- Login simple ----
const loginScreen = document.getElementById('login-screen');
const mainLayout = document.getElementById('main-layout');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');

loginBtn.addEventListener('click', () => {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert('Por favor ingresa correo y contraseña.');
    return;
  }

  loginScreen.classList.add('hidden');
  mainLayout.classList.remove('hidden');
});

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    mainLayout.classList.add('hidden');
    loginScreen.classList.remove('hidden');
  });
}

// ---- Navegación sidebar ----
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const views = document.querySelectorAll('.view');

sidebarLinks.forEach((btn) => {
  btn.addEventListener('click', () => {
    const viewName = btn.getAttribute('data-view');
    if (!viewName) return;

    sidebarLinks.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    views.forEach((view) => {
      if (view.id === `view-${viewName}`) {
        view.classList.add('view-active');
      } else {
        view.classList.remove('view-active');
      }
    });
  });
});

// ---- Botones "Generar Certificado" (simulación) ----
const logMessages = document.getElementById('log-messages');

function appendLog(message) {
  if (!logMessages) return;
  const p = document.createElement('p');
  const time = new Date().toLocaleTimeString();
  p.textContent = `[${time}] ${message}`;
  logMessages.appendChild(p);
}

document.querySelectorAll('.btn-generate').forEach((btn) => {
  btn.addEventListener('click', () => {
    const cert = btn.getAttribute('data-cert');
    if (!cert) return;

    appendLog(
      `Generar certificado: ${cert.toUpperCase()} (aún sin conectar a plantillas).`
    );
  });
});
