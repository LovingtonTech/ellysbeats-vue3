<template>
  <div class="w-full flex justify-center items-center">
    <form @submit.prevent="" class="form">
      <h2 class="text-center mb-5 text-2xl text-bolder">Login</h2>
      <div class="input-field">
        <label for="email">Email</label>
        <input type="email" placeholder="Email" id="email" required />
      </div>
      <div class="input-field">
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" required />
      </div>
      <button class="btn">Login</button>
      <div class="text-center text-sm">
        <label for="">Don't have an account? </label>
        <router-link class="text-blue-700" to="./signup"
          >Create account</router-link
        >
      </div>
    </form>
  </div>
</template>
<style scoped>
.form {
  @apply my-20 border-3 shadow-xl rounded-xl px-6 py-8;
}
.input-field label {
  @apply w-full;
}
.input-field input {
  @apply w-full p-2 border-0 border-b-1 border-gray-400;
  @apply focus:(outline-0 ring-0 border-b-2 border-blue-300);
}
.btn {
  @apply w-full bg-blue-400 rounded-lg py-1 text-white text-bolder my-5;
}
</style>
