
<template>
  <transition name="modal-fade">
      <div class="modal-backdrop">
        <div class="modal"
          role="dialog"
      >
          <header>
              <button
                type="button"
                class=""
                @click="close"
                aria-label="Close modal">x</button>
          </header>
          <section class="modal-body" id="modalDescription">
            Enter your passowrd:
            <input
              type="password"
              placeholder="passowrd"
              class="form-control" />
            <button
              type="submit"
              class=""
              @click="">Submit</button>
              <p>error</p>
          </section>
          <footer class="modal-footer">
              <button
                type="button"
                class=""
                @click="close"
                aria-label="Close modal">Close</button>
          </footer>
        </div>
      </div>
    </transition>
</template>

<script>
export default {
  methods: {
    close(){
      this.$emit('close');
    }
  }
}
</script>

<style lang='scss'>
// Modal box
.modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
.modal-backdrop {
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: rgba(0, 0, 0, 0.3);
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .modal {
   background: #FFFFFF;
   box-shadow: 2px 2px 20px 1px;
   overflow-x: auto;
   display: flex;
   flex-direction: column;
   width: 90%;
   height: 90%;
   margin-left: 3%;
   margin-top: 3%;
 }
 .modal-header,
 .modal-footer {
   padding: 20px;
   display: flex;
   align-items: center;
 }
 .modal-header {
   border-bottom: 1px solid #eeeeee;
   justify-content: space-between;
 }
 .modal-footer {
   border-top: 1px solid #eeeeee;
   justify-content: flex-end;
 }
 .modal-body {
   position: relative;
   padding: 20px;

   p {
     text-align: left;
     white-space: pre-line;
     margin-bottom: 0;
   }
 }
 .btn-close {
   border: none;
   font-size: 20px;
   padding: 20px;
   cursor: pointer;
   font-weight: bold;
   background: transparent;
 }
</style>
