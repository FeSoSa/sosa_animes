import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/Nav/Layout";
import { Context } from "../../../contexts/ContextProvider";
import BannerHome from "../../../components/Home/banner/BannerHome";
import { banner } from "../../../utils/apiVariables";
import { getDetails } from "../../../utils/getDetails";
import { useRouter } from "next/router";
import BannerInfo from "../../../components/Home/banner/BannerInfo";
import DetailsTop from "../../../components/Detail/DetailsTop";
import { Translations } from "../../../constants/Translations";

export default function Details() {
  const router = useRouter();
  const { type, id } = router.query as { type: string; id: string };

  const { selectedAnime, setSelectedAnime} = useContext(Context);

  const {brLang} = useContext(Context)
  const BR = Translations.BR.lang
  const ENG = Translations.ENG.lang
  const [selectedLang,setSelectedLang] = useState(BR)
  useEffect(() => {
      if(brLang){
          setSelectedLang(BR)
      }else{ setSelectedLang(ENG) }
  },[brLang,selectedLang,BR,ENG])

  async function getDetail() {
    try {
      const response = await getDetails(type, id,selectedLang);
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

          <section className="mt-[-50vh]">
            <DetailsTop Anime={selectedAnime} />
          </section>

        </main>
      )}
    </>
  );
}
