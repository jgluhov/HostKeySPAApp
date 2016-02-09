/**
 * Created by jgluhov on 09/02/16.
 */
import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './app.config';
import home from './features/home';
import admin from './features/admin';

const app = angular.module('app', [uirouter, home, admin])
	.config(config)
	.name;

angular.bootstrap(document, [app]);
