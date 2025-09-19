<template>
    <div>
        <SwichOption />
        <section class="exit"><img src="/Close.svg" alt=""></section>

        <section class="center_bar">
            <section class="logo">
                <div class="logo__text">
                    <img class="logo__text__img" src="/logo.svg" alt="">
                    <p class="logo__text__header">Dealership</p>
                    <p class="logo__text__info">Step into the world of high-stakes auctions where only the boldest bidders win.</p>
                </div>
            </section>

            <section class="info_bar">
                <div class="info_bar__header">
                    <img src="/logo_bar.svg" alt="">
                    <p>GTX M1</p>
                </div>
                <div class="info_bar__center">
                    <div class="cards" v-for="(i, k) in items" :key="k">
                        <p class="cards__title" :style="{ color: i.color }">{{ i.title }}</p>
                        <div class="cards__info">
                            <p :style="{ color: i.color }">{{ i.description }}</p>
                            <div class="blocks">
                                <div class="block" v-for="(m, k) in 10" :key="k" :style="{ background: k < 2 ? i.color : i.color, opacity: k < 2 ? 1 : 0.1 }"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

        <section class="categories">
            <div class="categories_arrow"><Arrow width="26.32" height="26.32" color="#2496F0"/></div>
            <div class="categories__card" v-for="(i, k) in CATEGORIES" :key="k" @click="selectCategory(k)" :class="selectedCategoryIndex === k ? 'categories__card__active' : ''">{{ i.name }}</div>
            <div class="categories_arrow"><Arrow width="26.32" height="26.32" color="#2496F0" rotate="180"/></div>
        </section>

        <section class="color_total">
            <section class="color_bar">
                <div class="color_card" v-for="(i, k) in COLORS" :key="k" @click="selectColor(k)" :class="selectedColorIndex === k ? 'color_card__active' : ''"><div class="colors" :style="{background: i.color}"></div></div>
            </section>

            <section class="total">
                <div class="total__info">
                    <div class="total__info__head">
                        <p>TOTAL PRICE</p>
                    </div>
                    <p class="total__info__p">${{ formatPrice(6534234) }}</p>
                </div>

                <div class="total__buttons">
                    <button class="total__buttons__drive">TEST DRIVE</button>
                    <button class="total__buttons__card"><img  src="/ATM.svg" alt="">CARD</button>
                    <button class="total__buttons__cash"><img  src="/cash.svg" alt="">CASH</button>
                </div>
            </section>
        </section>
        
        <section class="car">
            <div class="car__card">
                <div class="card" v-for="(i, k) in CAR" :key="k">
                    <div class="card__image"><img :src="'/car/' + i.image" alt=""></div>

                    <div class="info" :class="selectedCarIndex === k ? 'info__active' : ''">
                        <p class="info__name" :class="selectedCarIndex === k ? 'info__active_p' : ''">{{ i.name }}</p>
                        <p class="info__price" :class="selectedCarIndex === k ? 'info__active_p' : ''">${{ formatPrice(i.price) }}</p>
                    </div>
                </div>
            </div>
            <div class="car__button">
                <div class="car__button__press" @click="selectCar('a')"><Arrow width="26.322" height="26.322" color="#2496F0" />Press A</div>
                <div class="car__button__press" @click="selectCar('d')">Press D<Arrow width="26.322" height="26.322" color="#2496F0" rotate="180" /></div>
            </div>
        </section>
    </div>
</template>

<script>
import { ref } from 'vue';
import SwichOption from "../components/HeaderBar.vue"
import Arrow from '../components/icons/Arrow.vue'
export default {
    data() {
        return {
            items: [
                { title: 'speed', description: 240 + 'KMH', color: '#1CFF60' },
                { title: 'ACCELERATION', description: 20 + '%', color: '#FDBE22' },
                { title: 'baraking', description: 20 + '%', color: '#FDBE22' },
                { title: 'control', description: 20 + '%', color: '#FDBE22' },
                { title: 'CONSUMPTION', description: 20 + '%', color: '#2496F0' },
                { title: 'TANK CAPACITY', description: 20 + '%', color: '#2496F0' },

            ],
            CATEGORIES: [
                { name: 'NORMAL' },
                { name: 'SPORT' },
                { name: 'SPORT PLUS' },
                { name: 'CLASIC' },
                { name: '4X4' },
                { name: 'DRIFT' },
                { name: 'MOTORBIKE' },
            ],
            selectedCategoryIndex: ref(1),
            COLORS: [
                { color: '#321CFF' },
                { color: '#FDBE22' },
                { color: '#F922FD' },
                { color: '#2496F0' },
                { color: '#FF543E' },
                { color: '#3F3F3F' },
                { color: '#FFFFFF' },
                { color: '#9124F0' }
            ],
            selectedColorIndex: ref(1),
            CAR:[
                {name: 'GTX M1', price: 324235, image: 'car.png'},
                {name: 'GTX M1', price: 324235, image: 'car.png'},
                {name: 'GTX M1', price: 324235, image: 'car.png'},
                {name: 'GTX M1', price: 324235, image: 'car.png'},
                {name: 'GTX M1', price: 324235, image: 'car.png'},
                {name: 'GTX M1', price: 324235, image: 'car.png'},
                {name: 'GTX M1', price: 324235, image: 'car.png'},
            ],
            selectedCarIndex: ref(5),
        };
    },
    name: "app",
    components: {
        SwichOption,
        Arrow,
    },
    methods:{
        selectCategory(index) {
            if (this.selectedCategoryIndex === index) return;
            this.selectedCategoryIndex = index;
        },
        selectColor(index) {
            if (this.selectedColorIndex === index) return;
            this.selectedColorIndex = index;
        },
        selectCar(direction) {
            if (direction === 'a') {
                if (this.selectedCarIndex > 0) {
                    this.selectedCarIndex--;
                }
            } else if (direction === 'd') {
                if (this.selectedCarIndex < this.CAR.length - 1) {
                    this.selectedCarIndex++;
                }
            }
        },
        formatPrice(price) {
            return price.toLocaleString('de-DE');
        }
    }
  }
</script>

<style lang="scss" src="@/assets/scss/Dealership.scss" />