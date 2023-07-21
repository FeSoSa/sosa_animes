import axios from "axios";
import React from "react";
import { BRrequests } from "../constants/requests";

export default async function getSlider() {

    const response = await axios.get(BRrequests.fetchAll).then((res) => res.data)

    const {results} = response

  return results
}
