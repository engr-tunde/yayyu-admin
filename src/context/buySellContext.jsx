import { createContext, useContext, useState } from "react";
import {
  buySellTradeAssets,
  buySellTradeCurrencies,
} from "../data/generalData";

const BuySellContext = createContext();

const BuySellProvider = ({ children }) => {
  const [page, setpage] = useState(1);
  const [type, settype] = useState("Sell");
  const [recipient, setrecipient] = useState("External");
  const [recipientAddress, setrecipientAddress] = useState("");
  const [recipientNetwork, setrecipientNetwork] = useState("");
  const [bank_name, setbank_name] = useState("");
  const [account_name, setaccount_name] = useState("");
  const [account_number, setaccount_number] = useState("");
  const [token, settoken] = useState(buySellTradeAssets[0]);
  const [currency, setcurrency] = useState(buySellTradeCurrencies[0]);
  const [fiat_amount, setfiat_amount] = useState(0);
  const [token_amount, settoken_amount] = useState(0);

  const [errors, seterrors] = useState({});

  return (
    <BuySellContext.Provider
      value={{
        page,
        setpage,
        type,
        settype,
        recipient,
        setrecipient,
        recipientAddress,
        setrecipientAddress,
        recipientNetwork,
        setrecipientNetwork,
        bank_name,
        setbank_name,
        account_name,
        setaccount_name,
        account_number,
        setaccount_number,
        token,
        settoken,
        currency,
        setcurrency,
        errors,
        seterrors,

        fiat_amount,
        setfiat_amount,
        token_amount,
        settoken_amount,
      }}
    >
      {children}
    </BuySellContext.Provider>
  );
};

export const useBuySellContext = () => useContext(BuySellContext);

export default BuySellProvider;
