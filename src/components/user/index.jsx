import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "@/src/components/skeleton";
import { accountDetail, deleteSession } from "@/services/movie";
import styles from "./styles.module.css";
import useAuthStore from "@/store/authStore";
import OutsideClickHandler from "react-outside-click-handler";

const User = () => {
  const [accountInfo, setAccountInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { accountID } = useAuthStore();

  useEffect(() => {
    const fetchAccountDetail = async () => {
      try {
        if (accountID) {
          const data = await accountDetail(accountID);
          setAccountInfo(data);
        }
      } catch (error) {
        console.error("Error fetching account details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (accountID) {
      fetchAccountDetail();
    } else {
      setIsLoading(false);
    }
  }, [accountID]);

  if (isLoading) {
    return (
      <div style={{ width: "100px", height: "40px" }}>
        <Skeleton width="100%" height="100%" />
      </div>
    );
  }

  const openUserInfoArea = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSignout = async () => {
    try {
      const authStorage = localStorage.getItem("auth-storage");
      const sessionID = authStorage
        ? JSON.parse(authStorage)?.state?.sessionID
        : null;

      if (sessionID) {
        await deleteSession(sessionID);
        setAccountInfo(null);
      }
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div>
      {accountInfo ? (
        <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
          <div onClick={openUserInfoArea} style={{ position: "relative" }}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${accountInfo?.avatar?.tmdb?.avatar_path}`}
              width={30}
              height={30}
              className={styles.userImg}
              alt={`${accountInfo.name}'s Profile Photo`}
              unoptimized
            />
            {isOpen && (
              <div className={styles.userMenu}>
                <Link href="/">Your Watchlist</Link>
                <Link href="/">Your Favorites</Link>
                <p onClick={handleSignout} className={styles.signOutBtn}>
                  Sign out
                </p>
              </div>
            )}
          </div>
        </OutsideClickHandler>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default User;
