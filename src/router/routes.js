import HomePage from "@/components/pages/home/Homepage.vue";
import LandingPage from "@/components/pages/home/Landingpage.vue";
import Login from '@/components/pages/login/Login.vue';
import Register from '@/components/pages/register/Register.vue';
import Catalog from '@/components/pages/customer/Catalog.vue';
import AdminDashboard from "@/components/pages/admin/AdminDashboard.vue";
import AdminCostumerOrder from "@/components/pages/admin/AdminCostumerOrder.vue";
import AdminOrderReceipt from "@/components/pages/admin/AdminOrderReceipt.vue";
import OwnerDashboard from "@/components/pages/owner/OwnerDashboard.vue";
import OwnerBookSales from "@/components/pages/owner/OwnerBookSales.vue";



const routes = [
    { path: '/', component: LandingPage },
    { path: '/homepage', component: HomePage },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/catalog', component: Catalog },
    { path: '/admin-dashboard', component: AdminDashboard },
    { path: '/admin-costumer-order', component: AdminCostumerOrder },
    { path: '/admin-order-receipt', component: AdminOrderReceipt },
    { path: '/owner-dashboard', component: OwnerDashboard },
    { path: '/owner-book-sales', component: OwnerBookSales },

];

export default routes;