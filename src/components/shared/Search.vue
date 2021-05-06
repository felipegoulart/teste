<template>
  <label
    for="search"
    class="bg-white text-gray-500 min-w-full p-2 px-3 flex items-center justify-between border-2 border-gray-200 duration-200 focus-within:shadow-lg rounded-full cursor-pointer"  
  >
    <font-awesome-icon
      :icon="icons.search"
      class="mr-2 hover:text-gray-800"
    />
    <input 
      type="text"
      class="w-full outline-none"
      id="search" 
      :placeholder="placeholder"
      v-model="search"
    >
    <font-awesome-icon
      :icon="icons.clear"
      class="ml-2 hover:text-gray-800"
      @click="clearSearch"
      v-show="!!this.search.trim()"
    />
  </label>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    placeholder: {
      type: String,
      default: 'O que você está buscando?',
      required: false
    },
  },

  data() {
      return {
        search: '',
        icons: {
          search: faSearch,
          clear: faTimes,
        }
      }
  },

  methods: {
    clearSearch() {
      this.search = ''
    }
  },

  components: {
    FontAwesomeIcon
  },
}
</script>

<style>
</style>