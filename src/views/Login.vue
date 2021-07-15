<template>
  <div>
    <form action="" class="flex flex-col w-1/2 items-center justify-center">
      <input
        class="inputField"
        type="email"
        placeholder="Your email"
        v-model="email"
      />
      <input
        class="inputField"
        type="password"
        placeholder="Your Password"
        v-model="password"
      />
      <button type="submit" class="bg-blue-300 px-10">login</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>