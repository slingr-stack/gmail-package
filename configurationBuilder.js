/****************************************************
 Configuration builder

 The configuration object should be built to configure the package dependencies

 ****************************************************/

let configurationBuilder = function (config) {
    config.oauth = {
        id: config.id || 'installationInfo-Gmail-User-'+sys.context.getCurrentUserRecord().id(),
        authUrl: 'https://accounts.google.com/o/oauth2/auth',
        accessTokenUrl: 'https://oauth2.googleapis.com/token',
        clientId: config.clientId,
        clientSecret: config.clientSecret,
        scope: 'https://mail.google.com/ https://www.googleapis.com/auth/gmail.compose https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly',
        state: config.state,
        oauthCallback: config.oauthCallback
	};
    return config;
}