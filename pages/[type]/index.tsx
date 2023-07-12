import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  const { type } = router.query as { type: string };

  useEffect(() => {
    if (type) {
      if (type === "tv") {
        router.push("/tv/1");
      } else if (type === "movie") {
        router.push("/movie/1");
      }
    }
  }, [router, type]);

  return (
    <div className="w-screen h-screen flex justify-center items-center text-4xl bg-background">
      Redirecionando...
    </div>
  );
};

export default Index;
