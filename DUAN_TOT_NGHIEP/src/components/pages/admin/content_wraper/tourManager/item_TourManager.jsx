import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { delTour, getAllDanhMuc, getOneDanhMuc, getOneTour, updateIdDeleteTour } from '../../../../../redux/action_thunk';
import { useContext, useEffect } from 'react';
import { PopupContext } from '../../../../../context/popupContext';

function Item_TourManager({ _id, name, price, price_Adult, price_Children, status, isDeleted, type, i }) {
    let dispatch = useDispatch()
    const { setPopupEditTour } = useContext(PopupContext)
    const priceNumber = Number(price); // chuyển thành kiểu number
    const formatPrice = priceNumber.toLocaleString('vi-VN');
    // const danhMucOne = useSelector((state) => state.danhMucSL.danhMucOne)
    const danhMucAll = useSelector((state) => state.danhMucSL.danhMucDatas)

    console.log("All danh mục", danhMucAll);
    

    useEffect(() => {
        dispatch(getAllDanhMuc())
    }, [])

    // Hàm lấy tên tour dựa trên idTour
    const getDanhMucName = (idDM) => {
        const danhMucOne = danhMucAll?.find((danhMuc) => danhMuc._id === idDM);
        return danhMucOne ? danhMucOne.name : "Tên danh mục không xác định";
    };

    // hàm này click vào nút edit tour sẽ hiện ra popup edit và get đc thông tin tuor đó
    function handleEditTour() {
        dispatch(getOneTour(_id))
        setPopupEditTour(true)
    }

    function formatCurrency(value) {
        return Number(value).toLocaleString('vi-VN') + ' VND';
    }

    useEffect(() => {
        dispatch(getOneDanhMuc(type))
    }, [type])
    return <>
        <tr>
            <th className='center-th' scope="row">{i + 1}</th>
            <td>{name}</td>
            <td>{formatPrice} VNĐ</td>
            <td>{formatCurrency(price_Adult)}</td>
            <td>{formatCurrency(price_Children)}</td>
            {/* <td>{status}</td> */}
            <td>{getDanhMucName(type)}</td>
            <td>
                <Button onClick={handleEditTour} style={{ marginRight: "10px" }} variant="contained">Edit</Button>
                {/* <Button onClick={() => { dispatch(delTour(_id)) }} color="error" variant="outlined">Delete</Button> */}
                {isDeleted ?
                    <Button onClick={() => { dispatch(updateIdDeleteTour(_id)) }} color="error" variant="outlined">Dừng hoạt động</Button>
                    :
                    <Button onClick={() => { dispatch(updateIdDeleteTour(_id)) }} variant="outlined" color="success">Đang hoạt động</Button>

                }
            </td>
        </tr>
    </>
}

export default Item_TourManager