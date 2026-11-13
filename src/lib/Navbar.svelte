<script lang="ts">
  import { onMount } from 'svelte'
  import logo from '$lib/assets/logo.png'
  import hamburger from '$lib/assets/hamburger.png'
  import { isLoggedIn, signout } from '../routes/login/login';

  let opened: boolean = $state(false)
  let loggedIn = $state(false)

  onMount(async () => {
    loggedIn = await isLoggedIn()
  })

  function hamburgermenu() {
    opened = !opened
  }

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '#learn-more', label: 'Mascottes' },
    { href: '/', label: 'FAQ' },
  ]
</script>

<nav class="p-4 bg-(--nav) {opened ? 'bg-(--secondary) fixed top-0 z-20 w-full' : ''}">
  <ul class="flex justify-between items-center">
    <li>
      <a href="/"><img src={logo} alt="Logo" width="42" height="42"></a>
    </li>
    <li class="md:hidden">
      <button
        type="button"
        class="cursor-pointer"
        onclick={hamburgermenu}
        aria-label="Menu"
      >
        <img src={hamburger} alt="" width="24" height="24">
      </button>
    </li>

    <li class="hidden md:flex items-center gap-6 text-lg font-bold">
      {#each links as link}
        <a href={link.href}>{link.label}</a>
      {/each}

      {#if !loggedIn}
        <a href="/login">Connexion</a>
        <a href="/register" class="p-3 px-6 bg-[var(--purple)] rounded-sm text-white">Inscription</a>
      {:else}
        <button class="p-3 px-6 bg-red-600 rounded-sm text-white hover:cursor-pointer" onclick={signout}>Se déconnecter</button>
      {/if}
    </li>
  </ul>
</nav>

{#if opened}
  <div class="z-10 navwave fixed w-full h-95 top-[72px]">
    <ul class="mt-10 flex flex-col gap-4 text-xl text-center font-bold">
      {#each links as link}
        <li><a href={link.href} onclick={() => opened = false}>{link.label}</a></li>
      {/each}
    </ul>
    {#if !loggedIn}
      <ul class="mt-26 flex flex-col gap-6 text-center font-bold">
        <li><a href="/login">Connexion</a></li>
        <li><a href="/register" class="p-3 px-6 bg-[var(--purple)] rounded-sm text-white">Inscription</a></li>
      </ul>
    {:else}
      <ul class="mt-26 flex flex-col gap-6 text-center font-bold">
        <li><button class="p-3 px-6 bg-red-600 rounded-sm text-white" onclick={signout}>Se déconnecter</button></li>
      </ul>
    {/if}
  </div>
{/if}
