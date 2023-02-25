const CURRENCY_FORMATTER = new Intl.NumberFormat('ja-JP', {
    currency: 'USD',
    style: 'currency'
})

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
}

