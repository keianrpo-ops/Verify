// LOGIN
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
  appendLog('Inicio de sesión correcto (modo demo).');
});

logoutBtn.addEventListener('click', () => {
  mainLayout.classList.add('hidden');
  loginScreen.classList.remove('hidden');
  appendLog('Sesión cerrada.');
});

// FLUJO LATERAL (PAÍS / OPCIONES)

const stepCountry = document.getElementById('step-country');
const stepColombia = document.getElementById('step-colombia');

const viewStart = document.getElementById('view-start');
const viewCCC = document.getElementById('view-ccc');
const viewSanidad = document.getElementById('view-sanidad');

function setActiveView(view) {
  [viewStart, viewCCC, viewSanidad].forEach((v) => {
    if (v === view) {
      v.classList.add('view-active');
    } else {
      v.classList.remove('view-active');
    }
  });
}

function setFlowStep(step) {
  [stepCountry, stepColombia].forEach((s) => {
    if (s === step) {
      s.classList.add('flow-step-active');
    } else {
      s.classList.remove('flow-step-active');
    }
  });
}

// Países
document.querySelectorAll('.btn-country').forEach((btn) => {
  btn.addEventListener('click', () => {
    const country = btn.getAttribute('data-country');

    if (country === 'colombia') {
      setFlowStep(stepColombia);
      setActiveView(viewStart);
      appendLog('País seleccionado: Colombia.');
    } else {
      setActiveView(viewStart);
      appendLog(`País seleccionado: ${country}. (Aún sin opciones configuradas)`);
    }
  });
});

// Volver a países
const btnVolver = document.getElementById('btn-volver');
btnVolver.addEventListener('click', () => {
  setFlowStep(stepCountry);
  setActiveView(viewStart);
  appendLog('Volvió al selector de país.');
});

// Opciones Colombia
const btnCamara = document.getElementById('btn-camara');
const btnSanidad = document.getElementById('btn-sanidad');

btnCamara.addEventListener('click', () => {
  setActiveView(viewCCC);
  appendLog('Abrió formulario Cámara de Comercio (Colombia).');
});

btnSanidad.addEventListener('click', () => {
  setActiveView(viewSanidad);
  appendLog('Abrió pantalla Sanidad (placeholder).');
});

// FORMULARIO CCC

const btnCancelCCC = document.getElementById('btn-ccc-cancel');
const btnSubmitCCC = document.getElementById('btn-ccc-submit');

btnCancelCCC.addEventListener('click', () => {
  // Limpia campos básicos y vuelve al mensaje de inicio
  document.querySelectorAll('#view-ccc .input-flat').forEach((input) => {
    input.value = '';
  });
  setActiveView(viewStart);
  appendLog('Canceló el formulario de Cámara de Comercio.');
});

btnSubmitCCC.addEventListener('click', (e) => {
  e.preventDefault();

  const data = {
    razonSocial: document.getElementById('razonSocial').value.trim(),
    nit: document.getElementById('nit').value.trim(),
    ciudad: document.getElementById('ciudad').value.trim(),
    representante: document.getElementById('representante').value.trim(),
    cedulaRep: document.getElementById('cedulaRep').value.trim(),
    fecha: document.getElementById('fecha').value,
    matricula: document.getElementById('matricula').value.trim(),
    grupoNiif: document.getElementById('grupoNiif').value.trim(),
    domicilio: document.getElementById('domicilio').value.trim(),
    departamento: document.getElementById('departamento').value.trim(),
    correo: document.getElementById('correo').value.trim(),
    telefono: document.getElementById('telefono').value.trim(),
  };

  // Aquí solo simulamos: mostramos en el log.
  appendLog(
    `Datos CCC guardados (simulado): ${data.razonSocial} – NIT ${data.nit} – Matrícula ${data.matricula}.`
  );

  alert('Datos de Cámara de Comercio capturados (simulado).\nMás adelante aquí generaremos el PDF real.');
});

// LOG

const logMessages = document.getElementById('log-messages');

function appendLog(message) {
  if (!logMessages) return;
  const p = document.createElement('p');
  const time = new Date().toLocaleTimeString();
  p.textContent = `[${time}] ${message}`;
  logMessages.appendChild(p);
}
