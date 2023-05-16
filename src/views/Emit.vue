<template>
  <main>
    <div class="home">
      <div class="container">
        <div class="displayBox" data-aos="zoom-in">
          <p>Animated element using zoom-in.</p>
        </div>
        <div>
          <!-- Using modifiers -->
          <b-button v-b-modal.my-modal>Show Modal</b-button>

          <!-- Using value -->
          <b-button v-b-modal="'my-modal'">Show Modal</b-button>

          <!-- The modal -->
          <b-modal id="my-modal">Hello From My Modal!</b-modal>
        </div>
      </div>
      <div class="container">
        <b-icon-arrow-90deg-down />
        <div class="h2 mb-0">
          <i class="bi bi-record-circle-fill"></i>
        </div>
        <i class="bi bi-arrow-right-circle-fill"></i>
        <div class="text-center my-3">
          <b-button
            v-b-popover.hover.top="'I am popover directive content!'"
            title="Popover Title"
          >
            Hover Me
          </b-button>

          <b-button id="popover-target-1"> Hover Me </b-button>
          <b-popover target="popover-target-1" triggers="hover" placement="top">
            <template #title>Popover Title</template>
            I am popover <b>component</b> content!
          </b-popover>

          <div class="text-center">
            <b-spinner label="Spinning"></b-spinner>
            <b-spinner type="grow" label="Spinning"></b-spinner>
            <b-spinner variant="primary" label="Spinning"></b-spinner>
            <b-spinner
              variant="primary"
              type="grow"
              label="Spinning"
            ></b-spinner>
            <b-spinner variant="success" label="Spinning"></b-spinner>
            <b-spinner
              variant="success"
              type="grow"
              label="Spinning"
            ></b-spinner>
          </div>
          <div>
            <b-button v-b-modal.modal-1>Launch demo modal</b-button>

            <b-modal id="modal-1" title="BootstrapVue">
              <p class="my-4">Hello from modal!</p>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {},
};
</script>

<style></style>
