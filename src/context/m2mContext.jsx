import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  m2mTradeCurrencies,
  m2mTradeAssets,
  paymentLimitWindows,
} from "../utils/data";

const M2MContext = createContext();

const M2MProvider = ({ children }) => {
  const [m2mCurrency, setm2mCurrency] = useState(m2mTradeCurrencies[0]);
  const [m2mAsset, setm2mAsset] = useState(m2mTradeAssets[0]);
  const [m2mCurrentStage, setm2mCurrentStage] = useState(1);
  const [m2mTradeType, setm2mTradeType] = useState("buy");

  const [m2mmargin_type, setm2mMargin_type] = useState("Fixed");
  const [m2mpercent, setm2mPercent] = useState(100);

  let curVal = m2mCurrency.value;
  let assVal = m2mAsset.value;
  let default_price = Number(assVal * curVal);
  let cc = Number((m2mpercent / 100) * default_price);
  const [m2masset_price, setm2masset_price] = useState(cc);

  const [m2moriginal_price, setm2moriginal_price] = useState(default_price);

  //   Create Ad form 2
  const [min_limit, setmin_limit] = useState(
    Number(5 * m2mTradeCurrencies[0].value)
  );
  const [max_limit, setmax_limit] = useState(
    Number(10 * m2mTradeCurrencies[0].value)
  );
  //   console.log({ min_limit });
  const [payment_time_limit, setpayment_time_limit] = useState(
    paymentLimitWindows[0]
  );
  const [fiat_amount, setFiat_amount] = useState(0);
  const [token_amount, setToken_amount] = useState(0);
  const [payment_methods, setpayment_methods] = useState([]);

  //   Create Ad form 3
  const [terms_tags, setterms_tags] = useState([]);
  const [remarks, setremarks] = useState("");
  const [auto_reply, setauto_reply] = useState("");

  useEffect(() => {
    let newPrice = parseFloat(
      (m2mpercent / 100) * parseFloat(m2mAsset.value * m2mCurrency.value)
    );
    setm2masset_price(newPrice);

    let curVal2 = m2mCurrency.value;
    let assVal2 = m2mAsset.value;
    let default_price2 = Number(assVal2 * curVal2);
    setm2moriginal_price(default_price2);

    // let curVal = m2mCurrency.value;
    // let ggggg = Number(m2mAsset.value * curVal);
    // console.log({ ggggg });
    // setm2masset_price(ggggg);

    // let minCurVal = Number(5 * curVal);
    // let maxCurVal = Number(10 * curVal);
    // setmin_limit(minCurVal);
    // setmax_limit(maxCurVal);
  }, [m2mCurrency, m2mAsset, m2mpercent]);

  return (
    <M2MContext.Provider
      value={{
        m2mCurrency,
        setm2mCurrency,
        m2mAsset,
        setm2mAsset,
        m2mCurrentStage,
        setm2mCurrentStage,
        m2mTradeType,
        setm2mTradeType,

        m2mmargin_type,
        setm2mMargin_type,
        m2masset_price,
        setm2masset_price,
        m2mpercent,
        setm2mPercent,
        m2moriginal_price,

        min_limit,
        setmin_limit,
        max_limit,
        setmax_limit,
        payment_time_limit,
        setpayment_time_limit,

        fiat_amount,
        setFiat_amount,
        token_amount,
        setToken_amount,
        payment_methods,
        setpayment_methods,

        terms_tags,
        setterms_tags,
        remarks,
        setremarks,
        auto_reply,
        setauto_reply,
      }}
    >
      {children}
    </M2MContext.Provider>
  );
};

export const useM2MContext = () => useContext(M2MContext);

export default M2MProvider;
