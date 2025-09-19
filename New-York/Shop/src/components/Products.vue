<template>
    <div class="Products" v-for="(i, k) in productsToShow" :key="k">
        <div class="header">
            <p class="stock">{{ i.stock }}</p>
            <p class="status">{{ i.status }}</p>
        </div>
        <img class="Products__logo" :src="'/Products/' + i.image" alt="">
        <p class="price">${{formatPrice(i.price)}}</p>
        <img class="background" src="/background.svg" alt="">
    </div>
</template>

<script>
    export default{
        props: {
            category: {
                type: String,
                required: true
            }
        },
        data(){
            return{
                Tools: [
                    {stock: 'STOCK 23', status: 'NORMAL', price: 20000, image: 'pizza.png'},
                    {stock: 'STOCK 23', status: 'NORMAL', price: 23424, image: 'pizza.png'},
                    {stock: 'STOCK 23', status: 'NORMAL', price: 23345, image: 'pizza.png'},
                    {stock: 'STOCK 23', status: 'NORMAL', price: 12345, image: 'pizza.png'},

                    {stock: 'STOCK 23', status: 'NORMAL', price: 345678, image: 'pizza.png'},
                    {stock: 'STOCK 23', status: 'NORMAL', price: 98572, image: 'pizza.png'},
                    {stock: 'STOCK 23', status: 'NORMAL', price: 89756, image: 'pizza.png'},
                    {stock: 'STOCK 23', status: 'NORMAL', price: 46462, image: 'pizza.png'},

                    {stock: 'STOCK 23', status: 'NORMAL', price: 43556, image: 'pizza.png'},
                    {stock: 'STOCK 23', status: 'NORMAL', price: 88454, image: 'pizza.png'},
                    {stock: 'STOCK 23', status: 'NORMAL', price: 84845, image: 'pizza.png'},
                    {stock: 'STOCK 23', status: 'NORMAL', price: 33333, image: 'pizza.png'},

                    {stock: 'STOCK 23', status: 'NORMAL', price: 79446, image: 'pizza.png'},
                    {stock: 'STOCK 23', status: 'NORMAL', price: 52456, image: 'pizza.png'},
                    {stock: 'STOCK 23', status: 'NORMAL', price: 12654, image: 'pizza.png'},
                    {stock: 'STOCK 23', status: 'NORMAL', price: 33664, image: 'pizza.png'},
                ],
                Electronics: [
                    { stock: 'STOCK 23', status: 'NORMAL', price: 12000, image: 'laptop.png' },
                    { stock: 'STOCK 23', status: 'NORMAL', price: 15000, image: 'phone.png' },
                ],
                Food: [
                    { stock: 'STOCK 23', status: 'NORMAL', price: 500, image: 'soda.png' },
                    { stock: 'STOCK 23', status: 'NORMAL', price: 200, image: 'burger.png' }
                ],
                Backpack: [
                    { stock: 'STOCK 23', status: 'NORMAL', price: 80000, image: 'gucci.png' },
                    { stock: 'STOCK 23', status: 'NORMAL', price: 10000, image: 'backpack.png' }
                ],
                Fuel: [
                    { stock: 'STOCK 23', status: 'NORMAL', price: 5000, image: 'fuel.png' }
                ]
            }
        },
        computed: {
            productsToShow() {
                if (this.category === 'tools') {
                    return this.Tools;
                } else if (this.category === 'electronics') {
                    return this.Electronics;
                } else if (this.category === 'food') {
                    return this.Food;
                } else if (this.category === 'backpack') {
                    return this.Backpack;
                } else if (this.category === 'fuel') {
                    return this.Fuel;
                }
                return [];
            }
        },
        methods: {
            formatPrice(price) {
                return price.toLocaleString('de-DE');
            }
        }
    }
</script>

<style lang="scss" src="@/assets/scss/Products.scss" />