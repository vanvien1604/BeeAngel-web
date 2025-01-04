import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { createStaff } from "../../../../../redux/action_thunk";
import { errUser } from "../../../../../redux/user_slice";

const AddEmployee = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const isErrUser = useSelector((state) => state.userSL.isErrUser); // Lấy lỗi từ Redux
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const handlePopup = () => {
    setPopupVisible(!isPopupVisible);
    if (isPopupVisible) {
      reset();
      setSuccessMessage("");
      dispatch(errUser(null)); // Reset lỗi khi đóng popup
    }
  };

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(
        createStaff(
          data.name,
          data.email,
          data.cardImages || null,
          data.phone || null,
          data.password,
          "staff",
          data.avatar || null,
          data.address || null,
          data.Address_don || null,
          data.Gender || null,
          data.Birth_day || null
        )
      );

      if (result?.message === "Đăng ký tài khoản thành công.") {
        setSuccessMessage(result.message);
        reset();
      }
    } catch (error) {
      console.error("Lỗi khi thêm nhân viên:", error);
    }
  };

  return (
    <div>
      <Button className="mx-3" onClick={handlePopup} variant="contained" color="primary">
        Thêm nhân viên
      </Button>

      {isPopupVisible && (
        <>
          <div className="overlay-admin">
            <div className={`box-popop-addtour showPopup-addtour`}>
              <h2>Thêm Mới Nhân Viên</h2>
              {successMessage && <Alert severity="success">{successMessage}</Alert>}
              {isErrUser && <Alert severity="error">{isErrUser}</Alert>}
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  {...register("name", {
                    required: "Tên nhân viên không được bỏ trống",
                  })}
                  label="Tên nhân viên"
                  fullWidth
                  margin="normal"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
                <TextField
                  {...register("email", {
                    required: "Email không được bỏ trống",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Email không hợp lệ",
                    },
                  })}
                  label="Email"
                  fullWidth
                  margin="normal"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  {...register("password", {
                    required: "Password không được bỏ trống",
                  })}
                  label="Password"
                  fullWidth
                  margin="normal"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "20px" }}
                >
                  Thêm Nhân Viên
                </Button>
                <Button
                  onClick={handlePopup}
                  variant="outlined"
                  color="secondary"
                  style={{ marginTop: "20px", marginLeft: "10px" }}
                >
                  Đóng
                </Button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};


export default AddEmployee;
