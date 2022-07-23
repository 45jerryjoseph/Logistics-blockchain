import "regenerator-runtime";
import React from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { login } from "./assets/js/near/utils";
import getConfig from "./assets/js/near/config";
import Supplier from "./pages/supplier/Supplier";
import Manage from "./pages/components/Manage";
import Hospital from "./pages/hospitals/Hospital"

export default function App() {
  const [showNotification, setShowNotification] = React.useState(false);
  const [restaurant, setRestaurant] = React.useState({});

  console.log(restaurant._id ? "true" : "false");
  console.log(restaurant);

  React.useEffect(() => {}, []);

  // if not signed in, return early with sign-in prompt
  if (!window.walletConnection.isSignedIn()) {
    return (
      <main>
        <h1>
          <label
            htmlFor="greeting"
            style={{
              color: "var(--secondary)",
              borderBottom: "2px solid var(--secondary)",
            }}
          >
            hello
          </label>
          ! Welcome to NEAR!
        </h1>
        <p>
          Welcome to logistics on blockchain. To try it out, you need to sign in
          using the NEAR Wallet. It is very simple, just use the button below.
        </p>
        <p>
          Do not worry, this app runs in the test network ("testnet"). It works
          just like the main network ("mainnet"), but using NEAR Tokens that are
          only for testing!
        </p>
        <p style={{ textAlign: "center", marginTop: "2.5em" }}>
          <button onClick={login}>Sign in</button>
        </p>
      </main>
    );
  }

  return (
    // use React Fragment, <>, to avoid wrapping elements in unnecessary divs
    <>
      <Routes>
        <Route exact path="/supplier" element={<Supplier />} />
        <Route exact path="/supplier/manage" element={<Manage />} />
        <Route exact path="/hospital" element={<Hospital />} />
      </Routes>
      {showNotification && <Notification />}
    </>
  );
}

// this component gets rendered by App after the form is submitted
function Notification() {
  const { networkId } = getConfig(process.env.NODE_ENV || "development");
  const urlPrefix = `https://explorer.${networkId}.near.org/accounts`;

  return (
    <aside>
      <a
        target="_blank"
        rel="noreferrer"
        href={`${urlPrefix}/${window.accountId}`}
      >
        {window.accountId}
      </a>
      {
        " " /* React trims whitespace around tags; insert literal space character when needed */
      }
      called method: 'set_greeting' in contract:{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href={`${urlPrefix}/${window.contract.contractId}`}
      >
        {window.contract.contractId}
      </a>
      <footer>
        <div>✔ Succeeded</div>
        <div>Just now</div>
      </footer>
    </aside>
  );
}
