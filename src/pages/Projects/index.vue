<template>
    <h1 class="my-4">Projects</h1>

    <TheLoader v-if="this.load"></TheLoader>

    <div class="row g-4">
        <div class="col-6 col-md-4 col-lg-3" v-for="(project, i) in projects" :key="i">
            <ProjectCard :project="project"></ProjectCard>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';
import TheLoader from '../../components/TheLoader.vue';
import { store } from '../../store';

export default {
    name: 'ProjectsIndex',
    components: { ProjectCard, TheLoader },
    data() {
        return {
            store,
            projects: [],
            load: false
        }
    },
    methods: {
        fetchProjects() {
            this.load = true;

            axios.get(store.url + 'api/projects')
                .then((resp) => {
                    // console.log(resp.data);
                    this.projects = resp.data;

                    this.load = false;
                })
        }
    },
    mounted() {
        this.fetchProjects()
    },
}
</script>

