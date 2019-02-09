<template>
  <div id="push"
    @click="showNotification">
    Click me to get a push notification!
  </div>
</template>

<script>
export default {
  name: 'Push',
  methods: {
    showNotification: function() {
      Notification.requestPermission(function(result) {
        if (result === 'granted') {
          navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification('Vibration Sample', {
              body: 'Buzz! Buzz!',
              icon: './assets/logo.png',
              vibrate: [200, 100, 200, 100, 200, 100, 200],
              tag: 'vibration-sample'
            });
          });
        }
      });
    }
  },
}
</script>

<style>
#push {
  background-color: rgba(200, 200, 200, 0.6);
  padding: 2rem;
}
</style>
