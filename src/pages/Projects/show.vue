<template>
    <div class="row justify-content-center">
        <div class="col-md-10 d-flex my-5">
            <div class="img-container">
                <img :src="store.url + 'storage/' + project.image" >
            </div>
            
            
            <div class="ms-4">
                <h3 class="card-title pb-4">{{project.title}}</h3>
                <p class="card-text">{{project.description}}</p>

                <a :href="project.link_github" class="d-block" v-show="project.link_github">Codice GitHub</a>

                <div class="py-3" v-show="project.type">
                    <h6>Tipologia:</h6>
                    <div class="badge text-bg-secondary">{{project.type?.name}}</div>
                </div>

                <div class="py-3" v-show="project.technologies">
                    <h6>Tecnologia:</h6>
                    <div class="badge text-bg-danger" v-for="tech in project.technologies">
                        {{tech.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../../store';

export default {
    name:'ProjectsShow',
    data() {
        return {
            store,
            project: {}
        }
    },
    methods: {
        fetchProject (){
            axios.get(store.url + 'api/projects/' + this.$route.params.id)
                .then((resp) => {
                    console.log(resp.data);
                    this.project = resp.data;
                })
        }
    },
    mounted() {
        this.fetchProject()
    },
}
</script>

<style scoped lang="scss">
.img-container{
    aspect-ratio: 1/1;
    width: 30rem;

    img{
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        object-position: center;
    }
}
</style>