/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable func-names */
import axios from 'axios';
import {APP, MANAGE} from './serverConfig';

const App_Services = axios.create({
  baseURL: APP.BASE_URL,
  timeout: 3000,
});

const Manage_Services = axios.create({
  baseURL: MANAGE.BASE_URL,
  timeout: 3000,
});

export {App_Services, Manage_Services};
