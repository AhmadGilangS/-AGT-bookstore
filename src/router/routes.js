// import Homepage from '@/components/pages/home/HelloWorld.vue';
import Login from '@/components/pages/login/Login.vue';
import Register from '@/components/pages/register/Register.vue';
import Catalog from '@/components/pages/customer/Customer.vue';
import AdminAccountSettings from "@/components/pages/admin/AdminAccountSettings.vue";
import AdminCostumerOrder from "@/components/pages/admin/AdminCostumerOrder.vue";
import AdminOrderReceipt from "@/components/pages/admin/AdminOrderReceipt.vue";
import OwnerAccountSettings from "@/components/pages/owner/OwnerAccountSettings.vue";
import OwnerBookSales from "@/components/pages/owner/OwnerBookSales.vue";



const routes = [
    // { path: '/', component: Homepage },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/catalog', component: Catalog },
    { path: '/Admin-Account-Settings', component: AdminAccountSettings },
    { path: '/Admin-Costumer-Order', component: AdminCostumerOrder },
    { path: '/Admin-Order-Receipt', component: AdminOrderReceipt },
    { path: '/Owner-Account-Settings', component: OwnerAccountSettings },
    { path: '/Owner-Book-Sales', component: OwnerBookSales },

];

export default routes;