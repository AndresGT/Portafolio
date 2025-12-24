<template>
  <div id="projects">
    <h3>{{ $t("projects.title") }}</h3>
    <section class="cont">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <div class="project-image">
          <img :src="project.image" :alt="project.name[$i18n.locale]" />
        </div>
        <h3>{{ project.name[$i18n.locale] }}</h3>
        <p>{{ project.description[$i18n.locale] }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import projectsData from "@/data/projects.json";

export default {
  name: "AppProjects",
  data() {
    return {
      projects: projectsData.projects,
    };
  },
  methods: {
    setLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style>
#projects {
  min-width: 100vw;
  height: 84dvh;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  color: white;
  text-align: center;
  padding: 2rem;
  h3 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  .cont {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.5rem;

    .project-card {
      border: 2px solid rgba(1, 1, 255, 0.9);
      border-radius: 30px;
      background-color: rgba(0, 0, 0, 1);
      .project-image {
        border-radius: 25px 25px 0 0;
        border-bottom: 1.5px solid white;
        height: 13rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 25px 25px 0 0;
        }
      }
    }
  }
}
</style>
