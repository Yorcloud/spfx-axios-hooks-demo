import * as React from "react";
import styles from "./BitcoinPrice.module.scss";
import { IBitcoinPriceProps } from "./IBitcoinPriceProps";
import { FunctionComponent } from "react";
import { ICurrentPrice } from "./ICurrentPrice";

import useAxios from 'axios-hooks';

const BitcoinPrice: FunctionComponent<IBitcoinPriceProps> = (props) => {

  const [{ data, loading, error }, refetch] = useAxios(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );

  return (
    <>
      {error && "Error!"}
      {loading && "Loading..."}
      {data &&
        [data].map((o: ICurrentPrice, index) => {

			
          return <div key={index}>
			  <p>Last Updated: {o.time.updated}</p>
			  <p>Disclaimer: {o.disclaimer}</p>
			  <p>Currency: {o.chartName}</p>
			  <p>{<span dangerouslySetInnerHTML={{__html: o.bpi.GBP.symbol}} />} {o.bpi.GBP.rate_float.toFixed(2)} {o.bpi.GBP.description}</p>
			  <p>{<span dangerouslySetInnerHTML={{__html: o.bpi.EUR.symbol}} />} {o.bpi.EUR.rate_float.toFixed(2)} {o.bpi.EUR.description}</p>
			  <p>{<span dangerouslySetInnerHTML={{__html: o.bpi.USD.symbol}} />} {o.bpi.USD.rate_float.toFixed(2)} {o.bpi.USD.description}</p>
			
			  <p><a href='https://www.coindesk.com/price/bitcoin'>Powered by Coindesk </a></p>
			  <button onClick={async () => {await refetch();}}>refetch</button>
		  </div>;
        })}
    </>
  );
};
export default BitcoinPrice;
