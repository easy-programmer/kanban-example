<template>
    <div class="menubar">
        <div class="btn-group" role="group" aria-label="Menu bar">
            <router-link to="/home" :class="buttonClass('/home')">Home ...</router-link>
            <router-link to="/board" :class="buttonClass('/board')">Board ...</router-link>
            <router-link to="/backlog" :class="buttonClass('/backlog')">Backlog ...</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuBar',
    methods: {
        buttonClass(path) {
            return {
                btn: true,
                'btn-primary': this.$route.path === path,
                'btn-secondary': this.$route.path !== path
            };
        }
    }
};
</script>

<style>
    .menubar {
        margin-bottom: 16px;
    }
</style>