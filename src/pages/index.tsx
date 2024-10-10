// src/pages/index.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";

const HomePageRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para a página /homepage
    router.push("/homepage");
  }, [router]);

  return null;
};

export default HomePageRedirect;
