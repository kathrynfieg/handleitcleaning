<template>
  <footer class="bg-slate-800 text-white py-10 px-4 flex flex-col gap-8">
    <div class="flex flex-col gap-10 lg:flex-row lg:justify-between">
      <!-- Logo and Socials -->
      <div class="flex justify-between lg:flex-col">
        <div class="max-w-[450px]">
          <RouterLink to="/">
            <img class="w-52 mb-10" src="../assets/logos/logo-white.png" />
          </RouterLink>
          <p class="">
            Adelaide-based cleaning team with over 25 years of experience, we
            bring years of expertise to every clean. Reclaim your time and get
            back to what you love — we'll handle the cleaning!
          </p>
        </div>
        <div class="flex mt-10">
          <v-btn icon="mdi-facebook" color="white" variant="text"></v-btn>
          <v-btn icon="mdi-instagram" color="white" variant="text"></v-btn>
        </div>
      </div>

      <!-- Links -->
      <div class="flex flex-col md:flex-row w-full gap-6 justify-between">
        <div>
          <div class="font-semibold text-xl">Our contacts</div>
          <div class="flex flex-col gap-3 mt-5">
            <div class="flex gap-3">
              <v-icon color="white" icon="mdi-map"></v-icon>
              <div>Adelaide, South Australia</div>
            </div>
            <div class="flex gap-3">
              <v-icon color="white" icon="mdi-phone"></v-icon>
              <div>+ 61 492 934 582</div>
            </div>
            <div class="flex gap-3">
              <v-icon color="white" icon="mdi-email"></v-icon>
              <div>info@handleitcleaning.com.au</div>
            </div>
            <div class="flex gap-3">
              <v-icon color="white" icon="mdi-clock-time-five"></v-icon>
              <div>
                Our Working Hours<br />
                Mon - Fri: 8 am - 6 pm
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="font-semibold text-xl">Useful Links</div>
          <div class="flex flex-col gap-3 mt-5">
            <RouterLink to="booknow">Book Online</RouterLink>
            <RouterLink to="our-services">Our Services & Pricing</RouterLink>
            <RouterLink to="contact-us">Contact Us</RouterLink>
            <RouterLink to="faqs">FAQs</RouterLink>
          </div>
        </div>

        <div>
          <div class="font-semibold text-xl">Extra Links</div>
          <div class="flex flex-col gap-3 mt-5">
            <RouterLink to="sign-in">Sign In</RouterLink>
            <RouterLink to="join-us">Join Us</RouterLink>
            <img class="w-20 mb-10" src="../assets/south-au.png" />
          </div>
        </div>
      </div>
    </div>

    <hr />

    <!-- Privacy -->
    <div class="text-center">
      <RouterLink to="terms-and-conditions">Terms and Conditions | </RouterLink>
      <RouterLink to="privacy-policy">Privacy Policy</RouterLink>
      <div>© Handleit Cleaning. All Rights Reserved 2024</div>
    </div>
  </footer>
</template>
