function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalSum = quantity * pricePerDroid;
    if (totalSum > customerCredits) {
        return 'Insufficient funds!';
    } else {
        return `You ordered ${quantity} droids worth ${totalSum} credits!`
    }
    
}