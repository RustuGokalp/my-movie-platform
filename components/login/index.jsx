"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LoginPage, {
  Logo,
  Password,
  Footer,
  Username,
} from "@react-login-page/page6";
import {
  createRequestToken,
  validateWithLogin,
  createSession,
  handleAuthorization,
} from "@/services/movie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const requestToken = await createRequestToken();

      handleAuthorization(requestToken);

      const validatedToken = await validateWithLogin(
        username,
        password,
        requestToken
      );

      if (validatedToken) {
        await createSession(validatedToken);
      }
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <LoginPage style={{ height: "90vh" }}>
        <Logo>
          <Image src="/image.png" alt="Netfilm Logo" width={55} height={50} />
        </Logo>

        <Username
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <Footer>
          Not a member?{" "}
          <Link href="https://www.themoviedb.org/signup" target="_blank">
            Sign up now
          </Link>
        </Footer>
      </LoginPage>
    </form>
  );
};

export default Login;
