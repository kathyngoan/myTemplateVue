<template>
<main>
    <div class="home">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner" data-aos="fade-in">
                <div class="carousel-item active">
                    <img class="bd-placeholder-img" width="100%" src="https://cdn.shopify.com/s/files/1/0043/8471/8938/collections/NewBrand_Collection_House_4-09_1440x450.jpg?v=1646074624" alt="What we do">
                    <div class="container">
                        <div class="carousel-caption text-start">
                            <h1>Example headline.</h1>
                            <p>Some representative placeholder content for the first slide of the carousel.</p>
                            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="bd-placeholder-img" width="100%" src="https://images.adsttc.com/media/images/629f/3517/c372/5201/650f/1c7f/large_jpg/hyde-park-house-robeson-architects_1.jpg?1654601149" alt="What we do">

                    <div class="container">
                        <div class="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Some representative placeholder content for the second slide of the carousel.</p>
                            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="bd-placeholder-img" width="100%" src="https://cdn.shopify.com/s/files/1/2078/3829/files/IMG_5694_2048x.jpg?v=1538484167" alt="What we do">

                    <div class="container">
                        <div class="carousel-caption text-end">
                            <h1>One more for good measure.</h1>
                            <p>Some representative placeholder content for the third slide of this carousel.</p>
                            <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="container">
           
            <div class="wrapBox position-relative aos-init aos-animate" data-aos="fade-up" data-aos-once="false"  data-aos-duration="3000">
                <div class="row box position-relative p-lg-5 p-4">
                    <div class="col-12 col-md-12 col-lg-4 mr-auto">
                        <div class="d-flex align-items-center h-100">
                            <div class="">
                                <h3 class="h4 textGradient mb-4 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-right" >What we do
                                </h3>
                                <h2 class="h3 font-weight-bold mb-4">End-to-End Commerce Enablement Platform</h2>
                                <div class="mb-0 mb-lg-5 aos-init aos-animate" data-aos="fade-in" data-aos-delay="500">
                                    <p class="mb-0">
                                        Tap on software forming infrastructure that powers the next-generation of commerce. Unlock
                                        holistic data and functionality across key business functions, from manufacturing and e-commerce
                                        to logistics, marketing, and more.
                                    </p>
                                </div>
                                <a href="#" class="btn btn-outline-primary mb-2 aos-init aos-animate" data-aos="fade-in" data-aos-delay="500">DISCOVER MORE</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-12  col-lg-7">
                        <img class="w-100 mb-4 mb-lg-0" src="https://i2.au.reastatic.net/800x600/948ea0ed21babbcda649305c45693ed902e59e4fa06dbdb2a83f00b1fc6aaaa7/main.jpg" alt="What we do">
                    </div>
                </div>

                <div class="row boxShadow"></div>
            </div>

            <div class="newsHome px-4 py-5" id="custom-cards" data-aos="fade-up" data-aos-once="true">
                <h2 class="pb-2 border-bottom">Show data local by json</h2>

                <!-- Show data local by json -->
                <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div class="col" v-for="item in vm" :key="item.id">
                        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" :style="'background: url(' + item.url + ')'">
                            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h2 @click="notic()" class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{{item.title}}</h2>
                                <ul class="d-flex list-unstyled mt-auto">
                                    <li class="me-auto">
                                        <img :src="item.url" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                                    </li>
                                    <li class="d-flex align-items-center me-3">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#geo-fill" /></svg>
                                        <small>Earth</small>
                                    </li>
                                    <li class="d-flex align-items-center">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#calendar3" /></svg>
                                        <small>3d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="newsHome px-4 py-5" id="custom-cards" data-aos="fade-up" data-aos-once="true">
                <h2 class="pb-2 border-bottom">Show data api by axios api (hidding by d-none class)</h2>
                <!-- Show data api by axios api -->
                <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5 d-none">
                    <div class="col" v-for="item in vm" :key="item.id">
                        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg');">
                            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{{item.title}}</h2>
                                <ul class="d-flex list-unstyled mt-auto">
                                    <li class="me-auto">
                                        <img src="https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                                    </li>
                                    <li class="d-flex align-items-center me-3">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#geo-fill" /></svg>
                                        <small>Earth</small>
                                    </li>
                                    <li class="d-flex align-items-center">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#calendar3" /></svg>
                                        <small>3d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="newsHome px-4 py-5 d-none" id="custom-cards">
                <h2 class="pb-2 border-bottom">Custom cards</h2>

                <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div class="col">
                        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg');">
                            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
                                <ul class="d-flex list-unstyled mt-auto">
                                    <li class="me-auto">
                                        <img src="https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                                    </li>
                                    <li class="d-flex align-items-center me-3">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#geo-fill" /></svg>
                                        <small>Earth</small>
                                    </li>
                                    <li class="d-flex align-items-center">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#calendar3" /></svg>
                                        <small>3d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/833be8b5-9db0-4e10-b89d-737d6394ade9/nature-wallpaper20.jpg');">
                            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
                                <ul class="d-flex list-unstyled mt-auto">
                                    <li class="me-auto">
                                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                                    </li>
                                    <li class="d-flex align-items-center me-3">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#geo-fill" /></svg>
                                        <small>Pakistan</small>
                                    </li>
                                    <li class="d-flex align-items-center">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#calendar3" /></svg>
                                        <small>4d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg');">
                            <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
                                <ul class="d-flex list-unstyled mt-auto">
                                    <li class="me-auto">
                                        <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                                    </li>
                                    <li class="d-flex align-items-center me-3">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#geo-fill" /></svg>
                                        <small>California</small>
                                    </li>
                                    <li class="d-flex align-items-center">
                                        <svg class="bi me-2" width="1em" height="1em">
                                            <use xlink:href="#calendar3" /></svg>
                                        <small>5d</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</main>
