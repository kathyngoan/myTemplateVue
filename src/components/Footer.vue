<script>
export default {
    name: "FooterComponent",
    props: {
        msg: String,
    },
    data: () => ({}),
    methods: {},
}
</script>

<template>
<footer class="pt-4 pb-4 bg-primary text-white">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-4 col-lg-2 order-md-1">
                <img class="w-100" src="@/assets/images/logo.svg" alt="">
                <ul class="list-unstyled list-inline py-4">
                    <li class="list-inline-item">
                        <a href="#">
                            <img class="icon" src="@/assets/images/youtube_white.svg" alt="">
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">
                            <img class="icon" src="@/assets/images/instagram_white.svg" alt="">
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">
                            <img class="icon" src="@/assets/images/facebook_white.svg" alt="">
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">
                            <img class="icon" src="@/assets/images/twitter_white.svg" alt="">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-12 col-lg-8 order-md-3 order-lg-2">
                <div class="row">
                    <div class="col-md-6 col-lg-2">
                        <h3 class="pr-0 pr-md-4mb-20 h5 font-weight-bold">
                            <a href="solutions.html">Solutions</a>
                        </h3>
                        <ul class="list-unstyled padding-list">
                            <li><a href="solutions.html">For Brands</a></li>
                            <li><a href="solutions.html">For Creators</a></li>
                            <li><a href="solutions.html">For Publishers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-lg-2">
                        <h3 class="pr-0 pr-md-4mb-20 h5 font-weight-bold">Products</h3>
                        <ul class="list-unstyled padding-list">
                            <li><a href="#">AnyFactory</a></li>
                            <li><a href="#">AnyShop</a></li>
                            <li><a href="#">AnyManager</a></li>
                            <li><a href="#">AnyChat</a></li>
                            <li><a href="#">AnyTag</a></li>
                            <li><a href="#">AnyDigital</a></li>
                            <li><a href="#">AnyLogi</a></li>
                            <li><a href="#">AnyCreator</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-lg-2">
                        <h3 class="pr-0 pr-md-4mb-20 h5 font-weight-bold">News</h3>
                        <ul class="list-unstyled padding-list">
                            <li><a href="#">Press Release</a></li>
                            <li><a href="#">Announcement</a></li>
                            <li><a href="#">Case Study</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Tech Blog</a></li>
                            <li><a href="#">Report</a></li>
                            <li><a href="#">Event</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-lg-2">
                        <h3 class="pr-0 pr-md-4mb-20 h5 font-weight-bold">About</h3>
                        <ul class="list-unstyled padding-list">
                            <li><a href="#">CEO's Message</a></li>
                            <li><a href="#">Leadership</a></li>
                            <li><a href="#">Company Profile</a></li>
                            <li><a href="#">Businesses</a></li>
                            <li><a href="#">Offices</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-lg-2">
                        <h3 class="pr-0 pr-md-4mb-20 h5 font-weight-bold">Solutions</h3>
                        <ul class="list-unstyled padding-list">
                            <li><a href="#">For Brands</a></li>
                            <li><a href="#">For Creators</a></li>
                            <li><a href="#">For Publishers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-lg-2">
                        <h3 class="pr-0 pr-md-4mb-20 h5 font-weight-bold">Solutions</h3>
                        <ul class="list-unstyled padding-list">
                            <li><a href="#">For Brands</a></li>
                            <li><a href="#">For Creators</a></li>
                            <li><a href="#">For Publishers</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 col-lg-2 order-md-2 order-lg-3 offset-lg-0 offset-md-4">
                <div class="nav-item dropdown border rounded-sm text-white mr-3">
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        English
                    </a>
                    <div class="dropdown-menu rounded-sm" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">English</a>
                        <a class="dropdown-item" href="#">Vietnam</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="sub-footer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md">
                    <p class="mb-md-0">
                        © yourweb.com. All rights reserved.
                        <span class="ml-2">|</span>
                        <span class="ml-2"><a href="privacy.html">Privacy Policy</a></span>
                    </p>
                </div>
                <div class="col-md-auto ml-auto">
                    <ul class="list-unstyled list-inline">
                        <li class="list-inline-item"><a href="#">GROVE</a></li>
                        <li class="list-inline-item"><a href="#">ENGAWA </a></li>
                        <li class="list-inline-item"><a href="#">Moindy</a></li>
                        <li class="list-inline-item"><a href="#">Acqua Media</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</footer>
</template>

<style lang="scss">
@use "../scss/variables";

a {
    color: variables.$white;
}
</style>
