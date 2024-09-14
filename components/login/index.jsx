"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LoginPage, { Logo, Password, Footer } from "@react-login-page/page6";

const Login = () => (
  <LoginPage style={{ height: "90vh" }}>
    <Logo>
      <Image src="/image.png" alt="My Image" width={55} height={50} />
    </Logo>
    <Password />
    <Footer>
      Not a member? <Link href="https://www.themoviedb.org/">Sign up now</Link>
    </Footer>
  </LoginPage>
);

export default Login;
