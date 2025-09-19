<script setup>
    import { ref } from 'vue';

    const MAIN = [
        {image: "accessories.svg", activeImage: "accessories_active.svg", title: "accessories", label: 23},
        {image: "earrings.svg", activeImage: "earrings_active.svg", title: "earrings", label: 7},
        {image: "watches.svg", activeImage: "watches_active.svg", title: "watches", label: 7},
        {image: "bracelets.svg", activeImage: "bracelets_active.svg", title: "bracelets", label: 7},
        {image: "Masks.svg", activeImage: "Masks_active.svg", title: "Masks", label: 7},
    ]

    const selectedCategoryIndex = ref(0);
    const selectCategory = (index) => {
        if (selectedCategoryIndex.value === index) return;
        selectedCategoryIndex.value = index;
    };
</script>

<template>
    <section class="sections">
        <div class="card" v-for="(i,k) in MAIN" :key="k" @click="selectCategory(k)">
            <section class="left_bar" :class="{'active-category': selectedCategoryIndex === k}"></section>

            <section class="main" :class="{'main__card_active': selectedCategoryIndex === k}">
                <div class="main__img"><img :src="'/categories/' + (selectedCategoryIndex === k ? i.activeImage : i.image)" :alt="i.title"></div>
                <div class="main__info">
                    <p class="main__title" :class="{'active': selectedCategoryIndex === k}">{{ i.title }}</p>
                    <p class="main__label" :class="{'active': selectedCategoryIndex === k}">{{ i.label }}</p>
                </div>
            </section>
        </div>
    </section>
    
</template>

<style lang="scss" src="@/assets/scss/categories.scss" />