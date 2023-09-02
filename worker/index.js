'use strict'

import Firebase from '../services/firebase.service';
import { ref, onChildChanged } from 'firebase/database';

let i = 0;
let userId = "";

function sayHello(name) {
  i++;
  // console.log(`Hello, ${name} ${i++}`)
}

setInterval(sayHello, 1000, "Valik")

// const val = async () =>{
//   registration.showNotification("Valik", {
//     body: "ky ky",
//     icon: '/icons/android-chrome-192x192.png'
//   })
// }

// val();

// alert("bla bla bla");

const subscribeToMessages = async () => {
  onChildChanged(ref(Firebase(), `Messages`), (data) => {
    registration.showNotification("Новое сообщение", {
      body:"Привет",
      icon: '/icons/android-chrome-192x192.png'
    })
  });
}

// self.addEventListener('push', function (event) {
//   const data = JSON.parse(event.data.text())
//   event.waitUntil(
//     registration.showNotification(data.title, {
//       body: data.message,
//       icon: '/icons/android-chrome-192x192.png'
//     })
//   )
// })

// self.addEventListener('notificationclick', function (event) {
//   event.notification.close()
//   event.waitUntil(
//     clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
//       if (clientList.length > 0) {
//         let client = clientList[0]
//         for (let i = 0; i < clientList.length; i++) {
//           if (clientList[i].focused) {
//             client = clientList[i]
//           }
//         }
//         return client.focus()
//       }
//       return clients.openWindow('/')
//     })
//   )
// })
subscribeToMessages();
console.log("Start");


const channelWorkerBroadcast = new BroadcastChannel('channelWorker');
channelWorkerBroadcast.onmessage = (event) => {
  userId = event.data.userId;
}

// self.addEventListener('pushsubscriptionchange', function(event) {
//   event.waitUntil(
//       Promise.all([
//           Promise.resolve(event.oldSubscription ? deleteSubscription(event.oldSubscription) : true),
//           Promise.resolve(event.newSubscription ? event.newSubscription : subscribePush(registration))
//               .then(function(sub) { return saveSubscription(sub) })
//       ])
//   )
// })
