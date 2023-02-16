<template>
    <div class="card" style="width: 18rem; height: 20rem;">
        <img :src="url + 'storage/' + project.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="badge text-bg-primary my-3">{{ project.type?.name }}</div>
            <div v-if="project.technologies" v-for="tech in project.technologies" class="my-3 badge rounded-pill text-bg-danger">
                {{ tech.name  }}
            </div>
            <a href="" class="my-3">{{ project.link_github }}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type:Object
        }
    },
    data() {
        return {
            url:'http://127.0.0.1:8000/'
        }
    },
        
}
</script>

<style scoped lang="scss">
.card{
    overflow-y: auto;

    img {
        height: 8rem;
        object-fit: cover;
    }
}
</style>