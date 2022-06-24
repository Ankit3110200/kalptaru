import React,{useEffect} from "react";
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Loader from '../../Helper/Loader/Loader';
import Client from "./icons/client.png";
import Karigar from "./icons/karigar.png";
import User from "./icons/user.png";
import { Link,useNavigate } from 'react-router-dom';
import completedOrders from "../../Home/icons/clipboard.png";
import orderStatus from  "../../Home/icons/status.png"
import { useSelector } from "react-redux";
import { adminGetAllClient, adminGetAllKarigar, adminGetAllOrder, adminGetAllUser, emptyOrderConfirm, getAllOrders, preadminloginusingToken } from "../../../../src/actions";
import { useDispatch } from "react-redux";
import "./AdminHome.css";

function Adminadminhome() {
    const order=useSelector(state=>state.order);
    const karigar=useSelector(state=>state.karigar);
    const admin=useSelector(state=>state.admin);
    const dispatch=useDispatch();

    useEffect(()=>{
      if(localStorage.getItem('accessToken') && !admin.authenticate){
        const token=localStorage.getItem('accesstoken').split(" ")[0];
        dispatch(preadminloginusingToken({accesstoken:token}));
      }
    },[])

    useEffect(()=>{
      if(admin.authenticate){
      dispatch(adminGetAllClient());
      dispatch(adminGetAllKarigar());
      dispatch(adminGetAllUser());
      dispatch(adminGetAllOrder());
      }
    },[admin.authenticate])
    if(order.loading){
      return <Loader/>
    }
    return (
      <>
      <AdminNavbar />
        <div className="container-fluid bg-adminhome">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 colcenter-adminhome mb-5">
              <div className="parent_box-adminhome"> <div className="title-adminhome mt-5">Admin Home</div></div>
              <div className="parent_box-adminhome">
                <div className="row contentaround-adminhome ">
                  <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-adminhome">
                    <Link to="/AdminClients" className="link-style">
                    <div className="card box-adminhome">
                      <div className="card-body box-body ">
                        <img className="logo-adminhome" src={Client} alt="New Order" />
                        <h5 className="card-title boxname-adminhome">Clients</h5>
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-adminhome">
                  <Link to="/AdminOrders" className="link-style">
                    <div className="card box-adminhome ">
                      <div className="card-body box-body">
                        <img
                          className="logo-adminhome"
                          src={orderStatus}
                          alt="New Order"
                        />
                        <h5 className="card-title boxname-adminhome">
                          Orders
                        </h5>
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-adminhome">
                  <Link to="/AdminKarigars" className="link-style">
                    <div className="card box-adminhome ">
                      <div className="card-body box-body">
                        <img
                          className="logo-adminhome"
                          src={Karigar}
                          alt="Edit Order"
                        />
                        <h5 className="card-title boxname-adminhome">Karigar</h5>
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-adminhome">
                  <Link to="/TrackOrder" className="link-style">
                    <div className="card box-adminhome ">
                      <div className="card-body box-body">
                        <img
                          className="logo-adminhome"
                          src={completedOrders}
                          alt="Track Order"
                        />
                        <h5 className="card-title boxname-adminhome">Completed Order</h5>
                      </div>
                    </div>
                    </Link>
                  </div>
                  <div className="col-md-4 col-xs-6 col-sm-6 boxcenter-adminhome">
                  <Link to="/AdminUsers" className="link-style">
                    <div className="card box-adminhome ">
                      <div className="card-body box-body">
                        <img
                          className="logo-adminhome"
                          src={User}
                          alt="Edit Order"
                        />
                        <h5 className="card-title boxname-adminhome">Users</h5>
                      </div>
                    </div>
                    </Link>
                  </div>
              
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </>
    );
  }
  
  export default Adminadminhome;
  