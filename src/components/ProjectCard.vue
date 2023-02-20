<template>
    <div class="card h-100">
        <img :src="store.url + 'storage/' + project.image" class="card-img-top" alt="...">
        <div class="card-body">
            <!-- <h5 class="card-title">{{ project.title }}</h5> -->
            <router-link :to="{name: 'projects.show', params: {id:project.id}}" class="card-title h5 mb-4">
                {{ project.title }}
            </router-link>

            <p class="card-text "><small>{{ project.description }}</small></p>

            <div class="badge text-bg-primary my-3">{{ project.type?.name }}</div>

            <div v-if="project.technologies" v-for="tech in project.technologies" class="my-3 badge rounded-pill text-bg-danger">
                {{ tech.name  }}
            </div>

            <a href="" class="my-3">{{ project.link_github }}</a>
        </div>
    </div>
</template>

<script>
import {store} from "../store";

export default {
    props: {
        project: {
            type:Object,
            required: true,
            default: ()=>({})
        }
    },
    data() {
        return {
            store
        }
    },
        
}
</script>

<style scoped lang="scss">
.card{
    overflow-y: auto;

    img {
        height: 15rem;
        object-fit: cover;
    }
}
</style>