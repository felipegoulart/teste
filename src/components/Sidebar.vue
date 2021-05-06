<template>
  <nav 
    class="bg-gray-100 shadow-2xl max-h-full w-72 py-6 flex flex-col items-center justify-between"
  >
    <Logo
      class="flex-shrink w-44"
    />
    <ul class="h-full w-full pt-6">
      <li
        class="relative flex items-center pl-4"
        v-for="itemMenu in itemsMenu"
        :key="itemMenu.name"
      >
        <router-link
          :to="{ name: itemMenu.name }"
          v-slot="{ href, navigate, isActive }"
          custom
        >
          <a 
            :href="href"
            @click="navigate"
            class="group flex flex-row m-2 items-center text-gray-400 hover:text-yellow-500 font-bold"
          >
            <span 
              class="w-8 h-8 mr-3 flex items-center justify-center text-center group-hover:bg-yellow-500 group-hover:text-white rounded-lg"
              :class="[ isActive ?
                  'bg-yellow-500 text-white rounded-lg' :
                  'text-gray-300'
                ]"
            >
              <i :class="itemMenu.icon"></i>
            </span>
            <span
              class="group-hover:text-gray-700"
              :class="[ isActive ?
                'text-gray-700' :
                'text-gray-300'
              ]"
            >
              {{ itemMenu.name }}
            </span>
          </a>
          <span
            class="bg-yellow-500 w-1 h-4/5 absolute top-1.5 -right-0.5 rounded-lg"
            :class="[ isActive ? 'block': 'hidden']"
          >
          </span>
        </router-link>
      </li>
    </ul>

  </nav>
</template>

<script>
import Logo from '@/components/shared/Logo'


export default {
  components: {
    Logo
  },

  props: {
    itemsMenu: {
      type: Array,
      require: true
    },
  },
}
</script>

<style scoped>

</style>