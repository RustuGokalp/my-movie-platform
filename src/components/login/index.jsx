"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginSchema } from "@/utils/validationShemas";
import {
  createRequestToken,
  validateWithLogin,
  createSession,
} from "@/services/movie";
import styles from "./styles.module.css";

const Login = () => {
  const handleLogin = async (values, { setErrors }) => {
    try {
      const requestToken = await createRequestToken();

      const validatedToken = await validateWithLogin(
        values?.username,
        values?.password,
        requestToken
      );
      if (validatedToken) {
        await createSession(validatedToken);
      }
    } catch (error) {
      const errorMessage = error.message || "Login failed. Please try again.";
      setErrors({
        server: errorMessage,
      });
    }
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleLogin}
    >
      {({ errors }) => (
        <Form className={styles.loginPage}>
          <div className={styles.logoContainer}>
            <Image width={50} height={50} src="/image.png" alt="Netfilm Logo" />
            <h3>NETFILMS</h3>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <Field
              id="username"
              name="username"
              placeholder="Username"
              className={styles.inputField}
            />
            <ErrorMessage
              name="username"
              component="div"
              className={styles.errorText}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <Field
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              className={styles.inputField}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.errorText}
            />
          </div>

          {errors.server && (
            <div className={styles.errorText}>{errors.server}</div>
          )}

          <button type="submit" className={styles.submitButton}>
            Login
          </button>

          <div className={styles.footer}>
            Not a member?{" "}
            <Link href="https://www.themoviedb.org/signup" target="_blank">
              Sign up now
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
