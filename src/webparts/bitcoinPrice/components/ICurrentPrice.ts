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
