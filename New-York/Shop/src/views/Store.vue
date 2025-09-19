<template>
    <div class="app">
        <section class="exit"><img src="/Close.svg" alt=""></section>

        <section class="header_bar">
            <section class="logo">
                <div class="logo__text">
                    <img class="logo__text__img" src="/logo.svg" alt="">
                    <p class="logo__text__header">24/7 SHOP</p>
                    <p class="logo__text__info">Step into the world of high-stakes auctions where only the boldest bidders win. Whether you're looking</p>
                </div>
            </section>
        </section>

        <section class="categories">
            <div class="categories__card" v-for="(i, k) in CATEGORIES" :key="k" @click="selectCategory(k)" :class="selectedCategoryIndex === k ? 'categories__card__active' : ''">{{ i.name }}</div>
        </section>

        <section class="center_bar">
            <section class="advertisement">
                <img class="phone" src="/phone.png" alt="">
                <div class="advertisement__text">
                    <p class="title">ZPHONE</p>
                    <p class="discription">Step into the world of high-stakes auctions where only the boldest bidders win.</p>
                </div>
                <p class="price">${{ formatPrice(21412) }}</p>
            </section>

            <section class="product"><Products :category="CATEGORIES[selectedCategoryIndex].name" /></section>

            <section class="backpack"><BackPack /></section>
        </section>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import Products from '../components/Products.vue'
    import BackPack from '@/components/BackPack.vue';

    export default {
        data() {
            return {
                CATEGORIES: [
                    { name: 'food' },
                    { name: 'electronics' },
                    { name: 'tools' },
                    { name: 'backpack' },
                    { name: 'fuel' }
                ],
                selectedCategoryIndex: ref(2),
            };
        },
        components:{
            Products,
            BackPack,
        },
        methods: {
            selectCategory(index) {
                if (this.selectedCategoryIndex === index) return;
                this.selectedCategoryIndex = index;
            },
            formatPrice(price) {
                return price.toLocaleString('de-DE');
            }
        }
    };
</script>

<style lang="scss" src="@/assets/scss/Store.scss" />