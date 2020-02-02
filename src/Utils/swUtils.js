import config from 'Config';

export const isPushNotificationSupported = () => 'serviceWorker' in navigator && 'PushManager' in window;

export const registerServiceWorker = () => navigator.serviceWorker.register('/serviceWorker.js');

export const askUserPermission = async () => Notification.requestPermission();

export const createNotificationSubscription = async () => {
  // wait for service worker installation to be ready
  const serviceWorker = await navigator.serviceWorker.ready;
  const { applicationServerKey } = config;
  // subscribe and return the subscription
  return serviceWorker.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey,
  });
};


export async function postSubscription(subscription) {
  const response = await fetch('https://push-notification-demo-server.herokuapp.com/subscription', {
    credentials: 'omit',
    headers: { 'content-type': 'application/json;charset=UTF-8', 'sec-fetch-mode': 'cors' },
    body: JSON.stringify(subscription),
    method: 'POST',
    mode: 'cors',
  });
  return response.json();
}
