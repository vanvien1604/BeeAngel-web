import  { useContext, useEffect } from 'react'
import ItemBlog from './item_Blog'

import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../../../../../context/authContext'
import { getAllBlog } from '../../../../../redux/action_thunk'

const ListBlog = () => {
    let dispatch = useDispatch();
    const { user } = useContext(AuthContext)
    let isLoadingBlog = useSelector((state) => state.blogSL.isLoadingBlog)
    let blogDatas  = useSelector((state) => state.blogSL.blogDatas);
    console.log('okok', blogDatas);
    

     // sử dụng effect để gửi action đến getAllBogs
  useEffect(() => {
    dispatch(getAllBlog())
  }, [user])


  let data = blogDatas.map((item,index) => {
    return  <ItemBlog key={index} {...item} i={index}/>
  })
  return <>


    <div className="table-danhMuc">
      <table className="table">
        <thead>
          <tr>
            <th className='center-th' scope="col">#</th>
            <th scope="col">Tên Blog</th>
            <th scope="col">Tác giả</th>
            <th scope="col">Thời điểm hiện tại</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
            {isLoadingBlog && <div className="loader"></div>}
            {data}
         
        </tbody>
      </table>
    </div>

  
  </>
}

export default ListBlog
