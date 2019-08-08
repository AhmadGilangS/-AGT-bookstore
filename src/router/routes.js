import Homepage from '@/components/pages/home/HelloWorld.vue';
import Login from '@/components/pages/login/Login.vue';
import Register from '@/components/pages/register/Register.vue';
import Catalog from '@/components/pages/customer/Customer.vue';
import AdminDashboard from "@/components/pages/admin/AdminDashboard.vue";
import AdminCostumerOrder from "@/components/pages/admin/AdminCostumerOrder.vue";
import AdminOrderReceipt from "@/components/pages/admin/AdminOrderReceipt.vue";
import OwnerDashboard from "@/components/pages/owner/OwnerDashboard.vue";
import OwnerBookSales from "@/components/pages/owner/OwnerBookSales.vue";



const routes = [
    { path: '/', component: Homepage },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/catalog', component: Catalog },
    { path: '/Admin-Dashboard', component: AdminDashboard },
    { path: '/Admin-Costumer-Order', component: AdminCostumerOrder },
    { path: '/Admin-Order-Receipt', component: AdminOrderReceipt },
    { path: '/Owner-Dashboard', component: OwnerDashboard },
    { path: '/Owner-Book-Sales', component: OwnerBookSales },

];

export default routes;