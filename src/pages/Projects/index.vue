<template>
    <h1 class="my-4">Projects</h1>

    <div class="row g-4">
        <div class="col-3" v-for="(project, i) in projects" :key="i">
            <ProjectCard :project="project"></ProjectCard>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue'

export default {
    name: 'ProjectsIndex',
    components:{ProjectCard},
    data() {
        return {
            url:'http://127.0.0.1:8000/',
            projects: []
        }
    },
    methods: {
        fetchProjects (){
            axios.get(this.url + 'api/projects')
                .then((resp) => {
                    // console.log(resp.data);
                    this.projects = resp.data;
                })
        }
    },
    mounted() {
        this.fetchProjects()
    },
}
</script>