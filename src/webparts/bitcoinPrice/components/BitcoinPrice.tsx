import * as React from "react";
import styles from "./BitcoinPrice.module.scss";
import { IBitcoinPriceProps } from "./IBitcoinPriceProps";
import { FunctionComponent } from "react";
import { ICurrentPrice } from "./ICurrentPrice";

import useAxios from "axios-hooks";
import BitcoinItem from "./BitcoinItem";

const BitcoinPrice: FunctionComponent<IBitcoinPriceProps> = (props) => {
  const [{ data, loading, error }, refetch] = useAxios(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );

  return (
    <>
      {error && "Error!"}
      {loading && "Loading..."}
      {data && <BitcoinItem currentPriceItem={data} refetch={refetch} />}
    </>
  );
};
export default BitcoinPrice;
