<template>
    <div class="row g-5">
        <div class="col-3" v-for="card in 8">
            <div class="card" aria-hidden="true">
                <div class="card-body">
                    <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                    </h5>
                    <p class="card-text placeholder-glow">
                        <span class="placeholder col-7"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                    </p>
                    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script></script>

<style scoped lang="scss">
.card{
    height: 20rem;
}
</style>