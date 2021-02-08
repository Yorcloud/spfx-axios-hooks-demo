// Generated using quicktype (https://quicktype.io/typescript)
// quicktype https://api.coindesk.com/v1/bpi/currentprice.json --lang ts --just-types -o ICurrentPrice.ts

export interface ICurrentPrice {
    time:       Time;
    disclaimer: string;
    chartName:  string;
    bpi:        Bpi;
}

export interface Bpi {
    USD: Eur;
    GBP: Eur;
    EUR: Eur;
}

export interface Eur {
    code:        string;
    symbol:      string;
    rate:        string;
    description: string;
    rate_float:  number;
}

export interface Time {
    updated:    string;
    updatedISO: Date;
    updateduk:  string;
}
