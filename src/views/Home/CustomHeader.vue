<template>
  <header class="flex justify-center w-full h-[700px] bg-brand-main">
    <div class="header-group">
      <div class="flex items-center justify-between py-10">
        <div class="w-28 lg:w-36">
          <img class="w-full" src="../../assets/images/logo_white.png" alt="logo" />
        </div>
        <div class="flex">
          <button
            class="px-6 py-2 font-bold rounded-full text-white focus:outline-line hover:text-black"
          >
            Crie uma conta
          </button>
          <button
            class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-line hover:text-black"
          >
            Entrar
          </button>
        </div>
      </div>
      <div>
        <div class="flex flex-col mt-28">
          <h1 class="text-4xl font-black text-white">
            Tenha um feedback. <br />
            E faça seus clientes mais
            <br />
            felizes!
          </h1>
          <p class="text-lg font-medium text-white">
            Receba ideias, reclamações e feedbacks com um<br />
            simples widget na página.
          </p>
          <div>
            <button
              class="px-6 py-2 mt-10 font-bold bg-white text-brand-main rounded-full hover:text-black"
            >
              Crie uma conta grátis
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header-group {
  @apply flex flex-col w-4/5 max-w-6xl;
}

@media (min-width: 640px) {
  .header-group {
    background-image: url(../../assets/images/blue_balloons.png);
    background-size: 628px;
    background-repeat: no-repeat;
    background-position: 90% 100%;
  }
}
</style>
