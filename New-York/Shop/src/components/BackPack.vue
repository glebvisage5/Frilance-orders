<template>
    <div class="apps">
        <section class="backpack">
            <div class="backpack__header">
                <section class="backpack__header__logo">
                    <div class="logotip">
                        <div class="logotip_background" :style="backgroundStyle"></div>
                        <img src="/backpack.svg" alt=""/>
                    </div>

                    <div class="info">
                        <section class="info__lvl">
                            <p>BACKPACK</p>
                            <div>LVL  1</div>
                        </section>
                        <section class="info__kg">
                            <p style="color: #FFF;">{{ currentValue }}</p>
                            <p style="color: #FFFFFFBF;">/{{ maxCapacity }}KG</p>
                            <p style="color: #2496F0;">{{ Math.round(currentValue / maxCapacity * 100) }}%</p>
                        </section>
                    </div>
                </section>

                <section class="backpack__header__draganddrop">
                    <p>Drag and drop item here to buy</p>
                    <img src="/Exclamation.svg" alt=""/>
                </section>
            </div>

            <div class="slots">
                <div class="card" v-for="(slot, k) in 20" :key="k" :class="{'filled': activeSlots[k]}" >
                    <div class="card__active" v-if="activeSlots[k]">
                        <p class="title">{{ activeSlots[k].title }}</p>
                        <img :src="'/BackPack/' + activeSlots[k].image" class="card__image__active" alt=""/>
                        <div class="count">{{ activeSlots[k].count }}x</div>
                        <img class="ribbon" src="/ribbon.svg" alt="">
                    </div>
                    <img v-else src="/image_card.svg" class="card__image" alt=""/>
                </div>
            </div>
        </section>

        <section class="total">
            <div class="total__buttons">
                <button><img class="total__buttons__card" src="/ATM.svg" alt="">CARD</button>
                <button><img class="total__buttons__cash" src="/cash.svg" alt="">CASH</button>
            </div>

            <div class="total__info">
                <div class="total__info__head">
                    <div>7</div>
                    <p>TOTAL PRICE</p>
                </div>
                <p class="total__info__p">${{ formatPrice(6534234) }}</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            maxCapacity: 25,  // max capacity backpack
            currentValue: 10,
            activeSlots: [
                { title: 'title', count: 51, image: 'pizza.png' },
                null,
                null,
                { title: 'Item 2', count: 30, image: 'pizza.png' },
                null,
                null,
            ]
        };
    },
    computed: {
        vw() {
            return function($px) {
                return `${0.052083333333333336 * $px}vw`;
            };
        },

        backgroundHeight() {
            const height = (this.currentValue / this.maxCapacity) * 62;
            return Math.min(height, 62);
        },

        backgroundStyle() {
            return {
                height: this.vw(this.backgroundHeight)
            };
        }
    },
    methods:{
        formatPrice(price) {
            return price.toLocaleString('de-DE');
        }
    }
};
</script>

<style lang="scss" src="@/assets/scss/BackPack.scss" />
