import * as React from "react";
import styles from "./BitcoinPrice.module.scss";
import { IBitcoinPriceProps } from "./IBitcoinPriceProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { FunctionComponent } from "react";
import useFetch from "use-http";
import { ICurrentPrice } from "./ICurrentPrice";

const BitcoinPrice: FunctionComponent<IBitcoinPriceProps> = (props) => {
  const options = {};

  

  // these options accept all native `fetch` options
  // the last argument below [] means it will fire onMount (GET by default)
  const { get, loading, error, data = null } = useFetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    options,
    []
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
			  <button onClick={() => get()}>Refresh</button>
		  </div>;
        })}
    </>
  );
};
export default BitcoinPrice;
