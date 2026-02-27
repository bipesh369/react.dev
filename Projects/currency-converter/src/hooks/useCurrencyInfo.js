import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    // FIX 1: Use the updated API URL structure
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

    fetch(url)
      .then((res) => {
        // FIX 2: Check if the response is actually valid JSON
        if (!res.ok) throw new Error("Network response was not ok")
        return res.json()
      })
      .then((res) => {
        // The API returns an object where the key is the currency name
        setData(res[currency])
      })
      .catch((err) => console.error("Fetch error:", err))
      
  }, [currency])

  // This log will show the data once the component re-renders
  return data
}

export default useCurrencyInfo