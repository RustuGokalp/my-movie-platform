import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "@/src/components/skeleton";
import { accountDetail } from "@/services/movie";
import styles from "./styles.module.css";
import useAuthStore from "@/store/store";

const User = () => {
  const [accountInfo, setAccountInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let [isOpen, setIsOpen] = useState(false);
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
    setIsOpen((isOpen = !isOpen));
  };

  return (
    <div>
      {accountInfo ? (
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
              <p>Watchlist</p>
              <p>Favorites</p>
              <p>Signout</p>
            </div>
          )}
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default User;
