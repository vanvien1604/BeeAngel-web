import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "../../../publics/styles/list-tour.scss";
import Item_tour from "./item_tour";
import { getAllTour } from "../../../redux/action_thunk";
import Loading from "../../layouts/loading";

function List_tour() {
  let dispatch = useDispatch();
  let tourDatas = useSelector((state) => state.tourSL.tourDatas);
  let isLoadingTour = useSelector((state) => state.tourSL.isLoadingTour);
  let isErrFilter = useSelector((state) => state.tourSL.isErrFilter);
  // State để lưu số lượng tour sẽ được hiển thị
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    dispatch(getAllTour(limit));
  }, [limit]);
  
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const tourOnline = tourDatas.filter(tour => !tour.isDeleted);
  console.log("cức",tourOnline);
  
  return (
    <>
      <article className="main-list-tour" id="order-list">
        <section className="box-list-tour">
          <section className="tieuDe-tour">
            <h2>Danh sách Tour</h2>
          </section>
          <div className="line-tour"></div>

          {isLoadingTour && <Loading top={35} left={50} position="absolute" />}
          {isErrFilter ? (
            <span>{isErrFilter}</span>
          ) : (
            <section className="list-tour">
                {tourOnline.map((item, index) => {
                return <Item_tour key={index} {...item} />;
              })}
            </section>
          )}

          <div className="div-btn-xemThem">
            <button
              onClick={() => setLimit((prevLimit) => prevLimit + 3)}
              className="btn-xemThem"
            >
              Xem Thêm
            </button>
          </div>
        </section>
      </article>
    </>
  );
}

export default List_tour;
