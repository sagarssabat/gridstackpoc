<template>
  <div
    class="grid-stack-item"
    :data-gs-x="x"
    :data-gs-y="y"
    :data-gs-width="width"
    :data-gs-height="height"
    :data-gs-id="id"
  >
    <div class="grid-stack-item-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        x: {
            type: Number,
            required: true
        },
        y: {
            type: Number,
            required: true
        },
        width: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    }
}
</script>