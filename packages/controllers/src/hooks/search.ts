import { useState } from "react"
import { injector } from "../services/injector";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

// + relevant search queries
export const useSearch = () => {
    const [query, setQuery] = useState('');

    const onChangeQuery = query => setQuery(query);

    return {
        query,

        onChangeQuery
    }
}