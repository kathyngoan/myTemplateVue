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

    </div>
</main>
</template>

<script>
export default {
    methods: {

    }
}
</script>

<style>


</style>
