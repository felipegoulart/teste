<template>
  <div
    class="min-w-full flex flex-col"
  >
    <div
      class="bg-gray-100 min-w-full p-4 flex flex-col shadow-lg rounded-4xl mb-6"
    >
      <Search v-model="search"/>
    </div>

    <div
      class="bg-gray-100 min-w-full p-4 flex flex-col shadow-lg rounded-4xl"
    >

      <leads-list :leads="leads"
        class="space-y-2"
        v-if="leads.length"
      />

      <h2 
        class="text-gray-300 text-3xl text-center m-2"
        v-else
      >
        Sem leads para importar
      </h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import Search from '@/components/shared/Search'
// import Filter from '@/components/shared/Filter'
import LeadsList from '@/components/shared/LeadsList'

export default {
  data() {
    return {
      search: '',
      // filters: ['Status', 'Urgência', 'Plataforma'],
      leads: []
    }
  },

  methods: {
    clearSearch() {
      this.search = ''
    }
  },

  mounted () {
    axios
      .post('bitrix24/crm/leads', {
          'order': [],
          'filter': []
        })
      .then(response => console.log(response))
  },

  components: {
    Search,
    // "my-filter": Filter,
    "leads-list": LeadsList,
  },
}
</script>