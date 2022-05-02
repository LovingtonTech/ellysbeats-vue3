<template>
  <div class="navbar flex justify-between p-3 items-center bg-blue-100">
    <div @click="toggleDropdown" class="navtoggle sm:hidden">
      <fa icon="bars" v-if="!dropdown" />
      <fa icon="times" v-if="dropdown" />
    </div>
    <div class="text-xl">TopGladz</div>
    <nav
      class="navlinks hidden sm:block space-x-3"
      :class="{ dropdownNav: dropdown }"
    >
      <router-link to="./">Home</router-link>
      <router-link to="./products">Buy Products</router-link>
      <router-link to="./contacts">Contact us</router-link>
      <router-link to="./login">Login</router-link>
    </nav>
    <div class="flex space-x-3 text-lg">
      <div
        class="
          item-center
          shadow
          rounded-lg
          p-2
          bg-orange-500
          text-bold text-white text-xl
        "
        @click="openCart"
      >
        <fa icon="cart-plus" />
        0 items
      </div>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue';

const dropdown = reef(false);
const toggleDropdown = () => {
  dropdown = !dropdown;
};
</script>

<!-- // // import { MenuIcon, XIcon, ShoppingCartIcon } from "@heroicons/vue/solid";
// export default {
//   // components: { MenuIcon, XIcon, ShoppingCartIcon },
//   mounted() {
//     console.log('Mounted');
//     window.addEventListener('resize', this.resetDropdown);
//     window.addEventListener('scroll', this.resetDropdown);
//     this.resetDropdown;
//     const links = document.querySelectorAll('a');
//     links.forEach((link) => link.addEventListener('click', this.resetDropdown));
//   },
//   data() {
//     return {
//       dropdown: false,
//     };
//   },
//   methods: {
//     resetDropdown() {
//       this.dropdown = false;
//     },
//     toggleDropdown() {
//       this.dropdown = !this.dropdown;
//       console.log(this.dropdown);
//     },
//     openCart() {
//       alert('This is a cart');
//       console.log('Cart open');
//       this.$router.push('/login');
//     },
//   },
// }; -->

<style scoped>
.navlinks a {
  @apply hover:(border-b-blue-500  border-3 text-xl);
}
/* .navlinks {
	@apply sm:(flex flex-row px-4 justify-between) hidden;
}
.navlinks a {
	@apply p-3 hover:bg-blue-400 hover:text-white;
}
a.nuxt-link-exact-active {
	@apply bg-blue-400 text-white;
}
.navtoggle {
	@apply sm:(hidden);
}

.dropdownNav {
	@apply flex flex-col h-full left-0 top-0 fixed;
	@apply bg-blue-300 text-center;
}
.dropdownNav a {
	@apply w-full;
} */
</style>
