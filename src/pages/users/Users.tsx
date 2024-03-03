import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import { User } from "../../models/user";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`users?page=${page}`);
      setUsers(data.data);
      setLastPage(data.meta.last_page);

      console.log(data);
    })();
  }, [page]);

  const next = () => {
    if (page < lastPage) {
      setPage(page + 1);
    }
  };

  const prev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const del = async (id: number) => {
    if (window.confirm("Are you sure you want delete")) {
      await axios.delete(`users/${id}`);
      setUsers(users.filter((u: User) => u.id !== id));
    }
  };

  return (
    <Wrapper>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link to="/users/create" className="btn btn-sm btn-outline-secondary">
          Add
        </Link>
      </div>

      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    {user.first_name} {user.last_name}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.role.name}</td>
                  <td>
                    <div className="btn-group mr-2">
                      <Link
                        to={`/users/${user.id}/edit`}
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </Link>
                      <a
                        href="#"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => del(user.id)}
                      >
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={prev} href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={next} href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Users;
