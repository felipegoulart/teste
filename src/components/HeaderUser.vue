<template>
  <header 
    class="h-20 w-full py-2 pb-6 px-6 flex justify-between items-center"
  >
    <p class="text-gray-500">Mensagem motivacional show de bola.</p>

    <div class="flex items-center space-x-2">
      <h2 class="text-gray-600 text-lg font-bold">Usuário</h2>
      <span class="bg-blue-400 p-3 w-8 h-8 rounded-full flex justify-center items-center">
        <h2 class="text-white text-xl uppercase">U</h2>
        <img src="" alt="" v-show="false">
      </span>
    </div>
  </header>
</template>

<script>


export default {
  name: 'HeaderUser'
}
</script>

<style scoped>

</style>