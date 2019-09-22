<template>
  <div>
    <input type="checkbox" v-model="isModalVisible" />Use two-step verification
    <modal
      v-show="isModalVisible"
      @close="closeModal"
      />
  </div>
</template>


<script>
import Modal from "./Modal.vue"

export default {
  data(){
    return {
      isModalVisible: false,
    }
  },
  methods: {
    showModal(){
      this.isModalVisible = true;
    },
    closeModal(){
      this.isModalVisible = false;
    }
  },
  components: {
    Modal
  }
}

</script>
