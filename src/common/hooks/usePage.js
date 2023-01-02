import { useEffect, useContext } from "react";
import { SetGlobalContext } from "../../context/GlobalContext";

function usePage(page) {
  const globalDispath = useContext(SetGlobalContext)

  useEffect(() => {
    globalDispath({ type: 'setCurrentPage', currentPage: page })
  }, [])
}

export default usePage