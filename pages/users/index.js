import React from "react";
import Head from "next/head";
import Link from "next/link";
import AdminHOC from "../../components/layouts/admin.hoc";


import axios from 'axios';

const users = ({ users,error}) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <div>
      <AdminHOC> 
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
              <h1>ตารางรายการสมาชิก</h1>
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                     รายการสมาชิก
                    </h3>
                  </div>
                  {/* /.card-header */}
                  
                  <div className="card-body">
                    <table
                      className="table table-bordered table-hover"
                    >
              
                      <thead>
                        <tr>
                          
                          <th>id</th>
                          <th>firstname</th>
                          <th>lastname(s)</th>
                          <th>username</th>
                          <th>edit</th>
                          <th>delete</th>
                        </tr>
                      </thead>
                      <tbody>
                      {users.map(data => (
                        <tr>
                          <td>{data.id}</td>
                          <td>{data.firstname}</td>
                          <td>{data.lastname}</td>
                          <td>{data.username}</td>
                          <td className="text-center"><Link href={`/users/edit/${data.id}`}><a className="btn btn-warning">แก้ไข</a></Link></td>
                          <td className="text-center"><Link href="#"><a className="btn btn-danger btn-sm">ลบ</a></Link></td>
                        </tr>   
                        ))}                  
                      </tbody>
                      
                    </table>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
            </div>
          </div>
        </section>
        

        
        </div>
      </AdminHOC>
    </div>
  );
};
users.getInitialProps = async ctx => {
  try {
    const res = await axios.get('https://api-itcmtc.herokuapp.com/members');
    const users= res.data;
    return { users };
  } catch (error) {
    return { error };
  }
};
export default users;
