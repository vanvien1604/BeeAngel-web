import { useContext } from "react";

import Button from "@mui/material/Button";

import { PopupContext } from "../../../../../context/popupContext";
import { useDispatch } from "react-redux";
import {
  getOneCar,
  updateIdDeleteCar,
} from "../../../../../redux/action_vehicle";
const ItemVehicle = ({
  _id,
  name,
  motorcycleBrand,
  price,
  isCheckDeleted,
  i,
}) => {
  let dispatch = useDispatch();
  const { setPopupEditCars } = useContext(PopupContext);
  const priceNumber = Number(price); // chuyển thành kiểu number
  const formatPrice = priceNumber.toLocaleString("vi-VN");

  const handleEdit = () => {
    dispatch(getOneCar(_id));
    setPopupEditCars(true);
  };

  return (
    <>
      <tr>
        <th className="center-th" scope="row">
          {i + 1}
        </th>
        <td>{name}</td>
        <td>{motorcycleBrand}</td>
        <td>{formatPrice} VNĐ</td>
        <td>
          <Button
            onClick={handleEdit}
            style={{ marginRight: "10px" }}
            variant="contained"
          >
            Edit
          </Button>
          {isCheckDeleted ? (
            <Button
              onClick={() => {
                dispatch(updateIdDeleteCar(_id));
              }}
              color="error"
              variant="outlined"
            >
              Dừng hoạt động
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch(updateIdDeleteCar(_id));
              }}
              variant="outlined"
              color="success"
            >
              Đang hoạt động
            </Button>
          )}
          {/* <Button onClick={() => {dispatch(delCar(_id)) }} color="error" variant="outlined">
            Delete
          </Button> */}
        </td>
      </tr>
    </>
  );
};

export default ItemVehicle;
