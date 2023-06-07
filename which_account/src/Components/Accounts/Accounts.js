import React from "react";
import "./Accounts.css";

const Accounts = ({ accounts, setView }) => {
  const AccountItem = ({ account }) => {
    return (
      <div className="account-item">
        <p>{account.username}</p>
        <button className="account-button" onClick={() => setView("success")}>Login!</button>
      </div>
    );
  };
  return (
    <div>
      <h3>
        Looks like that password belongs to a few accounts, please select which
        one is yours (Honour system)
      </h3>
      {accounts.map((element, index) => {
        return <AccountItem account={element} key={index} />;
      })}
    </div>
  );
};

export default Accounts;
