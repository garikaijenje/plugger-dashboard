<template>

    <div :class="['dimmer' , loading ? 'active' : '']">
        <div class="loader"></div>
        <div class="dimmer-content">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="breadcrumb bg-transparent">
                        <li class="breadcrumb__item"><router-link to="/">Home</router-link></li>
                        <li class="breadcrumb__item breadcrumb__item--active">Cart</li>
                    </ul>
                    <div  v-if="model.state != 'COMPLETED' && model.items.length > 0" class="row">
                        <div v-if="model.state != 'COMPLETED'" class="col-lg-4">
                            <form action="#" class="sign__form sign__form--cart">
                                <h4 class="sign__title">Checkout</h4>
                                <div class="sign__group">
                                    <input type="text" v-model="name" name="name" class="sign__input" placeholder="Name">
                                </div>

                                <div class="sign__group">
                                    <input type="text" v-model="email" name="email" class="sign__input" placeholder="Email">
                                </div>

                                <div class="sign__group">
                                    <input type="text" v-model="phone"  name="phone" class="sign__input" placeholder="Phone">
                                </div>
                                <div class="sign__group sign__group--row">
                            <span class="sign__text sign__text--small">
                                You will be redirected to an external site to complete payment
                            </span>
                                </div>
                                <button  @click="payment" type="button" class="sign__btn">Proceed to Payment</button>
                            </form>
                            <!-- end checkout -->
                        </div>
                        <div class="col-lg-8">
                            <div class="cart">
                                <div class="cart__info">
                                    <div class="cart__total">
                                        <p>Total:</p>
                                        <span>$ {{ total }}</span>
                                    </div>
                                    <div class="cart__total">
                                        <p>State:</p>
                                        <span>{{ model.state }}</span>
                                    </div>
                                    <div class="cart__total">
                                        <p>Ref:</p>
                                        <span>{{ model.ref }}</span>
                                    </div>
                                </div>

                                <div class="cart__table-wrap">
                                    <div class="cart__table-scroll">
                                        <table class="cart__table">
                                            <tbody>

                                            <tr v-for="row in model.items">
                                                <td>
                                                    <div class="main__table-text text-primary">
                                                        #{{ row.item.id }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="main__table-img">
                                                        <img v-if="row.item.cover.optimized" :src="row.item.cover.small" alt="">
                                                        <img v-else :src="row.item.cover.path" alt="">
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="main__table-text">
                                                        {{ row.item.song_title }} <br>
                                                        {{ row.item.album_title }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="main__table-text">
                                                        {{ row.item.created_at }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="main__table-text">
                                                        ${{ row.price }}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="d-flex justify-content-center align-items-center">
                                                        <router-link :to="`/library/songs/${row.item.id}/view`" class="single-item__export mr-3" type="button">
                                                            <i class="mdi mdi-eye mdi-24px"></i>
                                                        </router-link>
                                                    </div>
                                                </td>
                                                <td><button class="cart__delete" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg></button></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="col-lg-12 text-center mh-50vh d-flex justify-content-center align-items-center text-white">
                            <h1>They are no items on your cart</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    

</template>

<script>
    export default {
        name: "dashboard",
        mounted()
        {
            this.init();
            this.name = window.user.name;
            this.phone = window.user.phone;
            this.email = window.user.email;
        },
        data()
        {
            return {
                total : 0,
                model: {
                    items : [],
                },
                loading : false,
                user : window.user,
                name : '',
                email : '',
                phone : '',
            };
        },

        methods : {
            init()
            {
                this.loading = true;
                window.axios.get(`${window.location.origin}/site/library/cart`).then((response) => {
                    this.model = response.data.body.model;
                    this.total = response.data.body.total;
                }).finally(() => {
                    this.loading = false;
                });
            },

            payment()
            {
                this.loading = true;
                window.action('proceed' , 'to Payment' , `${window.location.origin}/site/library/cart/payment?name=${this.name}&email=${this.email}&phone=${this.phone}`).then((response) => {
                    window.location = response.data.body.meta.link;
                });
            },
        }
    }
</script>
