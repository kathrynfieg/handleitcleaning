<template>
  <div class="flex flex-col-reverse lg:flex-row gap-20 p-10 w-full">
    <div class="flex flex-col gap-6">
      <div>ADELAIDE HOME CLEANING</div>
      <h1 class="font-semibold text-5xl">
        Your trusted cleaning team in Adelaide
      </h1>

      <p>
        Adelaide-based cleaning team with over 25 years of experience, we bring
        years of expertise to every clean. Reclaim your time and get back to
        what you love — we'll handle the cleaning!
      </p>

      <div class="flex gap-4">
        <RouterLink to="booknow" class="hidden md:block">
          <v-btn>GET INSTANT QUOTE</v-btn>
        </RouterLink>
        <RouterLink to="our-services" class="hidden md:block">
          <v-btn>OUR SERVICES</v-btn>
        </RouterLink>
      </div>
    </div>

    <img src="../assets/photoshoot/DSC01667-compressed.JPG" class="w-full" />
  </div>
</template>
