function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    const isSpam = lowerCaseMessage.includes('spam');
    const isSale = lowerCaseMessage.includes('sale');
    if (isSpam || isSale) {
      return true;
    } else {
      return false;
    }
  }