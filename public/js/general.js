function premiumNotification() {
    if (Notification.permission === "granted") {
        const premium_notification = new Notification("Premium memberships", {
            body: "Premium memberships will be attainable after 2 weeks.",
            requireInteraction: true,
        });
    } else if (Notification.permission === "default") {
        Notification.requestPermission().then(permission => {
            const premium_notification = new Notification("Premium memberships", {
                body: "Premium memberships will be attainable after 2 weeks.",
                requireInteraction: true,
            });
        })
    } else if (Notification.permission === "denied") {
        Notification.requestPermission().then(permission => {
            const premium_notification = new Notification("Premium memberships", {
                body: "Premium memberships will be attainable after 2 weeks.",
                requireInteraction: true,
            });
        })
    }
}

const searchbar = document.querySelector('#searchbar');
searchbar.value = "   Help : https://forms.gle/bmcJZV5BULKV1qn97";