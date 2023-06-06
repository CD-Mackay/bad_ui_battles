import React from "react";

const Accounts = ({ accounts }) => {
  console.log("accounts", accounts);

  const AccountItem = ({account}) => {
    return <p>{account.username}</p>;
  };
  return (
    <div>
      {accounts.map((element, index) => {
        return <AccountItem account={element} key={index} />;
      })}
    </div>
  );
};

export default Accounts;
