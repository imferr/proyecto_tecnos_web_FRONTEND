export default {
    data() {
        return {
            email: '',
            password: '',
            error: '',
        }
    },
    methods: {
        /*SOLO ES UN EJEMPLO, NO ES LA SOLUCION*/
        /*login() {
            const student = {
                email: this.email,
                password: this.password,
            };
            axios.post('http://localhost:3000/api/student/login', student)
                .then((response) => {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('student', JSON.stringify(response.data.student));
                    this.$router.push({ name: 'home' });
                })
                .catch((error) => {
                    if (error.response) {
                        this.error = error.response.data.message;
                    } else {
                        this.error = error.message;
                    }
                });
        },*/


        /*SOLO ES UN EJEMPLO, NO ES LA SOLUCION*/
        login(){
            this.$router.push({ name: 'eventos' });
        }
    },
};