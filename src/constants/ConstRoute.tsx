import CustomerDetailPage from '@pages/customer-detail';
import CustomerListPage from '@pages/customer-list';
import HomePage from '@pages/home';
import LoginPage from '@pages/login';

export enum EnumRouteUrl {
  HOME = '/',
  LOGIN = '/login',
  CUSTOMER_LIST = '/customerList',
  CUSTOMER_DETAIL = '/customerDetail',
}

export interface RouteInterface {
  path: EnumRouteUrl;
  exact: boolean;
  component: any;
}

export const LOGIN_ROUTES: RouteInterface[] = [
  {
    path: EnumRouteUrl.LOGIN,
    exact: true,
    component: LoginPage,
  },
];

export const ROUTES: RouteInterface[] = [
  { path: EnumRouteUrl.HOME, exact: true, component: HomePage },
  { path: EnumRouteUrl.CUSTOMER_LIST, exact: true, component: CustomerListPage },
  { path: EnumRouteUrl.CUSTOMER_DETAIL, exact: true, component: CustomerDetailPage },
];
