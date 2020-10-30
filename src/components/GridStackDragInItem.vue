<template>
  <div class="grid-stack-item draggable-el">
    <div class="grid-stack-item-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$jQuery(this.$el).draggable({
      revert: "invalid",
      scroll: false,
      appendTo: "body",
      helper: "clone",
    });
  },
};
</script>