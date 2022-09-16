
import {
    DesktopOutlined,
    HomeOutlined,
    BarChartOutlined,
    SettingOutlined,
    TeamOutlined,
    UserOutlined,
    MonitorOutlined,
    InfoCircleOutlined,
    FundProjectionScreenOutlined,
    SendOutlined,
    BellOutlined,
    SnippetsOutlined
} from '@ant-design/icons';

import loadable from '../helper/router/loadable';

// COMPONENT
// public
const Login = loadable(() => import('../page/login'));
// private
const Home = loadable(() => import('page/home'))
const AboutUs = loadable(() => import('page/about_us'));
const Acc = loadable(() => import('page/account'));

export const ROUTES = {
    // unAuth
    LOGIN: "login",
    // auth
    HOME: "",
    PLAN: 'plan',
    STATISTIC: 'statistic',
    MACHINE_ANALYTIC: 'machine-analytic',
    PRODUCT_STATISTIC: 'statistics',
    SETTING: 'setting',
    ACCOUNT: 'account',
    PROFILE: 'profile',
    ABOUT_US: 'about-us',
    TV_LINK: 'tv-link',
    SEND_EMAIL: 'send-email',
    AREA: 'tv-link/area',
    MACHINE: 'tv-link/machine',
    OPERATE: 'tv-link/operate',
    POWER: 'tv-link/power',
    change_mold_realtime: 'change-mold-realtime',
    Monitor: 'monitor',
};

export const private_route = [
    {
        role: [3, 4],
        path: `/${ROUTES.HOME}`,
        Com: Home,
        name: "home",
        Icon: <HomeOutlined />,
    },
    {
        role: [3, 4, 5],
        path: `/${ROUTES.ABOUT_US}`,
        Com: AboutUs,
        hidden: true,
        name: "about",
        Icon: <InfoCircleOutlined />
    },
];


export const public_route = [
    {
        path: `/${ROUTES.HOME}`,
        Com: Home,
        name: "home",
        Icon: <HomeOutlined />,
    },
    {
        path: `/${ROUTES.LOGIN}`,
        Com: Login,
    },
    {
        path: `/${ROUTES.ACCOUNT}`,
        Com: Acc,
        exact: false,
    },
    {
        path: `/404`,
        Com: () => <div>2223</div>,
    }
];
