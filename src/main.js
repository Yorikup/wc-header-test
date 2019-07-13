import Vue from 'vue'
import HeaderWC from './components/header-wc';
import wrap from '@vue/web-component-wrapper';

import 'bootstrap/dist/css/bootstrap.min.css'

const WrappedElement = wrap(Vue, HeaderWC);

window.customElements.define('header-wc', WrappedElement);
