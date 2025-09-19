<script setup>
    import { ref } from 'vue';

    const MAIN = [
        {image: "outback-hat.svg", activeImage: "outback-hat_active.svg", title: "accessories", label: 23},
        {image: "glasses.svg", activeImage: "glasses_active.svg", title: "glasses", label: 7},
        {image: "tops.svg", activeImage: "tops_active.svg", title: "tops", label: 7},
        {image: "Undershirts.svg", activeImage: "Undershirts_active.svg", title: "Undershirts", label: 7},
        {image: "pants.svg", activeImage: "pants_active.svg", title: "pants", label: 7},
        {image: "shoes.svg", activeImage: "shoes_active.svg", title: "shoes", label: 7},
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