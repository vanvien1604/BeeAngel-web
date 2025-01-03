import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { createStaff } from "../../../../../redux/action_thunk";

function AddEmployee() {
  const [isPopupVisible, setPopupVisible] = useState(false);
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
    }
  };

  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      await dispatch(
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

      setSuccessMessage("Thêm mới nhân viên thành công!");
      reset();
    } catch (error) {
      console.error("Lỗi khi thêm nhân viên:", error);
      setSuccessMessage("Thêm nhân viên thất bại!");
    }
  };

  return (
    <div>
      <Button
        onClick={handlePopup}
        className="btn-add-manager"
        variant="contained"
        color="primary"
      >
        Thêm nhân viên
      </Button>

      {isPopupVisible && (
        <>
          <div className={`${isPopupVisible ? "overlay-admin" : ""}`}>
            <div
              className={`box-popop-addtour ${
                isPopupVisible ? "showPopup-addtour" : "nonePopup-addtour"
              }`}
            >
              <h2>Thêm Mới Nhân Viên</h2>
              {successMessage && (
                <Alert severity="success">{successMessage}</Alert>
              )}
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
                    required: "password không được bỏ trống",
                  })}
                  label="password"
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
}

export default AddEmployee;
