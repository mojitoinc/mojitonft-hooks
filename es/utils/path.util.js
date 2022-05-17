import isBrowser from './isBrowser';
export var getPath = isBrowser ? window.location.pathname.split('#')[0].split('?')[0].split('/') : [];