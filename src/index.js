import './style.scss';
import mobileDesktopSwap from './navbar.js';

const mobileDesktopQuery = window.matchMedia('(min-width: 992px)');

mobileDesktopQuery.addEventListener('change', mobileDesktopSwap);
mobileDesktopSwap(mobileDesktopQuery);