import LayoutWithFooter from '~/components/Layouts/LayoutWithFooter';
import Mentors from '~/components/Mentors';
import Orders from '~/pages/Order';
import Checkout from '~/pages/Checkout';
import CompaniesCampaignHistory from '~/pages/CompaniesCampaignHistory';
import Dashboard from '~/pages/Dashboard';
import Following from '~/pages/Following';
import ForgotPassword from '~/pages/ForgotPassword';
import LandingPage from '~/pages/LandingPage';
import { MentorProfile } from '~/pages/MentorProfile';
import SignInSide from '~/pages/SignInSide';
import SignUp from '~/pages/SignUp';
import { UserProfile } from '~/pages/UserProfile';
// import DefaultLayout from '~/components/Layouts/DefaultLayout';



const publicRoutes = [
    { path: '/', component: LandingPage, layout: LayoutWithFooter },
    { path: '/following', component: Following },
    { path: '/mentor', component: Mentors },
    { path: '/mentor/id', component: MentorProfile },
    { path: '/user/profile', component: UserProfile },
    { path: '/company/campaign', component: CompaniesCampaignHistory },
    { path: '/admin/dashboard/orders', component: Orders,layout: null},

    //Auth
    { path: '/sign-in', component: SignInSide, layout: null },
    { path: '/sign-up', component: SignUp, layout: null },
    { path: '/forgot-password', component: ForgotPassword, layout: null },

    { path: '/checkout', component: Checkout, layout: null },

    //Admin
    { path: '/admin/dashboard', component: Dashboard, layout: null },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
