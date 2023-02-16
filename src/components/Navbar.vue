<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Boolpress</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="(link, index) in navLinks" :key="index">
                        <router-link :to="{name: link.route}" class="nav-link">
                            {{ link.label }}
                        </router-link>
                        <!-- <a class="nav-link active" aria-current="page" href="#">{{ link.label }}</a> -->
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        
</template>

<script>
export default {
    data() {
        return {
            navLinks: [
                {
                    label:'Home',
                    route: 'home'
                },
                {
                    label:'Projects',
                    route: 'projects.index'
                }
            ]
        }
    },
}
</script>