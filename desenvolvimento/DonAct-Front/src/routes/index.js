/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import AppRoutes from './app.routes';

import {hot} from 'react-hot-loader'

const Routes = () => {

  return (<AppRoutes />);
};

export default hot(module)(Routes);
