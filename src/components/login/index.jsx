"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginSchema } from "@/utils/validationShemas";
import {
  createRequestToken,
  validateWithLogin,
  createSession,
} from "@/services/movie";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import styles from "./styles.module.css";

const Login = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const openModal = () => setOpen(true);
  const closeModal = () => {
    setOpen(false);
    if (isSuccess) {
      router.push("/");
    }
  };

  const handleLogin = async (values, { setErrors }) => {
    setLoading(true);
    try {
      const requestToken = await createRequestToken();
      const validatedToken = await validateWithLogin(
        values?.username,
        values?.password,
        requestToken
      );
      if (validatedToken) {
        await createSession(validatedToken);
        setIsSuccess(true);
        setModalMessage("Login successful!");
      }
    } catch (error) {
      const errorMessage = error.message || "Login failed. Please try again.";
      setErrors({
        server: errorMessage,
      });
      setIsSuccess(false);
      setModalMessage(errorMessage);
    } finally {
      setLoading(false);
      openModal();
    }
  };

  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ errors }) => (
          <Form className={styles.loginPage}>
            <div className={styles.logoContainer}>
              <Image
                width={50}
                height={50}
                src="/image.png"
                alt="Netfilm Logo"
              />
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
                maxLength={14}
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
                maxLength={14}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.errorText}
              />
            </div>

            {loading ? (
              <div className={styles.loadingOverlay}>
                <div className={styles.spinner}></div>
              </div>
            ) : (
              <button type="submit" className={styles.submitButton}>
                Login
              </button>
            )}

            <Modal
              open={open}
              onClose={closeModal}
              center
              classNames={{
                modal: styles.customModal,
              }}
            >
              <div className={styles.modalContent}>
                <Image
                  className={styles.modelImg}
                  src={isSuccess ? "/success.svg" : "/error.svg"}
                  alt={isSuccess ? "Success" : "Error"}
                  width={150}
                  height={150}
                />
                <h2 className={styles.modalText}>{modalMessage}</h2>
              </div>
            </Modal>

            <div className={styles.footer}>
              Not a member?{" "}
              <Link href="https://www.themoviedb.org/signup" target="_blank">
                Sign up now
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
