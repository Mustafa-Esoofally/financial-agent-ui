import React from "react";
import { Green, Pink } from "@/styles/colors";
import { PriceData } from "@/components/prebuilt/chart-container";

interface Props {
  ticker: string,
  prices: PriceData[],
}
export const ChartHeader: React.FC<Props> = ({
  ticker, prices,
}) => {
  // Compute percent and dollar difference between end price and start price
  const startPrice = prices[0].close;
  const endPrice = prices[prices.length - 1].close;
  const percentDifference = ((endPrice - startPrice) / startPrice) * 100;
  const dollarDifference = endPrice - startPrice;

  return (
    <div>
      <div style={{ fontSize: "28px" }}>
        {ticker}
      </div>
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        ${prices[prices.length - 1].close.toFixed(2)}
      </div>
      <div style={{ fontSize: "12px", fontWeight: "bold", display: "flex" }}>
        <div style={{ marginRight: "8px" }}>
          {dollarDifference > 0 ? (
            <span style={{ color: Green }}>+${dollarDifference.toFixed(2)}</span>
          ) : (
            <span style={{ color: Pink }}>-${Math.abs(dollarDifference).toFixed(2)}</span>
          )}
        </div>
        <div>
          {percentDifference > 0 ? (
            <span style={{ color: Green }}>(+{percentDifference.toFixed(2)}%)</span>
          ) : (
            <span style={{ color: Pink }}>({percentDifference.toFixed(2)}%)</span>
          )}
        </div>
      </div>
    </div>
  );
};