import Homepage from '@/components/pages/home/HelloWorld.vue';
import Login from '@/components/pages/login/Login.vue';
import Register from '@/components/pages/register/Register.vue';
import Catalog from '@/components/pages/customer/Customer.vue';

const routes = [
    { path: '/', component: Homepage },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/catalog', component: Catalog },

];

export default routes;