<template>
  <div id="about">
    <section class="info">
      <div class="title">
        <h2>{{ $t("about.info-title") }}</h2>
        <p>{{ $t("about.info-description") }}</p>
      </div>
    </section>
    <section class="card">
      <div class="card-svg">
        <CoderIcon style="fill: white" size="30px" />
      </div>
      <div class="card-footer">
        <p class="card-title">全栈开发人员</p>
      </div>
    </section>
  </div>
</template>
<script>
import { CoderIcon } from "vue3-simple-icons";

export default {
  name: "AppAbout",
  components: {
    CoderIcon,
  },
  methods: {
    setLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
<style>
#about {
  min-width: 100vw;
  height: 100%;
  scroll-snap-align: start;
  color: white;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
  .info {
    margin: 15vh 0;
    width: 30vw;
    h2 {
        text-align: center;
      margin-bottom: 10vh;
    }
    p{
        text-align: justify;

    }
  }
  .card {
    width: 70vh;
    height: 40vh;
    border-radius: 50px;
    background-color: rgb(0, 0, 0, 0.9);
    border: 2px solid gray;
    padding: 16px 16px;
  }
}
</style>
