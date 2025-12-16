<template>
  <div id="app">
    <header>
      <AppHeader />
    </header>
    <main ref="horizontalMain">
      <AppHome />
      <AppAbout />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script>
import AppHeader from "./components/layout/Header.vue";
import AppFooter from "./components/layout/Footer.vue";
import AppHome from "./components/sections/Home.vue";
import AppAbout from "./components/sections/About.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppHome,
    AppAbout,
  },
  mounted() {
    const main = this.$refs.horizontalMain;
    const sections = main.children;
    let currentIndex = 0;
    let isScrolling = false;

    const scrollToSection = (index) => {
      if (index < 0 || index >= sections.length) return;

      isScrolling = true;
      currentIndex = index;

      main.scrollTo({
        left: sections[index].offsetLeft,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrolling = false;
      }, 700); // duración de la transición
    };

    main.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        if (isScrolling) return;

        if (e.deltaY > 0) {
          scrollToSection(currentIndex + 1);
        } else {
          scrollToSection(currentIndex - 1);
        }
      },
      { passive: false }
    );
  },
};
</script>

<style>
#app {
  header {
    position: fixed;
    top: 0;
    width: 100%;
  }
  main {
    margin-top: 12dvh;
    width: 100%;
    height: 84dvh;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
    scroll-behavior: smooth;
  }
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>
