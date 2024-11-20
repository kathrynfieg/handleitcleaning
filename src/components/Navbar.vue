<script setup lang="ts">
import { ref } from 'vue';

const services = [
  { title: 'Routine House Cleaning', route: 'routine-residential-cleaning' },
  { title: 'End of Lease Cleaning', route: 'end-of-lease-cleaning' },
  { title: 'Deep Cleaning', route: 'deep-cleaning' },
];

const drawer = ref(null);
</script>

<template>
  <nav
    class="flex items-center justify-between w-dvw py-2 pl-4 pr-6 sticky top-0 bg-slate-300"
  >
    <RouterLink to="/">
      <img class="w-40 lg:w-52" src="../assets/logos/logo-coloured.png" />
    </RouterLink>
    <ul class="gap-6 hidden lg:flex">
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

    <div class="flex gap-2 items-center">
      <RouterLink to="booknow" class="hidden md:block">
        <v-btn>GET INSTANT QUOTE</v-btn>
      </RouterLink>

      <v-layout>
        <v-navigation-drawer v-model="drawer" temporary>
          <div class="p-4 flex flex-col gap-8">
            <RouterLink to="/">
              <img
                class="w-40 lg:w-52"
                src="../assets/logos/logo-coloured.png"
              />
            </RouterLink>
            <ul class="flex flex-col gap-4">
              <li>
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <div class="hover:cursor-pointer" v-bind="props">
                      Our Services
                    </div>
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

            <RouterLink to="booknow" class="hidden md:block">
              <v-btn>GET INSTANT QUOTE</v-btn>
            </RouterLink>
          </div>
        </v-navigation-drawer>

        <v-btn
          class="ma-2"
          icon="mdi-menu"
          variant="text"
          @click.stop="drawer = !drawer"
        />
      </v-layout>
    </div>
  </nav>
</template>
