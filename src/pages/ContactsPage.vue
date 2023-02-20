<template>
    <div class="py-4">
        <h1>Pagina contatti</h1>

        <div class="alert alert-success" v-if="submit === 'success'">
            Il messaggio é stato inviato!
        </div>

        <div class="alert alert-danger" v-else-if="submit">
            Sembra ci sia stato un errore. Riprova!
        </div>

        <form class="row g-3 py-4" @submit.prevent="onFormSubmit" v-if="submit !== 'success'">
            <div class="col-12">
                <label for="titileInput" class="form-label">Titolo</label>
                <input type="text" class="form-control" id="titileInput" placeholder="Inserire titolo messaggio"
                    v-model="form.title">
            </div>
            <div class="col-md-6">
                <label for="inputName" class="form-label">Nome e Cognome</label>
                <input type="text" class="form-control" id="inputName" v-model="form.name">
            </div>
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4" v-model="form.email">
            </div>
            <div class="col-12">
                <label for="messageInput" class="form-label">Messaggio</label>
                <textarea class="form-control" id="messageInput" v-model="form.message"></textarea>
            </div>
            <div class="col-12">
                <label for="formFile" class="form-label">File allegato</label>
                <input class="form-control" type="file" id="formFile" @change="onFileChange">
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Invia</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: "ContactsPage",
    data() {
        return {
            submit: '',
            form: {
                title: '',
                name: '',
                email: '',
                message: '',
                file: ''
            }
        }
    },
    methods: {
        onFileChange(event) {
            //array di files scelti
            const files = event.target.files;

            console.log(files);

            //salvo il file dentro al mio oggetto
            this.form.file = files[0];
        },
        onFormSubmit() {
            const formData = new FormData();
            formData.append('title', this.form.title);
            formData.append('name', this.form.name);
            formData.append('email', this.form.email);
            formData.append('message', this.form.message);
            formData.append('file', this.form.file);


            axios.post(store.url + 'api/contacts', formData)
                .then((resp) => {
                    this.submit = 'success'
                })
                .catch((e) => {
                    if (e.response && e.response.data) {
                        this.submit = e.response.data.message;
                    } else {
                        this.submit = e.message;
                    }
                })
        }
    }
}
</script>