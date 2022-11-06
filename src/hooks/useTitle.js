import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
         document.title = `${title} - Gnexer`;
    }, [title])
};

export default useTitle;