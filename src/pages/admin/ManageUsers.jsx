// import { useEffect, useState } from "react";
// import { Container, Table, Button } from "react-bootstrap";
// import { getAllUsers, deleteUser } from "../../api/admin.api";
// import { toast } from "react-toastify";
// import Loader from "../../components/common/Loader";

// const ManageUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const { data } = await getAllUsers();
//     //   console.log("manage user data",data)
//       setUsers(data.data);
//     } catch {
//       toast.error("Failed to fetch users");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this user?")) return;

//     try {
//       await deleteUser(id);
//       console.log("id of deleting user",id)
//       toast.success("User deleted successfully");
//       fetchUsers();
//     } catch {
//       toast.error("Delete failed");
//     }
//   };

//   if (loading) return <Loader message="Loading users..." />;

//   return (
//     <Container className="py-5">
//       <h3 className="mb-4">Manage Users</h3>

//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user?._id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.role}</td>
//               <td>
//                 <Button
//                   variant="danger"
//                   size="sm"
//                   onClick={() => handleDelete(user?._id)}
//                 >
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default ManageUsers;
import { useEffect, useState } from "react";
import { Container, Table, Button, Badge, Card } from "react-bootstrap";
import { getAllUsers, deleteUser } from "../../api/admin.api";
import { toast } from "react-toastify";
import Loader from "../../components/common/Loader";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await getAllUsers();
      setUsers(data.data);
    } catch {
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await deleteUser(id);
      toast.success("User deleted successfully");
      fetchUsers();
    } catch {
      toast.error("Delete failed");
    }
  };

  if (loading) return <Loader message="Loading users..." />;

  return (
    <div style={{ background: "#f6f8fb", minHeight: "100vh" }}>
      <Container className="py-5">

        {/* Header */}
        <div className="mb-4">
          <h3 className="fw-bold">👥 Manage Users</h3>
          <p className="text-muted">
            View and manage all platform users
          </p>
        </div>

        <Card className="shadow-lg border-0 rounded-4">
          <Card.Body>

            {users.length === 0 ? (
              <div className="text-center py-5">
                <h5>No users found</h5>
                <p className="text-muted">
                  There are currently no registered users.
                </p>
              </div>
            ) : (

              <Table hover responsive className="align-middle">

                <thead>
                  <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (

                    <tr key={user?._id}>

                      {/* Name with Avatar */}
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div
                            style={{
                              width: "35px",
                              height: "35px",
                              borderRadius: "50%",
                              background: "#e9ecef",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: "bold",
                            }}
                          >
                            {user.name?.charAt(0).toUpperCase()}
                          </div>

                          {user.name}
                        </div>
                      </td>

                      <td>{user.email}</td>

                      {/* Role Badge */}
                      <td>
                        {user.role === "admin" && (
                          <Badge bg="danger">Admin</Badge>
                        )}

                        {user.role === "instructor" && (
                          <Badge bg="success">Instructor</Badge>
                        )}

                        {user.role === "student" && (
                          <Badge bg="primary">Student</Badge>
                        )}
                      </td>

                      {/* Action */}
                      <td className="text-center">
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDelete(user?._id)}
                        >
                          Delete
                        </Button>
                      </td>

                    </tr>

                  ))}
                </tbody>

              </Table>

            )}

          </Card.Body>
        </Card>

      </Container>
    </div>
  );
};

export default ManageUsers;