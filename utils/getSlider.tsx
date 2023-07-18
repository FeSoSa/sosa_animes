import axios from "axios";
import React from "react";
import requests from "../constants/requests";

export default async function getSlider() {

    const response = await axios.get(requests.fetchAll).then((res) => res.data)

    const {results} = response

  return results
}
