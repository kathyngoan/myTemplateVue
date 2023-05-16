<template>
<header class="fixed-top">
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Eleventh navbar example">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="@/assets/images/logo.svg">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample09">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <RouterLink class="nav-link active" to="/">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="#">Link</a> -->
                            <RouterLink class="nav-link" to="/about">About</RouterLink>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="#">Link</a> -->
                            <RouterLink class="nav-link" to="/news">News</RouterLink>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                            <ul class="dropdown-menu" aria-labelledby="dropdown09">
                                <li>
                                    <RouterLink class="dropdown-item" to="/emit">Emit</RouterLink>
                                </li>
                                <li><a class="dropdown-item" href="#">Vee Validate</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form>
                        <input class="form-control" type="text" placeholder="Search" aria-label="Search">
                    </form>
                </div>
            </div>
        </nav>
    </div>
</header>
</template>
<script>
export default {
    name: "HeaderComponent", 
    props: {
        msg: String,
    },
    data: () => ({}),
    methods: {

    },
}
</script>

