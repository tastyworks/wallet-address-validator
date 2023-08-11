declare const WAValidator: {
    isCurrencySupported(coin: string): boolean,
    validate(value: string, coin: string): boolean
}

export default WAValidator