import { useMemo } from "react";

function useCurrencyFormatter() {
  const formatCurrency = useMemo(() => {
    return (amount) => {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
      });

      return formatter.format(amount);
    };
  }, []);

  return { formatCurrency };
}

export default useCurrencyFormatter;
