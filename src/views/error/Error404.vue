<template>
  <div class="bg-gray-100 flex flex-col justify-center items-center h-screen w-full">
    <h1 class="text-gray-900 font-sans text-4xl font-extrabold mb-4">Página não encontrada :(</h1>
    <img
      src="@/assets/img/error404.gif" alt="Tô perdido" class="rounded-4xl">
    <h2 class="text-gray-700 font-sans text-xl font-bold mt-4">Acho que me perdi!</h2>
    <button
      class="bg-gradient-to-r from-green-water-100 to-green-water-200 w-60 px-4 py-1 mt-4 rounded-full  outline-none text-white font-semibold text-xl transform hover:-translate-y-0.5 hover:shadow-xl duration-100 disabled:opacity-50"
      @click="voltar"
    >
    Voltar
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    voltar() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>

