import React, {FC, useEffect, useState} from "react";
import IceandfireApi from "../services/iceandfire";
import { Character } from "../types/type";

type TFilter = {
    page?: number;
    pageSize?: number;
  }

const useCharters = ({initPage, initPageSize}: {initPage?: number, initPageSize?: number}) => {
    const [characters, setCharacters] = useState<null | Character[]>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [filter, setFilter] = useState<TFilter>({
        page: initPage,
        pageSize: initPageSize,
    })

    const getCharcters = async () => {
        const value = initPage && initPageSize ? filter : undefined
        setLoading(true)
        try {
          const res = await IceandfireApi.getCharacters(value?.page, value?.pageSize)
          setCharacters(res)
        } catch (e: any) {
          setError(true)
        } finally {
          setLoading(false)
        }
    }
    const handlerPage = (type: "left" | "right") => (_e: any) => {
        if (!initPage && !initPageSize) return;
        if (type === "left" && filter?.page && filter?.page > 1) {
          setFilter({ ...filter, page: filter?.page - 1 });
        } else if (filter?.page) setFilter({ ...filter, page: filter?.page + 1 });
      };

    useEffect(() => {
        getCharcters()
    }, [filter.page])

    return {loading, error, characters, filter, handlerPage}
}
export {useCharters};