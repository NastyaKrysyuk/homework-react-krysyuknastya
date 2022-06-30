import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import IceandfireApi from "../services/iceandfire";
import { Character } from "../types/type";

/*КАСТОМНЫЙ ХУК useCharacter
ПРИНИМАЕТ: (url героя) */
const useCharacter = (url?: string | null) => {
  const {data, getData, loading, error} = useFetch<Character>(IceandfireApi.getCharterInfo, url)
  // const [character, setCharacter] = useState<null | Character>(null)
  // const [loading, setLoading] = useState<boolean>(false)
  // const [error, setError] = useState<boolean>(false)

  // const getCharacter = async () => {
  //   setLoading(true)
  //     try {
  //       const res = await IceandfireApi.getCharterInfo(url as string)
  //       setCharacter(res)
  //     }
  //     catch (e: any) {
  //       setError(true);
  //       console.log(e.message)
  //     }
  //     finally {
  //       setLoading(false)
  //     }
  // }

  useEffect(() => {
    //запрос за героем при каждой смене url
    url && getData();
  }, [url])

  return { data, loading, error  }
}

export { useCharacter };