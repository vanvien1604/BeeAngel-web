import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Outlet } from 'react-router-dom';
import Main_navBar from '../navBar/main_navBar';
import "../../../../publics/styles/style-admin/admin.scss"


function MainSideBar() {

    return <>
        <Main_navBar />
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="/src/publics/image/avatar_null.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="/manager" className="d-block">Admin BeeAngel</a>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        <li className="nav-item menu-open li-sidebar">
                            <Accordion className='ok'>
                                    <a className='tile-black' href='/manager/danhMuc'>Danh Mục</a>
                            </Accordion>
                        </li>

                        <li className="nav-item menu-open li-sidebar">
                            <Accordion className='ok'>
              
                                    <a className='tile-black' href='/manager/tour'>Tour</a>
                                
                            </Accordion>
                        </li>

                        <li className="nav-item menu-open li-sidebar">
                            <Accordion className='ok'>
              
                                    <a className='tile-black' href='/manager/blog'>Blog</a>
                                
                            </Accordion>
                        </li>

                        <li className="nav-item menu-open li-sidebar">
                            <Accordion className='ok'>
              
                                    <a className='tile-black' href='/manager/chats'>Nhắn tin</a>
                                
                            </Accordion>
                        </li>

                        <li className="nav-item menu-open li-sidebar">
                            <Accordion className='ok'>
              
                                    <a className='tile-black' href='/manager/users'>Tài khoản</a>
                                
                            </Accordion>
                        </li>

                        <li className="nav-item menu-open li-sidebar">
                            <Accordion className='ok'>
              
                                    <a className='tile-black' href='/manager/orders'>Đơn hàng Tour</a>
                                
                            </Accordion>
                        </li>

                        <li className="nav-item menu-open li-sidebar">
                            <Accordion className='ok'>
              
                                    <a className='tile-black' href='/manager/rating'>Đánh giá</a>
                                
                            </Accordion>
                        </li>

                        <li className="nav-item menu-open li-sidebar">
                            <Accordion className='ok'>
              
                                    <a className='tile-black' href='/manager/loaiXe'>Loại xe</a>
                                
                            </Accordion>
                        </li>

                        <li className="nav-item menu-open li-sidebar">
                            <Accordion className='ok'>
              
                                    <a className='tile-black' href='/manager/vehicle'>Xe</a>
                                
                            </Accordion>
                        </li>


                        <li className="nav-item menu-open li-sidebar">
                            <Accordion className='ok'>
              
                                    <a className='tile-black' href='/manager/order-vehicle'>Đơn hàng xe</a>
                                
                            </Accordion>
                        </li>

                        <li className="nav-item menu-open li-sidebar">
                            <Accordion className='ok'>
              
                                    <a className='tile-black' href='/manager/notification'>Thông báo Tour</a>
                                
                            </Accordion>
                        </li>
                        <li className="nav-item menu-open li-sidebar">
                            <Accordion className='ok'>

                                <a className='tile-black' href='/manager/notificationvehicle'>Thông báo Xe</a>

                            </Accordion>
                        </li>

                        <li className="nav-item menu-open li-sidebar">
                            <Accordion className='ok'>
              
                                    <a className='tile-black' href='/manager/Comment'>Bình luận</a>
                                
                            </Accordion>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>

        <div className='content-wrapper'>
            <Outlet />
        </div>
    </>
}

export default MainSideBar
