// config-overrides.js
module.exports = function override(config, env) {
    if (env === 'development') {
        config.devServer = {
            ...config.devServer,
            setupMiddlewares: (middlewares, devServer) => {
                // Your custom middleware logic here
                // Example: middlewares.push(yourMiddlewareFunction);
                
                return middlewares;
            },
            // Ensure these deprecated options are removed
            // onBeforeSetupMiddleware: () => { ... }, // REMOVE THIS
            // onAfterSetupMiddleware: () => { ... },  // REMOVE THIS
        };
    }
    return config;
};