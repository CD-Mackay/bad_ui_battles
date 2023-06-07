import React from "react";
import './Accounts.css';


const Accounts = ({ accounts }) => {

  const AccountItem = ({account}) => {
    return <p>{account.username}</p>;
  };
  return (
    <div>
      <p>Looks like that password belongs to a few accounts, please select which one is yours (Honour system)</p>
      {accounts.map((element, index) => {
        return <AccountItem account={element} key={index} />;
      })}
    </div>
  );
};

export default Accounts;
