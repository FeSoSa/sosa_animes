import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../../components/Nav/Layout";
import { Context } from "../../../../contexts/ContextProvider";
import BannerHome from "../../../../components/Home/banner/BannerHome";
import { banner } from "../../../../utils/apiVariables";
import { getDetails } from "../../../../utils/getDetails";
import { useRouter } from "next/router";
import BannerInfo from "../../../../components/Home/banner/BannerInfo";
import DetailsTop from "../../../../components/Detail/DetailsTop";
import { Translations } from "../../../../constants/Translations";

export default function Details() {
  const router = useRouter();
  const { type, id } = router.query as { type: string; id: string };
  const { selectedAnime, setSelectedAnime} = useContext(Context);
  const {language} = useContext(Context)
 

  async function getDetail() {
    try {
      const response = await getDetails(type, id,language);
      setSelectedAnime(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (type && id) {
      getDetail();
    }
  }, [type, id, getDetail]);

  return (
    <>
      {selectedAnime && (
        <main>

          <div style={{
            height: '100vh',
            backgroundImage: `url(${banner}${selectedAnime?.backdrop_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          >
            <div className="detail-gradient" />
          </div>

          <section className="absolute bottom-0 max-md:mt-[-60vh]">
            <DetailsTop Anime={selectedAnime} />
          </section>

        </main>
      )}
    </>
  );
}
