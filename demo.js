function greeter(person) {
    var greet;
    if (person == "Jane") {
        greet = "Hi Jane";
    }
    else {
        greet = "hi there";
    }
    return greet;
}
var user = "Jane";
document.body.textContent = greeter(user);
