require.config({
    // main entry point
    deps: ["kspa-foundation/main"],

    paths: {
      // requireJS plugins
      text: 'require/text',
      css: 'require/css',
      // 3rd party libraries
      knockout: 'lib/knockout',
      jquery: 'lib/jquery',
      hasher: 'lib/hasher',
      crossroads: 'lib/crossroads',
      signals: 'lib/signals',
      bootstrap: 'lib/bootstrap/js/bootstrap',
      // sammy is an alternative to crossroads+hasher, but requires jQuery (see shim)
      sammy: 'lib/sammy',

      'foundation.topbar': 'lib/foundation/javascripts/jquery.foundation.topbar'

  },
  shim: {
      jquery: '$',
      bootstrap: { deps: ['jquery'] },
      sammy: { deps: ['jquery'] },

      'foundation.topbar' : { deps: ['jquery'] },
      'lib/foundation/jquery.foundation.accordion': { deps: ['jquery'] }
  }
});
