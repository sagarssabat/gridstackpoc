<template>
  <div class="grid-stack">
    <slot></slot>
  </div>
</template>
<script>
export default {
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
      minRow: 10, // don't collapse when empty
      cellHeight: 70,
      disableOneColumnMode: true,
      float: true,
      acceptWidgets: function () {
        return true;
      }, // function example, else can be simple: true | false | '.someClass' value
    };
    this.grid = this.$GridStack.init(options, this.$el);
    this.grid.on("added", (e, items) => {
      const onlyDraggedItems = items.filter((item) =>
        item.el.classList.contains("draggable-el")
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
        el: el,
      }));
      this.$emit("dropped", itemsToDispatch[0]);
      itemsToDispatch.forEach((item) => this.grid.removeWidget(item.el));
    });
  },
};
</script>