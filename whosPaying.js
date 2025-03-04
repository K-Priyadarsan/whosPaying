function whosPaying(names) {

    let randomNumber = Math.floor(Math.random() * names.length);
    
    return names[randomNumber] + " is going to buy lunch today!";
    
}
