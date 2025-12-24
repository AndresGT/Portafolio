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
  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  opacity: 0.7;
  color: wheat;
}
</style>
