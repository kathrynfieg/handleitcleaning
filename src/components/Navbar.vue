<script setup lang="ts">
const services = [
  { title: 'Routine House Cleaning', route: 'routine-residential-cleaning' },
  { title: 'End of Lease Cleaning', route: 'end-of-lease-cleaning' },
  { title: 'Deep Cleaning', route: 'deep-cleaning' },
];
</script>

<template>
  <nav
    class="flex items-center justify-between w-dvw py-2 pl-4 pr-6 bg-slate-300"
  >
    <RouterLink to="/">
      <img class="w-52" src="../assets/logos/logo-coloured.png" />
    </RouterLink>
    <ul class="flex gap-6">
      <li>
        <v-menu>
          <template v-slot:activator="{ props }">
            <div class="hover:cursor-pointer" v-bind="props">Our Services</div>
          </template>
          <v-list>
            <v-list-item
              v-for="(service, index) in services"
              :key="index"
              :value="index"
            >
              <RouterLink :to="service.route">
                {{ service.title }}
              </RouterLink>
            </v-list-item>
          </v-list>
        </v-menu>
      </li>
      <li><RouterLink to="faqs">FAQs</RouterLink></li>
      <li><RouterLink to="about-us">About</RouterLink></li>
      <li><RouterLink to="contact-us">Contact</RouterLink></li>
      <li><RouterLink to="sign-in">Sign in</RouterLink></li>
    </ul>
    <RouterLink to="booknow"><v-btn>GET INSTANT QUOTE</v-btn></RouterLink>
  </nav>
</template>
