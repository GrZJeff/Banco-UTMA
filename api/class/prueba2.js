class CardGenerator {
    constructor() {
      this.bankIdentifiers = ["400000", "401288", "422222"]; 
    }
  
    generateRandomNumber(length) {
      let number = '';
      for (let i = 0; i < length; i++) {
        number += Math.floor(Math.random() * 10).toString();
      }
      return number;
    }
  
    generateAccountNumber() {
      return this.generateRandomNumber(12); 
    }
  
    generateCardNumber() {
      const bankIdentifier = this.bankIdentifiers[Math.floor(Math.random() * this.bankIdentifiers.length)];
      const accountIdentifier = this.generateRandomNumber(10); 
      const cardNumber = bankIdentifier + accountIdentifier;
      return cardNumber;
    }
  
    generateCVV() {
      return this.generateRandomNumber(3); 
    }
  
    generateExpirationDate() {
      const currentYear = new Date().getFullYear();
      const year = currentYear + Math.floor(Math.random() * 5) + 1; // 
      const month = ("0" + (Math.floor(Math.random() * 12) + 1)).slice(-2); 
      return `${month}/${year}`;
    }
  }
  

  const cardGen = new CardGenerator();
  console.log("Account Number:", cardGen.generateAccountNumber());
  console.log("Card Number:", cardGen.generateCardNumber());
  console.log("CVV:", cardGen.generateCVV());
  console.log("Expiration Date:", cardGen.generateExpirationDate());
  
  