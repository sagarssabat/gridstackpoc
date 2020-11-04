<template>
  <div class="grid-stack">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array
    }
  },
  data: function () {
    return {
      grid: null,
    };
  },
  updated() {
    const newElements = this.$slots.default.filter(
      (el) => !el.elm.classList.contains("ui-draggable")
    );
    newElements.forEach((Vnode) => {
      this.grid?.makeWidget(Vnode.elm);
    });
  },
  mounted() {
    var options = {
      column: 12,
      minRow: 5, // don't collapse when empty
      cellHeight: 70,
      disableOneColumnMode: true,
      float: false,
      acceptWidgets: function () {
        return true;
      }, // function example, else can be simple: true | false | '.someClass' value
    };
    this.grid = this.$GridStack.init(options, this.$el);
    this.grid.on("added", (e, items) => {
      // debugger
      const onlyDraggedItems = items.filter(() =>
        true
      );
      const itemsToDispatch = onlyDraggedItems.map(({ el }) => ({
        id: el.attributes["data-gs-id"]?.value,
        x: el.attributes["data-gs-x"]?.value,
        y: el.attributes["data-gs-y"]?.value,
        width: el.attributes["data-gs-width"]?.value,
        maxWidth: el.attributes["data-gs-maxWidth"]?.value,
        locked: el.attributes["data-gs-locked"]?.value,
        noResize: el.attributes["data-gs-noResize"]?.value,
        noMove: el.attributes["data-gs-noMove"]?.value,
        resizeHandles: el.attributes["data-gs-resizeHandles"]?.value,
        height: el.attributes["data-gs-height"]?.value,
        el: el,
      }));
      itemsToDispatch.forEach((item) => this.grid.removeWidget(item.el));
      if (itemsToDispatch.length > 0) this.$emit("dropped", itemsToDispatch[0]);
    });
    this.grid.on('removed', () =>  this.updateItems())
    this.grid.on('change', () =>  this.updateItems())
  },
  methods: {
    updateItems() {
      const newItems = this.grid.save()
      this.$emit('update:items', newItems)
    }
  }
};
</script>