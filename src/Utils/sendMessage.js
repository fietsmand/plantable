const { createNotificationSubscription, postSubscription } = require('./swUtils');

const subscription = createNotificationSubscription();
const getSubscription = async () => subscription;

postSubscription(getSubscription());
