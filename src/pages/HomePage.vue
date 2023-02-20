<template>
    <h1 class="my-4">Laravel Boolfolio - Frontend</h1>

    <section class="py-4">
        <h2>Ultimi progetti</h2>

        <div class="row g-5 py-4">
            <div class="col-6" v-for="(project, i) in projects" :key="i">
                <h6>{{ project.user?.name }}</h6>
                <ProjectCard :project="project"></ProjectCard>
            </div>
        </div>

    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'Home',
    components: {ProjectCard},
    data() {
        return {
            store,
            projects: []
        }
    },
    mounted() {
        axios.get(this.store.url + 'api/projects', {
            params: {
                last4: true,
            }
        })
            .then((resp) => {
                this.projects = resp.data;
            })
    },
}
</script>