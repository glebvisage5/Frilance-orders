<template>
    <section class="header_bar">
        <div class="header_bar__left">
            <Arrow width="20" height="20" color="#FDBE22"/>
            <p>Swich Option</p>
        </div>
        <div class="header_bar__right right">
            <p>Swich Option</p>
            <Arrow width="20" height="20" color="#FDBE22" rotate="180"/>
        </div>
        <div class="header_bar__right up">
            <p>Swich Texture</p>
            <Arrow width="20" height="20" color="#FDBE22" rotate="90"/>
        </div>
        <div class="header_bar__right btn">
            <p>Press Enter to Buy</p>
            <img src="/btn.svg" alt="">
        </div>
    </section>
</template>

<script>
    import Arrow from './icons/Arrow.vue'

    export default{
        name: "app",
        components: {
            Arrow
        }
    }
</script>

<style lang="scss" src="@/assets/scss/headerbar.scss" />