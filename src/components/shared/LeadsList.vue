<template>
  <ul>
    <li
      class="bg-white shadow flex text-sm justify-around rounded-full overflow-auto hover:shadow-lg"
      v-for="request of requests"
      :key="request.name"
    >
      <header
        class="flex justify-center items-center w-20"
        :class="statusColor(request.status)"
        :title="request.status"
      >
        <h2 class="text-white font-semibold">{{ request.plataform }}</h2>
      </header>
      <div
        class="p-4 px-8 text-center w-full flex justify-between items-center space-x-4"
      >
        <div>
        </div>

        <h2 class="font-medium">{{ request.name }}</h2>

        <span
          :style="styles.bar"
          class="bg-gray-300"
        ></span>

        <h3>{{ request.urgency }}</h3>
        <!-- <p>
          {{ computedDescription(request.description) }}
        </p> -->
        
        <span
          :style="styles.bar"
          class="bg-gray-300"
        ></span>

        <div class="flex space-x-4">
          <div class="text-gray-400 font-bold space-x-1">
            <span>{{ numsItems(request.comments) }}</span>
            <font-awesome-icon :icon="commentBalloon" />
          </div>

          <div class="text-gray-400 font-bold space-x-1">
            <span>{{ numsItems(request.images) }}</span>
            <font-awesome-icon :icon="image" />
          </div>
        </div>

        <span
          :style="styles.bar"
          class="bg-gray-300"
        ></span>

        <div class="text-left">
          <h2 class="font-semibold">Prazo</h2>
          <span>{{ request.deadLine }}</span>
        </div>
      
      </div>
    </li>
  </ul>
</template>


<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faComment, faClock, faImage } from '@fortawesome/free-solid-svg-icons'


export default {
  name: 'RequestList',

  props: {
    requests: {
      type: Array,
      required: true
    },
  },

  data() {
    return {
      /* Icones e estilos */
      commentBalloon: faComment,
      clock: faClock,
      image: faImage,

      styles: {
        bar: 'width: 1px; height: 100%'
      }
    }
  },

  methods: {
    computedDescription(description) {
      if (description.length <= 55) return description

      return description.substring(0,55) + '...'
    },

    numsItems(items) {
      return items.length
    },

    statusColor(status) {
      const colors = {
        pendente: 'bg-gradient-to-r from-red-400 to-red-600 ',
        resolvendo: 'bg-gradient-to-r from-yellow-400 to-yellow-600 ',
        resolvido: 'bg-gradient-to-r from-green-400 to-green-600 '
      }

      if(!status) return colors.pendente

      return colors[status]
    }
  },

  components: {
    FontAwesomeIcon
  },
}
</script>