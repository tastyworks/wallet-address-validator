declare module '@tastyworks/wallet-address-validator' {
    const CAValidator: {
      isCurrencySupported(coin: string): boolean
      validate(value: string, coin: string): boolean
    }
    export default CAValidator
  }