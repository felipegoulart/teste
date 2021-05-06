<template>
  <ul 
    class="text-gray-400 font-medium flex m-2 mb-0"
  >
    <li 
      class="mr-6 flex items-baseline cursor-pointer hover:text-gray-800 relative"
      v-for="filter of filters"
      :key="filter"
    >
    {{ filter }}
    <font-awesome-icon :icon="arrowDown" 
      class="ml-2"
    />
    </li>
  </ul>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'


export default {
  name: 'Filters',

  props: {
    filters: {
      type: Array,
      required: true
    },
  },

  data() {
      return {
        arrowDown: faSortDown,
      }
  },

  components: {
    FontAwesomeIcon
  },
}
</script>