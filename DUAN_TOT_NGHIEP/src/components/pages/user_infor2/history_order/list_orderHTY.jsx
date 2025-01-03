import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Item_orderHTY from "./item_orderHTY";
import {
  getAllOderByStatus,
  getAllOderByStatusByidUser,
} from "../../../../redux/action_thunk";
import { AuthContext } from "../../../../context/authContext";

function List_orderHTY({ activeTabStatus, setActiveTab }) {
  let dispatch = useDispatch();
  let { user } = useContext(AuthContext);
  useEffect(() => {
    console.log("order");
    dispatch(getAllOderByStatusByidUser(activeTabStatus, user?._id));
  }, [activeTabStatus]);
  const oderDatas = useSelector((state) => state.oderSL.oderDatas);
  const isErrOrder = useSelector((state) => state.oderSL.isErrOrder);

  return (
    <div className="list_orderHTY">
      {isErrOrder ? (
        <section className="box-err-order">
          <div>
            <img src="src/publics/image/images/image.png" alt="" />
          </div>
          <div>{isErrOrder}</div>
        </section>
      ) : (
        oderDatas.map((order) => (
          <Item_orderHTY
            key={order._id}
            {...order}
            setActiveTab={setActiveTab}
          />
        ))
      )}
    </div>
  );
}

export default List_orderHTY;
