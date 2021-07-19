<template>
  <div>
    <h1>Welcome to our Dashboard Page</h1>
    <button @click.prevent="signOut">Sign out</button>
    <p>Welocome: {{ userEmail }}</p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();

    const userEmail = computed(() => store.state.user);

     const signOut = () => {
      store.dispatch("signOutAction");
    };
    return {
      signOut,
      userEmail,
    };
  },
};
</script>

<style>
</style>