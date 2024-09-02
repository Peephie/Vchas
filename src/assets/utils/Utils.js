class Utils {
  // card methods 
  static formatCard(card) {
    if (!card) return card;

    card.id = Utils.formatCardId(card.id);
    card.primaryWord = Utils.uppercaseString(card.primaryWord);
    card.relatedWord = Utils.uppercaseString(card.relatedWord);
    card.description = Utils.lowercaseString(card.description);

    return card;
  }

  static getCardSize(size) {
    const cardSize = {
      padding1: 'p-6',
      padding2: 'p-10',
      cardMinHeight: 'min-h-64',
      fontSize: 'text-xl',
      cardIdFontSize: 'text-6xl',
      arrowSize: 'size-14',
    };

    switch (size) {
      // case 'large':
      //   cardSize.padding1 = 'p-10';
      //   cardSize.padding2 = 'p-13';
      //   cardSize.cardMinHeight = 'min-h-98';
      //   cardSize.fontSize = 'text-4xl';
      //   cardSize.cardIdFontSize = 'text-9xl';
      //   cardSize.arrowSize = 'size-28';
      //   return cardSize;

      case 'large':
        cardSize.padding1 = 'p-10';
        cardSize.padding2 = 'p-16';
        cardSize.cardMinHeight = 'min-h-98';
        cardSize.fontSize = 'text-4xl';
        cardSize.cardIdFontSize = 'text-9xl';
        cardSize.arrowSize = 'size-28';
        return cardSize;
    
      default:
        return cardSize;
    }
  }

  // text methods
  static formatCardId(id) {
    if (!id || typeof id !== 'number') return id;
    return id < 10 ? `0${id.toString()}` : id;
  }

  static uppercaseString(string) {
    if (!string) return string;
    return string.toUpperCase();
  }

  static lowercaseString(string) {
    if (!string) return string;
    return string.toLowerCase();
  }
}

export default Utils;