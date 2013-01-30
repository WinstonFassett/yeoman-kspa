define(['crossroads', 'hasher', 'module'],
    function (crossroads, hasher, module) {
    // does a sort of r-v-c thing

    var config = module.config();;

    function configure(newConfig){
        // quick and dirty -- really should extend
        console.log('configuring', config, newConfig)
        config = newConfig;
    }

    function init() {
        
        //log('configuring hasher');
        hasher.initialized.add(initHash); //parse initial hash
        hasher.changed.add(parseHash); //parse hash changes
        // log('configured hasher');
    }

    function start(cb) {
        // console.log('initializing hasher');
        hasher.init(); //start listening for history change
        if (cb) cb();
    }

    function route(uri, defaultOpts) {
        // log('routing', uri, crossroads);
        defaultOpts = defaultOpts || [];
        defaultOpts.unshift(uri);
        crossroads.parse(uri, defaultOpts);
    }

    function initHash(newHash, oldHash) {
        if (newHash) {
            parseHash(newHash, oldHash);
        } else {
            if (config.defaultRoute) {
                // log('going to default route:', config.defaultRoute);
                hasher.setHash(config.defaultRoute);
            }
        }
    }

    function parseHash(newHash, oldHash) {
        if (newHash) {
            // console.log('parsing hash', arguments);
            route(newHash);
        } 
    }

    function registerRoute(path, handler) {
        // console.log('registering route!!', crossroads, arguments);
        crossroads.addRoute(path, function () {
            // console.log('handling route', path);
            handler.apply(handler, arguments);
        });
    }

    init();
    return {
        start: start,
        route: route,
        configure: configure,
        get: registerRoute,
    };

});