<script>
  import Navbar from '$lib/Navbar.svelte';
  import buyus from '$lib/assets/buyus.png';
  import quiz from '$lib/assets/quiz.png';
  import game from '$lib/assets/game.png';
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
  <section id="mascotte">
    <h2>Rencontrez Buyus</h2>
    <p class="mt-2 w-[80%] mx-auto">
      Notre mascotte sera là tout au long de votre expérience
    </p>

    <div class="mt-8 flex flex-wrap justify-center gap-8">
      <div class="w-48 p-4">
        <img src={buyus} alt="Buyus" width="128" class="mx-auto">
        <h3 class="mt-4 font-bold">Buyus</h3>
      </div>
    </div>
  </section>

  <section id="quiz" class="mt-16">
    <h2>Le système de quiz</h2>
    <p class="mt-2 w-[80%] mx-auto">
      Testez vos connaissances avec des questions adaptées à votre progression
    </p>
    <img
      src={quiz}
      alt="Aperçu du système de quiz"
      class="mt-6 mx-auto w-[68%] max-w-lg rounded-md shadow-lg"
    >
  </section>

  <section id="jeu" class="mt-16 mb-16">
    <h2>Le jeu</h2>
    <p class="mt-2 w-[80%] mx-auto">
      Partez à l'aventure avec Buyus et mettez en pratique ce que vous avez appris
    </p>
    <img
      src={game}
      alt="Aperçu du jeu"
      class="mt-6 mx-auto w-[68%] max-w-lg rounded-md shadow-lg"
    >
  </section>
</main>
