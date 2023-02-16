<template>
    <div>
        projects
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ProjectsIndex',
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