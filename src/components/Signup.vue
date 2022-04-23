<template>
  <div class="w-full flex justify-center items-center">
    <form @submit.prevent="" class="form">
      <h2 class="text-center mb-5 text-2xl text-bolder">Create Account</h2>
      <div class="input-row">
        <div class="input-field">
          <label for="firstname">Firstname</label>
          <input type="text" placeholder="Firstname" id="firstname" required />
        </div>
        <div class="input-field">
          <label for="lastname">Lastname</label>
          <input type="text" placeholder="Lastname" id="lastname" required />
        </div>
      </div>
      <div class="input-field">
        <label for="email">Email</label>
        <input type="email" placeholder="Email" id="email" required />
      </div>
      <div class="input-row">
        <div class="input-field">
          <label for="new-password">New Password</label>
          <input
            type="password"
            placeholder="Password"
            id="new-password"
            required
          />
        </div>
        <div class="input-field">
          <label for="re-password">Retype Password</label>
          <input
            type="password"
            placeholder="Password"
            id="re-password"
            required
          />
        </div>
      </div>
      <button class="btn">Signup</button>
      <div class="text-center text-sm">
        <label for="">Already have an account? </label>
        <router-link class="text-blue-700" to="./login">Login</router-link>
      </div>
    </form>
  </div>
</template>
<style scoped>
.form {
  @apply my-20 border-3 shadow-xl rounded-xl px-6 py-8;
}
.input-row {
  @apply sm:(flex space-x-5);
  .input-field {
    @apply sm:w-1/2;
  }
}
.input-field label {
  @apply w-full;
}
.input-field input {
  @apply w-full p-2 border-b-2 border-none;
  @apply focus:(outline-none border-b-2 border-blue-300);
}
.btn {
  @apply w-full bg-blue-400 rounded-lg py-1 text-white text-bolder my-5;
}
</style>
