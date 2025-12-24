<template>
  <div id="app">
    <header>
      <AppHeader />
    </header>

    <main ref="horizontalMain">
      <AppHome />
      <AppAbout />
      <AppProjects />
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
import AppProjects from "./components/sections/Projects.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppHome,
    AppAbout,
    AppProjects,
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
      }, 700);
    };

    main.addEventListener(
      "wheel",
      (e) => {
        const currentSection = sections[currentIndex];

        const canScrollDown =
          currentSection.scrollTop + currentSection.clientHeight <
          currentSection.scrollHeight;

        const canScrollUp = currentSection.scrollTop > 0;

        // Si la sección aún puede hacer scroll vertical, no interceptamos
        if (
          (e.deltaY > 0 && canScrollDown) ||
          (e.deltaY < 0 && canScrollUp)
        ) {
          return;
        }

        // Si no puede scrollear más, cambiamos de página
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
* {
  font-family: "Noto Sans", sans-serif;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

#app {
  height: 100vh;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 12dvh;
  z-index: 10;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4dvh;
  z-index: 10;
}

main {
  margin-top: 12dvh;
  height: 84dvh;

  display: flex;
  flex-direction: row;

  overflow-x: auto;
  overflow-y: hidden;

  scrollbar-width: none;
  -ms-overflow-style: none;
}

main::-webkit-scrollbar {
  display: none;
}
</style>
