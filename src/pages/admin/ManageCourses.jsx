 
// import { useEffect, useState } from "react";
// import { Container, Table, Button, Card, Badge, Row, Col } from "react-bootstrap";
// import { getAllCourses, deleteCourse } from "../../api/course.api";
// import { toast } from "react-toastify";
// import Loader from "../../components/common/Loader";

// const ManageCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const { data } = await getAllCourses();
//       setCourses(data.data);
//     } catch {
//       toast.error("Failed to fetch courses");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this course?")) return;

//     try {
//       await deleteCourse(id);
//       toast.success("Course deleted");
//       fetchCourses();
//     } catch {
//       toast.error("Delete failed");
//     }
//   };

//   if (loading) return <Loader message="Loading courses..." />;

//   return (
//     <Container fluid className="py-5 px-lg-5">
      
//       {/* Page Header */}
//       <Row className="mb-4">
//         <Col>
//           <div className="p-4 rounded-4 shadow-sm bg-gradient bg-primary text-white">
//             <h2 className="fw-bold mb-1">Manage Courses</h2>
//             <p className="mb-0 opacity-75">
//               View, manage and remove courses from the platform
//             </p>
//           </div>
//         </Col>
//       </Row>

//       {/* Courses Table Card */}
//       <Card className="border-0 shadow-lg rounded-4">
//         <Card.Body className="p-4">

//           {courses.length === 0 ? (
//             <div className="text-center py-5">
//               <h5 className="fw-semibold text-muted">No Courses Found</h5>
//               <p className="text-muted mb-0">
//                 Courses will appear here once instructors create them.
//               </p>
//             </div>
//           ) : (
//             <Table
//               responsive
//               hover
//               className="align-middle mb-0"
//               style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}
//             >
//               <thead>
//                 <tr className="text-secondary">
//                   <th className="ps-3">Title</th>
//                   <th>Category</th>
//                   <th>Instructor</th>
//                   <th className="text-center">Action</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {courses.map((course) => (
//                   <tr
//                     key={course._id}
//                     className="bg-white shadow-sm rounded-3"
//                     style={{ borderRadius: "10px" }}
//                   >
//                     <td className="ps-3 fw-semibold">{course.title}</td>

//                     <td>
//                       <Badge bg="info" pill className="px-3 py-2">
//                         {course.category}
//                       </Badge>
//                     </td>

//                     <td>
//                       <Badge bg="secondary" pill className="px-3 py-2">
//                         {course.instructor?.name || "N/A"}
//                       </Badge>
//                     </td>

//                     <td className="text-center">
//                       <Button
//                         variant="outline-danger"
//                         size="sm"
//                         className="px-3 fw-semibold"
//                         onClick={() => handleDelete(course._id)}
//                       >
//                         🗑 Delete
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           )}

//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default ManageCourses;


import { useEffect, useState } from "react";
import {
  Container,
  Table,
  Button,
  Spinner,
  Modal,
  Alert,
} from "react-bootstrap";
import { getAllCourses, deleteCourse } from "../../api/course.api";
import { toast } from "react-toastify";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // 🔥 Fetch Courses (FIXED)
  const fetchCourses = async () => {
    try {
      const res = await getAllCourses();

      console.log("API Response:", res.data);

      // ✅ SAFE DATA EXTRACTION
      const courseData =
        res.data?.courses || res.data?.data || res.data || [];

      setCourses(Array.isArray(courseData) ? courseData : []);
    } catch (error) {
      toast.error("Failed to fetch courses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // 🔥 Open Modal
  const handleDeleteClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  // 🔥 Confirm Delete
  const confirmDelete = async () => {
    try {
      await deleteCourse(selectedCourse._id);

      toast.success("Course deleted successfully");

      // ✅ Optimistic UI Update
      setCourses((prev) =>
        prev.filter((c) => c._id !== selectedCourse._id)
      );
    } catch (error) {
      toast.error("Delete failed");
    } finally {
      setShowModal(false);
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="fw-bold mb-4">Manage Courses</h2>

      {/* 🔥 Loading State */}
      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" />
        </div>
      ) : !Array.isArray(courses) || courses.length === 0 ? (
        /* 🔥 Empty State */
        <Alert variant="info" className="text-center">
          No courses found. Create one to get started.
        </Alert>
      ) : (
        <Table
          striped
          bordered
          hover
          responsive
          className="shadow-sm align-middle"
        >
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Instructor</th>
              <th>Price</th>
              <th style={{ width: "120px" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course, index) => (
              <tr key={course._id}>
                <td>{index + 1}</td>

                <td className="fw-semibold">{course.title}</td>

                <td>{course?.instructor?.name || "N/A"}</td>

                <td className="text-success fw-bold">
                  RS{course.price || 0}
                </td>

                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteClick(course)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* 🔥 Delete Confirmation Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Course</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to delete{" "}
          <strong>{selectedCourse?.title}</strong>?
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </Button>

          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ManageCourses;