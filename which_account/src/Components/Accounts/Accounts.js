import React from "react";
import "./Accounts.css";

const Accounts = ({ accounts, setView, allAccounts }) => {
  const AccountItem = ({ account }) => {
    return (
      <div className="account-item">
        <p>{account.username}</p>
        <button className="account-button" onClick={() => setView("success")}>
          Login!
        </button>
      </div>
    );
  };
  return (
    <div>
      {accounts.length > 0 && (
        <h3>
          Looks like that password belongs to a few accounts, please select
          which one is yours (Honour system)
        </h3>
      )}
      {accounts.length === 0 && (
        <p>
          That password is not linked to any accounts, please select which is
          yours to update password
        </p>
      )}
      {accounts.length > 0 &&
        accounts.map((element, index) => {
          return <AccountItem account={element} key={index} />;
        })}
      {accounts.length === 0 &&
        allAccounts.map((element, index) => {
          return <AccountItem account={element} key={index} />;
        })}
    </div>
  );
};

export default Accounts;
