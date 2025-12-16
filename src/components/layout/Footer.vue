<template>
  <div id="footer">
    <section>
      <h3>© {{ new Date().getFullYear() }} DevAndresGT</h3>
    </section>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  components: {},
};
</script>

<style>
#footer {
  font-size: 0.85rem;
  font-weight: 400;
  opacity: 0.7;
  color: wheat;
}
</style>
