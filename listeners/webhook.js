/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookGmail = {
    label: 'Catch HTTP Gmail events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/Gmail',
        }
    },
    callback: function(event) {
        sys.logs.info('Received Gmail webhook. Processing and triggering a package event.');
        var body = JSON.stringify(event.data.body);
        var params = event.data.parameters;
        if(true) {
            sys.logs.info('Valid webhook received. Triggering event.');
            sys.events.triggerEvent('gmail:webhook', {
                body: body,
                params: params
            });
            return "ok";
        }
        else throw new Error("Invalid webhook");
    }
};
