function greeter(person) {
    let greet;
    if (person == "Jane") {
        greet = "Hi Jane";
    } else {
        greet = "hi there";
    }
    return greet;
}

let user = "Jane";

document.body.textContent = greeter(user);