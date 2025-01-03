import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const ModalHeader = ({ closeModal }) => {
  const [searchParams] = useSearchParams();
  const tourId = searchParams.get("id");
  const [tourInfo, setTourInfo] = useState({
    name: "",
    averageRating: 0,
    totalRatings: 0,
  });

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/Rating/allTourWithRatings"
        );
        if (response.data && response.data.length > 0) {
          const tour = response.data.find((item) => item.tour._id === tourId);
          if (tour) {
            const { tour: tourDetails, averageRating, totalRatings } = tour;
            setTourInfo({
              name: tourDetails.name,
              averageRating: parseFloat(averageRating.toFixed(1)),
              totalRatings,
            });
          }
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu tour:", error);
      }
    };

    fetchTourData();
  }, [tourId]);

  return (
    <div className="modal-header">
      <div>
        <div className="title">Đánh giá của khách về {tourInfo.name}</div>
        <div className="rating-info">
          <div className="rating-box">{tourInfo.averageRating}/5</div>
          <div className="rating-text">
            <div className="reviews">{tourInfo.totalRatings} đánh giá</div>
          </div>
          <div className="info-text">
            Chúng tôi cố gắng mang đến 100% đánh giá thật ℹ️
          </div>
        </div>
      </div>
      <div>
        <span className="close-modal-icon" onClick={closeModal}>
          ✖
        </span>
      </div>
    </div>
  );
};

export default ModalHeader;