</template>

<style>
</style>

<script setup lang="ts">
import { inject, ref, watch, onBeforeMount, onMounted } from "vue";
import axios from "axios";
const msg = ref("booo");
const vm = ref([] as any) ;
const dataLocal = ref([
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "url": "https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "url": "https://wallpaperaccess.com/thumb/123112.jpg",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "",
            "url": "https://www.fonewalls.com/wp-content/uploads/Dont-Touch-Scary-Lock-Screen-Wallpaper-1080x2340--300x585.jpg",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            "userId": 1,
            "id": 4,
            "title": "eum et est occaecati",
            "url": "https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2019/5/21/4/rx_etsy_botanical-removable-wallpaper.jpeg.rend.hgtvcom.616.770.suffix/1558466297164.jpeg",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        }
    ]);
const notic = () => {
    alert('Wating update link to detail');
};
const getdataLocal = () => { // Function to Show data local by json
    vm.value = dataLocal.value;
    console.log('Data Local', vm.value);
};
const getList = () =>  { //Function to Show data api by axios api
    let api = "https://jsonplaceholder.typicode.com/posts";
    // axios.get(api).then((response) => {
    //     vm.value = response.data;
    //     console.log("Data API is:", vm.value);
    // })
    // or
    axios.get(api).then((response) => {
        vm.value = response.data;
        console.log(vm.value)
    })
};

onBeforeMount(() => {
    console.log("before");
});
onMounted(()=> {
    console.log("mounted");
    getdataLocal(); // Call Function to Show data local by json
    //getList(); //Call Function to Show data api by axios api
});

// export default {
//     name: 'home-view',
//     data() {
//         return {
//             msg: "booo",
//             vm: {},
//             dataLocal: [{
//                     "userId": 1,
//                     "id": 1,
//                     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//                     "url": "https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg",
//                     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//                 },
//                 {
//                     "userId": 1,
//                     "id": 2,
//                     "title": "qui est esse",
//                     "url": "https://wallpaperaccess.com/thumb/123112.jpg",
//                     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//                 },
//                 {
//                     "userId": 1,
//                     "id": 3,
//                     "title": "",
//                     "url": "https://www.fonewalls.com/wp-content/uploads/Dont-Touch-Scary-Lock-Screen-Wallpaper-1080x2340--300x585.jpg",
//                     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//                 },
//                 {
//                     "userId": 1,
//                     "id": 4,
//                     "title": "eum et est occaecati",
//                     "url": "https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2019/5/21/4/rx_etsy_botanical-removable-wallpaper.jpeg.rend.hgtvcom.616.770.suffix/1558466297164.jpeg",
//                     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//                 }
//             ]
//         };
//     },
//     methods: {
//         notic() {
//             alert('Wating update link to detail');
//         },
//         getdataLocal() { // Function to Show data local by json
//             let self = this;
//             self.vm = self.dataLocal;
//             console.log('Data Local', this.vm);
//         },
//         getList() { //Function to Show data api by axios api
//             let api = "https://jsonplaceholder.typicode.com/posts";
//             let self = this;
//             this.axios.get(api).then((response) => {
//                 self.vm = response.data;
//                 console.log("Data API is:", self.vm);
//             })
//             // or
//             // this.$http.get(api).then((response) => {
//             //     self.vm = response.data;
//             //     console.log(response.data)
//             // })
//         }
//     },
//     beforeMount() {
//         console.log("before");

//     },
//     mounted() {
//         console.log("mounted");
//         this.getdataLocal(); // Call Function to Show data local by json
//         //this.getList(); //Call Function to Show data api by axios api
//     }
// }
</script>
