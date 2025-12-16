<template>
  <div id="header">
    <nav class="nav">
      <!-- LOGO -->
      <section class="nav-logo">
        <div class="logo-svg">
          <HtmxIcon style="fill: white" size="40px" />
        </div>
        <div class="logo-title">
          <h2>DevAndresGT</h2>
          <p>-TI Software and Hardware-</p>
        </div>

        <!-- BOTÓN HAMBURGUESA - SOLO EN MÓVIL -->
        <div class="menu-toggle" @click="toggleMenu">☰</div>
      </section>

      <!-- MENÚ (AHORA OCULTABLE) -->
      <section class="nav-lists" :class="{ open: isOpen }">
        <div class="buttons">
          <ul @click="closeMenuOnMobile">
            <li>
              <a href="#home">{{ $t("header.home") }}</a>
            </li>
            <li>
              <a href="#about">{{ $t("header.about") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("header.projects") }}</a>
            </li>
          </ul>
        </div>
        <div class="button-language">
          <button @click="setLanguage('es')">ES</button>
          <span>|</span>
          <button @click="setLanguage('en')">EN</button>
        </div>
      </section>
    </nav>
  </div>
</template>

<script>
import { HtmxIcon } from "vue3-simple-icons";

export default {
  name: "AppHeader",
  components: { HtmxIcon },

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    setLanguage(lang) {
      this.$i18n.locale = lang;
    },
    
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    
    closeMenuOnMobile() {
      // Cerrar el menú al hacer clic en un enlace (solo en móvil)
      if (window.innerWidth <= 1023) {
        this.isOpen = false;
      }
    },
    
    handleResize() {
      // Cerrar menú cuando se redimensione a desktop
      if (window.innerWidth > 1023) {
        this.isOpen = false;
      }
    },
  },
  
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style>
#header {
  background-color: rgba(0, 0, 0, 0.9);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  position: relative;
}

.nav-logo {
  display: flex;
  align-items: center;
  flex: 1;
}

.logo-title {
  margin-left: 10px;
  color: white;
  text-align: center;
}

.menu-toggle {
  display: none;
  font-size: 30px;
  color: white;
  cursor: pointer;
  z-index: 100;
}

.nav-lists {
  display: flex;
  align-items: center;
}

.buttons ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.buttons li {
  margin: 0 10px;
  padding: 5px;
}

.buttons a {
  color: white;
  text-decoration: none;
  font-size: 15px;
  border: none;
  background: none;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  position: relative;
  padding: 5px 0;
}

.buttons a::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background: #f44336;
  transition: 0.5s;
}

.buttons a:hover::before {
  width: 100%;
}

.button-language {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-left: 20px;
}

.button-language button {
  color: #bbb;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  padding: 5px 10px;
  transition: color 0.3s, background-color 0.3s;
}

.button-language button:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
}

.button-language span {
  color: #888;
  font-weight: bold;
}

/* ESCRITORIO (1024px y superior) */
@media (min-width: 1024px) {
  #header {
    border-radius: 20px;
    border: 1px solid rgba(1, 1, 255, 0.9);
    padding: 0 9px;
    margin: 10px 50px;
  }
  
  .menu-toggle {
    display: none !important;
  }
  
  .nav-lists {
    flex: 1;
    justify-content: space-between;
  }
}

/* MÓVIL (hasta 1023px) */
@media (max-width: 1023px) {
  #header {
    width: 100%;
    margin: 0;
    border-radius: 0;
    border: none;
    padding: 0;
  }
  
  .nav {
    flex-direction: column;
    padding: 10px;
  }
  
  .menu-toggle {
    display: block;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .nav-lists {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.95);
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 99;
    padding: 20px 0;
    margin-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .nav-lists.open {
    display: flex !important;
  }
  
  .buttons ul {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .buttons li {
    margin: 0;
    width: 100%;
    text-align: center;
  }
  
  .buttons a {
    display: block;
    padding: 10px 0;
  }
  
  .button-language {
    margin-top: 20px;
    margin-left: 0;
    justify-content: center;
  }
}
</style>