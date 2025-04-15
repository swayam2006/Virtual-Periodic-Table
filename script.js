const elementData = {
    H: { name: "Hydrogen", atomicNumber: 1, mass: 1.008, electronegativity: 2.2 },
    He: { name: "Helium", atomicNumber: 2, mass: 4.0026, electronegativity: "N/A" },
    O: { name: "Oxygen", atomicNumber: 8, mass: 15.999, electronegativity: 3.44 },
    Na: { name: "Sodium", atomicNumber: 11, mass: 22.99, electronegativity: 0.93 },
    // Add more elements...
  };
  
  function toggleChat() {
    const box = document.getElementById("chatbox");
    box.style.display = box.style.display === "flex" ? "none" : "flex";
  }
  
  function handleKey(event) {
    if (event.key === "Enter") {
      const input = document.getElementById("user-input");
      const message = input.value;
      input.value = "";
      addMessage("You", message);
      respond(message);
    }
  }
  
  function addMessage(sender, text) {
    const messages = document.getElementById("chat-messages");
    const msg = document.createElement("div");
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }
  
  function respond(msg) {
    msg = msg.toLowerCase();
    let response = "Sorry, I couldn't understand. Try asking like 'Tell me about O'";
  
    for (const [symbol, data] of Object.entries(elementData)) {
      if (msg.includes(symbol.toLowerCase()) || msg.includes(data.name.toLowerCase())) {
        response = `Name: ${data.name}\nAtomic Number: ${data.atomicNumber}\nMass: ${data.mass}\nElectronegativity: ${data.electronegativity}`;
        break;
      }
    }
  
    addMessage("Bot", response);
  }
  function clearChat() {
    const messages = document.getElementById("chat-messages");
    messages.innerHTML = "";
  }