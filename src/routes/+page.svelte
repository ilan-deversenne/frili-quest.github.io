<script>
  import Navbar from '$lib/Navbar.svelte';
  import buyus from '$lib/assets/buyus.png';
</script>

<Navbar />

<header class="py-12 text-center wave">
  <h1 class="mb-4">FriLi Quest</h1>
  <p class="w-[80%] mx-auto font-bold text-lg">
    On ne peut pas arrêter les vagues mais on peut apprendre à les surfer
  </p>

  <div class="pt-12 pb-32 flex gap-4 justify-center items-center text-sm">
    <a href="#learn-more" class="font-bold">En savoir plus</a>
    <a href="/register" class="p-3 bg-[var(--secondary)] text-white rounded-sm">Commencez maintenant</a>
  </div>
</header>

<main id="learn-more" class="text-center md:mt-[-256px]">
  <h2>Rencontrez Buyus et MiLi</h2>
  <p class="mt-2 w-[80%] mx-auto">
    Nos mascottes seront là tout au long de votre expérience
  </p>

  <h2 class="mt-6">Buyus</h2>
  <img src={buyus} alt="Buyus" width="128" class="mt-4 mx-auto">
</main>
