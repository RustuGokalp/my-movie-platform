import React from "react";
import Link from "next/link";

const User = ({ accountID }) => {
  return (
    <div>
      {accountID ? <div>Avatar Icon</div> : <Link href="/login">Login</Link>}
    </div>
  );
};

export default User;
