<template>
  <div class="notification-container" :class="classes">
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
  .move-notification-appear, .move-notification-enter-active {
    animation-duration: .3s;
    animation-fill-mode: both;
    animation-play-state: paused
  }

  .move-notification-leave-active {
    animation-duration: .3s;
    animation-fill-mode: both;
    animation-play-state: paused
  }

  .move-notification-appear, .move-notification-enter-active {
    animation-name: moveNoticeIn;
    animation-play-state: running
  }

  .move-notification-leave-active {
    animation-name: moveNoticeOut;
    animation-play-state: running
  }

  .move-notification-appear, .move-notification-enter-active {
    opacity: 0;
    animation-timing-function: ease-in-out
  }

  .move-notification-leave-active {
    animation-timing-function: ease-in-out
  }

  @keyframes moveNoticeIn {
    0% {
      opacity: 0;
      transform-origin: 0 0;
      transform: translateX(100%)
    }
    100% {
      opacity: 1;
      transform-origin: 0 0;
      transform: translateX(0)
    }
  }

  @keyframes moveNoticeOut {
    0% {
      transform-origin: 0 0;
      transform: translateX(0);
      opacity: 1
    }
    70% {
      transform-origin: 0 0;
      transform: translateX(100%);
      height: auto;
      padding: 16px;
      margin-bottom: 10px;
      opacity: 0
    }
    100% {
      transform-origin: 0 0;
      transform: translateX(100%);
      height: 0;
      padding: 0;
      margin-bottom: 0;
      opacity: 0
    }
  }
</style>
