<template>
  <div class="container">
    <div class="draggables">
      <GridStackDragInItem data-gs-id="drag-item-1"> Hiii, Drag me </GridStackDragInItem>
      <GridStackDragInItem data-gs-id="drag-item-2"> Hiii, Drag me </GridStackDragInItem>
      <GridStackDragInItem data-gs-id="drag-item-3"> Hiii, Drag me </GridStackDragInItem>
    </div>
    <GridStack class="draghere" @dropped="onDropped">
      <GridStackItem v-for="item in items" :key="item.id" v-bind="item">
        <p>Hiii {{ item.id }}</p>
      </GridStackItem>
    </GridStack>
  </div>
</template>

<script>
import GridStack from "./GridStack.vue";
import GridStackDragInItem from "./GridStackDragInItem.vue";
import GridStackItem from "./GridStackItem.vue";

export default {
  name: "HelloWorld",
  components: {
    GridStack,
    GridStackDragInItem,
    GridStackItem,
  },
  props: {
    msg: String,
  },
  data: function () {
    return {
      items: [
        { x: 0, y: 0, width: 2, height: 2, id: "item 1" },
        { x: 3, y: 1, width: 1, height: 2, id: "item 2" },
      ],
    };
  },
  mounted() {
    this.items.push({ x: 5, y: 1, width: 1, height: 2, id: "item 3" });
  },
  methods: {
    onDropped(item) {
      this.items.push(item);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dragstart {
  display: flex;
}
.dragme {
  flex: 1;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgreen;
  cursor: pointer;
}

.dragme + .dragme {
  margin-left: 10px;
}

.draggables {
  display: flex;
}
.grid-stack-item {
  background-color: lightgreen;
}
.grid-stack-item + .grid-stack-item {
  margin-left: 10px;
}

.draghere {
  background-color: lemonchiffon;
  /* height: 400px; */
}

.grid-stack-item-content {
  padding: 15px 30px;
  height: 50px;
}
</style>
