import { useContext, useEffect, useState } from "react"
import "../../../publics/styles/list-tour.scss"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/authContext"
import axios from "axios"

function Item_tour({_id, name, price, status, description, images }) {
    const { user, setOpen } = useContext(AuthContext)
    const [avgRating, setAvgRating] = useState(0); 

    const navigation = useNavigate()
    // Kiểm tra xem content có độ dài lớn hơn 100 ký tự không
    const shortenedContent = description.length > 80 ? `${description.slice(0, 80)}...` : description;


    const shortenedtitle = name.length > 29 ? `${name.slice(0, 25)}...` : name;

    function handleDetail() {
        navigation(`/detail?id=${_id}`)
    }

    function handleDatTour(e) {
        e.stopPropagation(); // Ngăn chặn sự kiện click lan lên phần tử cha
        navigation(`/bookTour?id=${_id}`)
    }


    const priceNumber = Number(price); // chuyển thành kiểu number
    const formatPrice = priceNumber.toLocaleString('vi-VN');


    // sao
    useEffect(() => {
        // Gọi API để lấy trung bình số sao
        const fetchAverageRating = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/Rating/${_id}/average-rating`); // Giả sử bạn có route này
                setAvgRating(response.data.avgRating);
            } catch (error) {
                console.error("Lỗi khi lấy trung bình số sao:", error);
            }
        };

        fetchAverageRating();
    }, [_id]); // Chạy khi _id (tức tourId) thay đổi
    
    return <>
        <section className="tour-item">
            <section className="tour-image-block">
                <img onClick={handleDetail} src={`https://firebasestorage.googleapis.com/v0/b/bee-angel.appspot.com/o/products%2F${images[0]}?alt=media`} alt="Đại Nội Huế" className="tour-image" />
            </section>
            <section className="tour-info">
                <div className="tour-meta">
                    <span className="rating"><i className="fa-solid fa-star"></i>{avgRating.toFixed(1)}</span>
                </div>
                <h2 onClick={handleDetail} className="tour-title">{shortenedtitle}</h2>
                <p onClick={handleDetail} className="tour-description">{shortenedContent}</p>
                <div className="d-flex">
                    <p className="tour-price">Price <span>{formatPrice}</span><sup>đ</sup></p>
                    {user ?
                        <button className="book-button" onClick={(e) => handleDatTour(e)}>Đặt Tour</button>
                        :
                        <button onClick={() => setOpen(true)} className="book-button">Đặt Tour</button>
                    }
                </div>

            </section>
        </section>
    </>
}


export default Item_tour