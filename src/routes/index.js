import LayoutWithFooter from '~/components/Layouts/LayoutWithFooter';
import Mentors from '~/components/Mentors';
import Orders from '~/pages/Order';
import Checkout from '~/pages/Checkout';
import Companies from '~/pages/Companies';
import CompaniesCampaignDetail from '~/pages/CompaniesCampaignDetails';
import CompaniesCampaignHistory from '~/pages/CompaniesCampaignHistory';
import CompanyDetails from '~/pages/CompanyDetails';
import Dashboard from '~/pages/Dashboard';
import Following from '~/pages/Following';
import ForgotPassword from '~/pages/ForgotPassword';
import LandingPage from '~/pages/LandingPage';
import { MentorProfile } from '~/pages/MentorProfile';
import SignInSide from '~/pages/SignInSide';
import SignUp from '~/pages/SignUp';
import { UserProfile } from '~/pages/UserProfile';
import UserProfilesTest from '~/pages/SignUp/testUploadImage';
import { Application } from '~/pages/Application';
import MentorAdminDashboard from '~/pages/MentorAdminDashboard';
import CampaignAdminDashboard from '~/pages/CampaignAdminDashboard';
import CreateMentorAccount from '~/pages/CreateMentorAccount';
import CreateMentorProfile from '~/pages/CreateMentorProfile';
import MentorHistoryForCompany from '~/pages/MentorHistoryForCompany';
import MentorLandingPage from '~/pages/MentorLandingPage';
import CampaignDetail from '~/pages/MentorCampainDetailPage';
import MenteeAdminDashboard from '~/pages/MenteeAdminDashboard';
import AccountAdminDashboard from '~/pages/AccountAdminDashboard';
// import DefaultLayout from '~/components/Layouts/DefaultLayout';

const publicRoutes = [
    { path: '/', component: LandingPage, layout: LayoutWithFooter },
    { path: '/following', component: Following },
    { path: '/mentors', component: Mentors },
    { path: '/mentor/:mentorId', component: MentorProfile },
    { path: '/user/profile', component: UserProfile },
    { path: '/user/apply', component: Application },

    //Company
    { path: '/company', component: Companies },
    { path: '/company/:companyId', component: CompanyDetails },
    { path: '/company/campaign-history', component: CompaniesCampaignHistory },
    { path: '/company/campaign-details/:campaignId', component: CompaniesCampaignDetail },
    { path: '/company/create-mentor-account', component: CreateMentorAccount },
    { path: '/company/create-mentor-profile', component: CreateMentorProfile },
    { path: '/company/create-mentor-History', component: MentorHistoryForCompany },

    //Auth
    { path: '/sign-in', component: SignInSide, layout: null },
    { path: '/sign-up', component: SignUp, layout: null },
    { path: '/forgot-password', component: ForgotPassword, layout: null },

    { path: '/checkout', component: Checkout, layout: null },

    //Admin
    { path: '/admin/dashboard', component: Dashboard, layout: null },
    { path: '/test', component: UserProfilesTest, layout: null },
    { path: '/admin/dashboard/orders', component: Orders, layout: null },
    { path: '/admin/dashboard/campaign', component: CampaignAdminDashboard, layout: null },
    { path: '/admin/dashboard/mentor', component: MentorAdminDashboard, layout: null },
    { path: '/admin/dashboard/mentee', component: MenteeAdminDashboard, layout: null },
    { path: '/admin/dashboard/account', component: AccountAdminDashboard, layout: null },

    //Mentor
    { path: '/campaigns', component: MentorLandingPage, layout: LayoutWithFooter },

    // Campaign detail route
    { path: '/campaign/:campaignName', component: CampaignDetail, layout: LayoutWithFooter },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
