<template>
  <div class="notification-container" :class="classes">
    <transition-group name="list">
      <v-notification
        :id="`notification-${index}`"
        :key="item.timestamp.getTime()"
        :type="item.type"
        :title="item.title"
        :message="item.message"
        :actions="item.actions"
        :timestamp="item.timestamp"

        @close="remove(item.timestamp)"

        v-for="(item, index) in queue"
      ></v-notification>
    </transition-group>
  </div>
</template>

<script>
import VNotification from '../Notification';

export default {
  name: 'VNotificationContainer',
  props: {
    queue: {
      type: Array,
      default: () => [],
    },
    position: {
      type: String,
      default: 'top-right',
      validator(position) {
        return ['top-left', 'top-right', 'bottom-right', 'bottom-left'].indexOf(position) > -1;
      },
    },
  },
  computed: {
    classes() {
      return [
        `notification-container--${this.position}`,
      ];
    },
  },
  methods: {
    create(item) {
      const notificationItem = item;
      notificationItem.timestamp = new Date();
      notificationItem.timestamp
        .setMilliseconds(notificationItem.timestamp.getMilliseconds() + this.queue.length);
      this.queue.push(notificationItem);
    },
    remove(timestamp) {
      const indexToDelete = this.queue.findIndex(n => n.timestamp === timestamp);
      if (indexToDelete !== -1) {
        this.queue.splice(indexToDelete, 1);
      }
    },
  },
  components: { VNotification },
};
</script>

<style>
  .list-enter-active, .list-leave-active {
    transition: all .3s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
