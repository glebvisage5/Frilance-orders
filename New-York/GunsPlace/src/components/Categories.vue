<script setup>
    import { ref } from 'vue';

    const MAIN = [
        {image: "Melee.svg", activeImage: "Melee_active.svg", title: "Melee", label: 23},
        {image: "Pistol.svg", activeImage: "Pistol_active.svg", title: "Pistol", label: 7},
        {image: "Shotgun.svg", activeImage: "Shotgun_active.svg", title: "Shotgun", label: 7},
        {image: "Assault r.svg", activeImage: "Assault r_active.svg", title: "Assault r", label: 7},
        {image: "Vest.svg", activeImage: "Vest_active.svg", title: "Vest", label: 7},
        {image: "Ammo.svg", activeImage: "Ammo_active.svg", title: "Ammo", label: 7},
        {image: "Components.svg", activeImage: "Components_active.svg", title: "Components", label: 7},
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