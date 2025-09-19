<template>
    <div>
        <SwichOption />
        <section class="exit"><img src="/Close.svg" alt=""></section>

        <section class="center_bar">
            <section class="logo">
                <div class="logo__text">
                    <img class="logo__text__img" src="/logo.svg" alt="">
                    <p class="logo__text__header">GUNS PLACE</p>
                    <p class="logo__text__info">Step into the world of high-stakes auctions where only the boldest bidders win. Whether you're looking for rare vehicles, exclusive businesses, or one-of-a-kind items,</p>
                </div>
            </section>

            <section class="categories">
                <Categories />
            </section>

            <section class="info_clothing">
                <p class="info_clothing__header">INFO <img src="/Exclamation_Mark.svg" alt=""></p>
                <div class="info_clothing__center">
                    <div class="info_clothing__center__img"></div>
                    <div class="info_clothing__center__text">
                        <p class="info_clothing__center__text__pant">LV Pant</p>
                        <p class="info_clothing__center__text__texture">texture 2 <img src="/texture.svg" alt=""></p>
                        <p style="color: #8C8C8C;">Type Pant</p>
                    </div>
                </div>
            </section>
        </section>

        <section class="total">
            <div class="total__info">
                <div class="total__info__head">
                    <div>7</div>
                    <p>TOTAL PRICE</p>
                </div>
                <p class="total__info__p">${{ formatPrice(6534234) }}</p>
            </div>

            <div class="total__buttons">
                <button><img class="total__buttons__card" src="/ATM.svg" alt="">CARD</button>
                <button><img class="total__buttons__cash" src="/cash.svg" alt="">CASH</button>
            </div>
        </section>

        <Card />
    </div>
</template>

<script>
import SwichOption from "../components/HeaderBar.vue"
import Categories from '../components/Categories.vue'
import Card from '../components/Card/Card.vue'
export default {
    name: "app",
    components: {
        SwichOption,
        Categories,
        Card,
    },
    methods:{
        formatPrice(price) {
            return price.toLocaleString('de-DE');
        }
    }
  }
</script>

<style lang="scss" src="@/assets/scss/gunsplace.scss" />