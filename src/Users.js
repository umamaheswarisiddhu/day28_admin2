import React from "react";
import { Link } from "react-router-dom";

function Users() {
  //array for user table data
  const userData = [
    {
      id: "1",
      name: "Lura Senger",
      email: "Xander_Collier@yahoo.com",
    },
    {
      id: "2",
      name: "Wilburn Weber",
      email: "Bennett_Kreiger11@yahoo.com",
    },
    {
      id: "3",
      name: "Tyrique Hahn",
      email: "Juston.Altenwerth@yahoo.com",
    },
    {
      id: "4",
      name: "Lenny Bailey",
      email: "Guiseppe_Hegmann@yahoo.com",
    },
    {
      id: "5",
      name: "Vladimir Keeling",
      email: "Louisa_Walsh18@hotmail.com",
    },
    {
      id: "6",
      name: "Kellie Crona",
      email: "Chandler_Abernathy@yahoo.com",
    },
    {
      id: "7",
      name: "Carolina White",
      email: "Royal50@hotmail.com",
    },
    {
      id: "8",
      name: "Alfredo Conn",
      email: "Clarabelle34@hotmail.com",
    },
    {
      id: "9",
      name: "Stan Shanahan",
      email: "Lamar.McClure@hotmail.com",
    },
    {
      id: "10",
      name: "Marvin Fay",
      email: "Osbaldo58@hotmail.com",
    },
    {
      id: "11",
      name: "Torrance Rau",
      email: "Orin45@gmail.com",
    },
    {
      id: "12",
      name: "Harold Gutmann MD",
      email: "Alyce.Stracke37@yahoo.com",
    },
    {
      id: "13",
      name: "Taryn Torphy",
      email: "Dean_Breitenberg71@hotmail.com",
    },
    {
      id: "14",
      name: "Bryana Lang",
      email: "Tatum.Ullrich@yahoo.com",
    },
    {
      id: "15",
      name: "Nyasia Green DDS",
      email: "Dino83@gmail.com",
    },
    {
      id: "16",
      name: "Nasir Gerhold",
      email: "Lilian_Bashirian8@hotmail.com",
    },
    {
      id: "17",
      name: "Raymundo Ritchie PhD",
      email: "Antwan.Schoen15@yahoo.com",
    },
    {
      id: "18",
      name: "Delmer Marvin",
      email: "Kiera62@yahoo.com",
    },
    {
      id: "19",
      name: "Rachel Wilkinson",
      email: "Foster_Conroy@gmail.com",
    },
    {
      id: "20",
      name: "Gladys Howell",
      email: "Constance.Labadie10@yahoo.com",
    },
    {
      id: "21",
      name: "Ciara Klocko",
      email: "Harvey76@yahoo.com",
    },
    {
      id: "22",
      name: "Quentin O'Kon",
      email: "Amely_Cummings2@yahoo.com",
    },
    {
      id: "23",
      name: "Ms. Gabriella Kunde",
      email: "Lorenza_Cummerata@hotmail.com",
    },
    {
      id: "24",
      name: "Gerald Reilly",
      email: "Lia_Konopelski@gmail.com",
    },
    {
      id: "25",
      name: "Brody Carter I",
      email: "Colten.Wilderman90@hotmail.com",
    },
  ];

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">User List</h1>
        <Link
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          to={"/form"}
        >
          <i className="fa-sm text-white-50"></i> Create User
        </Link>
      </div>
      <h1 className="h3 mb-2 text-gray-800">Tables</h1>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{" "}
        <a target="_blank" href="https://datatables.net" rel="noreferrer">
          official DataTables documentation
        </a>
        .
      </p>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead className="text-center">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Buttons</th>
                </tr>
              </thead>
              <tfoot className="text-center">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Buttons</th>
                </tr>
              </tfoot>
              <tbody>
                {/* maping array data into table */}
                {userData.map((e, id) => {
                  return (
                    <tr key={id}>
                      <td>{e.id}</td>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td className="text-center ">
                        <button type="button" class="btn btn-primary">
                          View
                        </button>

                        <button className="btn btn-success m-1">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
