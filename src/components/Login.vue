<script setup>
import { onMounted } from 'vue';
import { Offcanvas } from 'bootstrap';

onMounted(() => {
  const offcanvasElement = document.getElementById('loginbutton');
  if (offcanvasElement) {
    new Offcanvas(offcanvasElement);
  }
});
</script>

<template>
  <!-- Login Button -->
  <button class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#loginbutton" aria-controls="loginbutton">
    Login
  </button>

  <!-- Offcanvas (Right Side) -->
  <div class="offcanvas offcanvas-end" id="loginbutton" aria-labelledby="loginbuttonLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="loginbuttonLabel">Sign In</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      
      <form>
        <!-- Email Feld -->
        <div class="mb-3">
          <label for="email" class="form-label">Email-Adresse/Benutzername</label>
          <input type="email" class="form-control" id="email" placeholder="deine Email" required>
        </div>

        <!-- Passwort Feld -->
        <div class="mb-3">
          <label for="password" class="form-label">Passwort</label>
          <input type="password" class="form-control" id="password" placeholder="dein Passwort" required>
        </div>

        <!-- Remember Me & Forgot Password -->
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="rememberMe">
            <label class="form-check-label" for="rememberMe">Eingeloggt bleiben</label>
          </div>
          <a href="#" class="text-decoration-none">Passwort vergessen?</a>
        </div>

        <!-- Sign-In Button -->
        <button type="submit" class="btn btn-primary w-100">Einloggen</button>

        <!-- Sign-Up Link -->
        <p class="mt-3 text-center">
          Noch kein YANO+? <a href="#" class="text-decoration-none">Registrieren</a>
        </p>
      </form>
      
    </div>
  </div>
</template>
