const GLOBAL_CONFIG = {
    RS: false // Set to true to show Resume Section, false to hide it
};

window.APP_BASE_PATH =
  window.location.hostname.includes('github.io')
    ? '/my_portfolio_site'
    : '';