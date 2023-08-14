<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDash from './admin'
import editorDashboard from './editor'

export default {
  name: 'Dashboard',
  components: { adminDash, editorDashboard },
  data() {
    return {
      currentRole: 'adminDash'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
