<template>
    <div class="house">
        <section class="house_lock"><img src="/Lock.svg" alt=""></section>

        <section class="house_exit"><img src="/Close.svg" alt=""></section>

        <section class="house_center">
            <div class="house_center_header">
                <div class="image"></div>

                <div class="info">
                    <section class="info_headers">
                        <div class="status">COMFORT</div>
                        <p>HOUSE ID 12</p>
                    </section>

                    <section class="info_bottoms">
                        <div class="government">
                            <p class="government_value">government value</p>
                            <p class="government_price">${{ formatPrice(12241590) }}</p>
                        </div>

                        <div class="owner">
                            <p class="owner_head">OWNER</p>
                            <p class="owner_bott">OtVos</p>
                        </div>
                    </section>
                </div>
            </div>

            <div class="house_center_center">
                <section class="house_center_center_left">
                    <div class="house_center_center_left_top">
                        <div class="house_center_center_left_top_head">
                            <p class="garage">GARAGES SPACES</p>
                            <p class="count">120 SPACES</p>
                        </div>
                        <div class="house_center_center_left_top_bott">
                            <div class="garage_card" v-for="(i, k) in garage" :key="k" :class="selectedGarageIndex === k ? 'garage_card__active' : ''">
                                <p>{{ i.title }}</p>
                                <p>{{ i.description }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="house_center_center_left_bott">
                        <div class="house_center_center_left_top_head">
                            <p class="garage">helipad AVAILABLE</p>
                            <p class="count">YES</p>
                        </div>
                        <div class="_bott"><img src="/air.svg" alt=""></div>
                    </div>
                </section>
                <section class="house_center_center_right">
                    <div class="content">
                        <div class="content_text" v-for="(i, k) in text" :key="k">
                            <p class="content_text_title">{{ i.title }}</p>
                            <p class="content_text_description">{{ i.description }}</p>
                        </div>
                    </div>
                </section>
            </div>

            <div class="house_center_bottom">
                <div class="button" v-for="(i, k) in button" :key="k" :style="{background: i.color, boxShadow: `${this.vw(-7)} ${this.vw(7)} 0 0 ${hexToRgba(i.color, .24)}`}">{{ i.title }}</div>
            </div>
        </section>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    data(){
        return {
            garage: [
                { title: 'L1', description: 2 },
                { title: 'L2', description: 3 },
                { title: 'L3', description: 6 },
                { title: 'L4', description: 10 },
                { title: 'L5', description: 15 },
                { title: 'L6', description: 30 },
                { title: 'L7', description: 60 },
                { title: 'L8', description: 120 },
            ],
            selectedGarageIndex: ref(0),
            text: [
                {title: 'insurance', description: '3 Days'},
                {title: 'tax per day', description: '$' + this.formatPrice(12)},
                {title: 'tax paid until', description: '$' + this.formatPrice(12000000)},
            ],
            button: [
                {color: '#FF543E', title: 'SELL'},
                {color: '#FDBE22', title: 'HOME'},
                {color: '#9124F0', title: 'GARAGE'},
                {color: '#2496F0', title: 'OPEN/CLOSE'},
            ]
        }
    },
    name: "app",
    methods:{
        formatPrice(price) {
            return price.toLocaleString('de-DE');
        },
        vw(px) {
            return `${(px * 0.052083333333333336)}vw`;
        },
        hexToRgba(hex, opacity) {
            hex = hex.replace('#', '');
            if (hex.length === 3) {
                hex = hex.split('').map(c => c + c).join('');
            }
            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);
            return `rgba(${r}, ${g}, ${b}, ${opacity})`;
        }
    }
  }
</script>

<style lang="scss" src="@/assets/scss/House.scss" />