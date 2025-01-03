import Header from "../../layouts/header"
import Detail_tour from "./detail_tour"
import Plane_tour from "./plane_tour"
import CommentSection from "../comment/CommentSection"
import "../../../publics/styles/detail_tour.scss"
import { getOneTour } from "../../../redux/action_thunk";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

function Main_detail_tour() {
  const [searchParams] = useSearchParams();
  const idTour = searchParams.get("id");
  let dispatch = useDispatch()
  let tourOne = useSelector((state) => state.tourSL.tourOne)

  useEffect(() => {
    if (idTour) {
      dispatch(getOneTour(idTour))
    }
    // Cuộn lên đầu trang khi component render
    window.scrollTo(0, 0);
  }, [idTour])

  return <>
    <Header />
      <div className="boxMain-detail-tour">
        <Detail_tour {...tourOne} />
        <Plane_tour  {...tourOne} />
        <CommentSection />
      </div>

  </>
}

export default Main_detail_tour
