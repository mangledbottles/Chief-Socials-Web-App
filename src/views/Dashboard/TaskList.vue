<template>
  <b-list-group flush data-toggle="checklist">
    <b-list-group-item class="px-0"
        v-for="item in items"
        :key="item.title"
    >
      <div class="checklist-item"
           :class="{'checklist-item-checked': item.done, [`checklist-item-${item.checkType}`]: item.checkType}">
        <div class="checklist-info">
          <h5 class="checklist-title mb-0">{{item.title}}</h5>
          <small>{{item.description}}</small>
        </div>
        <div>
          <b-form-checkbox v-model="item.done" :class="`custom-checkbox-${item.checkType}`" />
        </div>
      </div>
    </b-list-group-item>
  </b-list-group>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Call with Dave',
          description: '10:30 AM',
          done: true,
          checkType: 'success'
        },
        {
          title: 'Lunch meeting',
          description: '10:30 AM',
          done: false,
          checkType: 'warning'
        },
        {
          title: 'Argon Dashboard Launch',
          description: '10:30 AM',
          done: false,
          checkType: 'info'
        },
        {
          title: 'Winter Hackaton',
          description: '10:30 AM',
          done: true,
          checkType: 'danger'
        }
      ]
    };
  }
};
</script>
