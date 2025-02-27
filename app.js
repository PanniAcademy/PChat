// Firebase Configuration (Make sure firebase-config.js is included)
firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "login.html"; // Redirect to login if not authenticated
    }
});

// Get user details
const userPhone = firebase.auth().currentUser?.phoneNumber;

// Add Contact
function addContact() {
    let contactPhone = document.getElementById("contactPhone").value;
    if (!contactPhone) return alert("Enter a valid phone number!");

    db.collection("contacts").add({
        owner: userPhone,
        contact: contactPhone
    }).then(() => alert("Contact Added!"));
}

// Load Contacts
function loadContacts() {
    db.collection("contacts").where("owner", "==", userPhone).onSnapshot(snapshot => {
        let list = document.getElementById("contactList");
        list.innerHTML = "";
        snapshot.forEach(doc => {
            let li = document.createElement("li");
            li.innerHTML = `<a href="chat.html?phone=${doc.data().contact}">${doc.data().contact}</a>`;
            list.appendChild(li);
        });
    });
}

// Send Message
function sendMessage() {
    const params = new URLSearchParams(window.location.search);
    const recipient = params.get("phone");
    let message = document.getElementById("message").value;
    if (!message) return;

    db.collection("messages").add({
        sender: userPhone,
        recipient: recipient,
        text: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    document.getElementById("message").value = ""; // Clear input
}

// Load Messages
function loadMessages() {
    const params = new URLSearchParams(window.location.search);
    const recipient = params.get("phone");

    db.collection("messages")
      .where("sender", "in", [userPhone, recipient])
      .orderBy("timestamp")
      .onSnapshot(snapshot => {
          let chatBox = document.getElementById("chatBox");
          chatBox.innerHTML = "";
          snapshot.forEach(doc => {
              let msg = document.createElement("div");
              msg.className = doc.data().sender === userPhone ? "myMessage" : "theirMessage";
              msg.innerText = doc.data().text;
              chatBox.appendChild(msg);
          });
      });
}
