
function Item_profile({ title, setValueForm, value, checkField, handleEdit }) {

  const handleEditItemUser = () => {
    if (title != "................") {
      setValueForm(title);
    }
    handleEdit(value)
  }


  return <>
    <section className="section_body_profile">
      <div className="section_title">{title}</div>
      <button className={`li_value ${checkField !== null && "li_value_err"}`} onClick={handleEditItemUser} disabled={checkField !== null} >
        <i className="fa-regular fa-pen-to-square"></i>Chỉnh sửa
      </button>
    </section>
  </>
}

export default Item_profile
