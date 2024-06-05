import { toast, Bounce } from 'react-toastify';
import { useEffect, useState } from "react"
import { DataT, ErrorT } from "types";
import { useQuery, } from "@tanstack/react-query"

type Props = {
    meta: any;
    queryKey: string[]
    signal: any
}


const queryFn = async ({ queryKey }: Props) => {
    const url = queryKey[0]

    const req = await fetch(url)

    const res = await req.json();

    if (!req.ok) {
        throw res
    }

    return res as DataT;
}



export const useSearch = () => {
    const [url, setUrl] = useState<string | null>(null);

    const { isLoading, error, data } = useQuery<any, ErrorT, DataT, string[]>({
        queryKey: [url ?? ''],
        queryFn,
        retry: 2,
        enabled: !!url,
    })


    useEffect(() => {
        toast.error(error?.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        })

    }, [error])


    return {
        error,
        data,
        setUrl,
        isLoading,
    }
}