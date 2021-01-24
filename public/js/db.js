db = firebase.firestore();
console.log(db)


db.collection('users').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
    })
})