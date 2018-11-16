function submit(){
    alert("Mesajul a fost transmis!");
    event.preventDefault(); // disable normal form submit behavior
    return false; // prevent further bubbling of event
}