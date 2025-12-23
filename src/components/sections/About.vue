<template>
  <div id="about">
    <section class="info">
      <div class="title">
        <h2>{{ $t("about.info-title") }}</h2>
        <p>{{ $t("about.info-description") }}</p>
      </div>
    </section>
    <section class="card">
      <div class="card-header">
        <div class="card-logo">
          <img src="../../assets/imgs/logo.png" />
        </div>
        <div class="card-title">
          <h3>DevAndresGT</h3>
          <p>{{ $t("about.card-description") }}</p>
        </div>
      </div>
      <div class="card-footer">
        <h5>{{ $t("about.card-tag") }}</h5>
        <p>{{ $t("about.card-footer") }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AppAbout",
  components: {},
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
    p {
      text-align: justify;
    }
  }
  .card {
    margin: 15vh 0;
    width: 70vh;
    height: 40vh;
    border-radius: 50px;
    background-color: rgb(0, 0, 0, 0.9);
    border: 2px solid gray;
    padding: 16px 16px;
    .card-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      .card-logo{
          img {
            width: 20vh;
          }
      }
      .card-title {
        margin-left: 50px;
        text-align: center;
        h3{
            font-size: 2rem;
            font-weight: bold;
        }
      }
    }
    .card-footer {
      margin: 20px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      h5 {
        text-align: center;
        margin-bottom: 20px;
      }
      p {
        text-align: justify;
      }
    }
  }
}
</style>
