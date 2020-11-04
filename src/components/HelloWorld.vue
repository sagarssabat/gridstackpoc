<template>
  <div class="container">
    <div class="draggables">
      <GridStackDragInItem data-gs-id="drag-item-1" data-gs-height="2">
        Hiii, Drag me
      </GridStackDragInItem>
      <GridStackDragInItem data-gs-id="drag-item-2" data-gs-height="2">
        Hiii, Drag me
      </GridStackDragInItem>
      <GridStackDragInItem data-gs-id="drag-item-3" data-gs-height="2">
        Hiii, Drag me
      </GridStackDragInItem>
    </div>
    <GridStack class="draghere" v-for="(items, i) in itemList" :key="i" @dropped="onDropped(i, $event)" :items.sync="itemList[i]">
      <GridStackItem v-for="(item, i) in items" :key="i" v-bind="item">
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
      itemList: [
        [
          { x: 0, y: 0, width: 2, height: 2, id: "item 1" },
          { x: 3, y: 1, width: 1, height: 2, id: "item 2" },
        ],
        [
          { x: 0, y: 0, width: 2, height: 2, id: "item 1" },
          { x: 5, y: 1, width: 1, height: 2, id: "item 2" },
        ],
      ],
    };
  },
  methods: {
    onDropped(i, item) {
      this.itemList[i].push(item);
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
