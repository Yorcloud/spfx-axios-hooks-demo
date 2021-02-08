import {
  IStackTokens,
  Link,
  PrimaryButton,
  Stack,
} from "office-ui-fabric-react";
import * as React from "react";
import { FunctionComponent } from "react";

import { ICurrentPrice } from "./ICurrentPrice";

interface IBitcoinItemProps {
  currentPriceItem: ICurrentPrice;
  refetch: any;
}

const BitcoinItem: FunctionComponent<IBitcoinItemProps> = (props) => {
  const itemStackTokens: IStackTokens = { childrenGap: 10 };
  return (
    <Stack tokens={itemStackTokens}>
      <Stack.Item>
        Last Updated: {props.currentPriceItem.time.updated}
      </Stack.Item>
      <Stack.Item>Disclaimer: {props.currentPriceItem.disclaimer} </Stack.Item>
      <Stack.Item>Currency: {props.currentPriceItem.chartName} </Stack.Item>
      <Stack.Item>
        {[
          <span key='gbp'
            dangerouslySetInnerHTML={{
              __html: props.currentPriceItem.bpi.GBP.symbol,
            }}
          />,
          ` ${props.currentPriceItem.bpi.GBP.rate_float.toFixed(2)} ${
            props.currentPriceItem.bpi.GBP.description
          }`,
        ]}
      </Stack.Item>
      <Stack.Item>
        {[
          <span key='eur'
            dangerouslySetInnerHTML={{
              __html: props.currentPriceItem.bpi.EUR.symbol,
            }}
          />,
          ` ${props.currentPriceItem.bpi.EUR.rate_float.toFixed(2)} ${
            props.currentPriceItem.bpi.EUR.description
          }`,
        ]}
      </Stack.Item>
      <Stack.Item>
        {[
          <span key='gbp'
            dangerouslySetInnerHTML={{
              __html: props.currentPriceItem.bpi.USD.symbol,
            }}
          />,
          ` ${props.currentPriceItem.bpi.USD.rate_float.toFixed(2)} ${
            props.currentPriceItem.bpi.USD.description
          }`,
        ]}
      </Stack.Item>

      <Stack.Item>
        <Link href="https://www.coindesk.com/price/bitcoin">
          Powered by Coindesk
        </Link>
      </Stack.Item>
      <Stack.Item>
        <PrimaryButton
          onClick={async () => {
            await props.refetch();
          }}
        >
          Refresh
        </PrimaryButton>
      </Stack.Item>
    </Stack>
  );
};

export default BitcoinItem;
