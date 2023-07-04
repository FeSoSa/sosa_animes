import React, { useContext, useEffect } from "react";
import Layout from "../../../components/Nav/Layout";
import { Context } from "../../../contexts/ContextProvider";
import BannerHome from "../../../components/Home/banner/BannerHome";
import { banner } from "../../../utils/apiVariables";
import { getDetails } from "../../../utils/getDetails";
import { useRouter } from "next/router";
import BannerInfo from "../../../components/Home/banner/BannerInfo";
import DetailsTop from "../../../components/Detail/DetailsTop";

export default function Details() {
    const router = useRouter();
    const { type, id } = router.query as { type: string, id: string };

    const { selectedAnime, setSelectedAnime } = useContext(Context);

    useEffect(() => {
        if (id !== undefined && type !== undefined) {
            getDetail();
        }
    
    }, [id, type]);

    async function getDetail() {
        try {
            const response = await getDetails(id, type);


            setSelectedAnime(response);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout>
            <>
                {selectedAnime && (
                    <main
                        className="w-screen h-screen"
                        style={{
                            background: `url(${banner}${selectedAnime.backdrop_path})`,
                            backgroundRepeat:'no-repeat',
                            backgroundSize:'cover'
                        }}
                    >
                        <div className="absolute bottom-0 top-0 left-0 right-0 inset-1 bg-black bg-opacity-25">
                            <DetailsTop Anime={selectedAnime}/>
                        </div>
                    </main>
                )}
            </>
        </Layout>

    );
}
