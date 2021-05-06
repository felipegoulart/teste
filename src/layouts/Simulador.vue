<template>
  <div
    class="bg-gray-100 h-screen flex "
  >
    <Sidebar
      :itemsMenu="itemsMenu"
      class="mr-4"
    />
    <main class="w-full p-4 px-10 overflow-auto">
      <HeaderUser 
        class="mb-4"
      />
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import HeaderUser from '@/components/HeaderUser'

export default {
  name: 'Admin',
  components: {
    Sidebar,
    HeaderUser
  },

  data() {
    return {
      itemsMenu: [
        {
          name: 'Dashboard',
          link: 'dashboard',
          icon: 'fas fa-chart-pie'
        },
        {
          name: 'Adicionar',
          link: 'adicionar',
          icon: 'fas fa-plus'
        },
        {
          name: 'Leads',
          link: 'leads',
          icon: 'fas fa-building'
        },
        {
          name: 'Contratos',
          link: 'contratos',
          icon: 'fas fa-handshake'
        },
      ]
    }
  }
}
</script>