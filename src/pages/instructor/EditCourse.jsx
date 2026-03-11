// import { useEffect, useState } from "react";
// import { Container, Form, Button, Card } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";
// // import { getSingleCourse, updateCourse } from "../../api/course.api";
// import { toast } from "react-toastify";
// import Loader from "../../components/common/Loader";
// import { getCourseById, updateCourse } from "../../api/course.api";

// const EditCourse = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     category: "",
//     price: "",
//   });

//   useEffect(() => {
//     fetchCourse();
//   }, []);

//   const fetchCourse = async () => {
//     try {
//       const { data } = await getCourseById(id);
//       setFormData(data.data);
//     } catch (error) {
//       toast.error("Failed to load course");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateCourse(id, formData);
//       toast.success("Course updated successfully!");
//       navigate("/instructor/manage-courses");
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Update failed");
//     }
//   };

//   if (loading) return <Loader message="Loading course..." />;

//   return (
//     <Container className="py-5">
//       <Card className="shadow mx-auto" style={{ maxWidth: "600px" }}>
//         <Card.Body>
//           <h4>Edit Course</h4>
//           <Form onSubmit={handleSubmit}>
//             <Form.Control
//               className="mb-3"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               required
//             />
//             <Form.Control
//               as="textarea"
//               rows={3}
//               className="mb-3"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               required
//             />
//             <Form.Control
//               className="mb-3"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               required
//             />
//             <Form.Control
//               type="number"
//               className="mb-3"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               required
//             />
//             <Button type="submit" variant="dark" className="w-100">
//               Update Course
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default EditCourse;
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const InstructorDashboard = ({ user }) => {
  return (
    <div style={{ background: "#f6f8fb", minHeight: "100vh" }}>
      <Container className="py-5">

        {/* ===== Header ===== */}
        <div className="mb-5">
          <h2 className="fw-bold mb-1">
            👋 Welcome back, {user?.name}
          </h2>

          <p className="text-muted mb-0">
            Manage your courses and grow your students.
          </p>
        </div>


        {/* ===== Stats Section ===== */}
        <Row className="mb-5 g-4">

          <Col md={4}>
            <Card className="border-0 shadow-sm rounded-4">
              <Card.Body className="d-flex justify-content-between align-items-center">

                <div>
                  <p className="text-muted mb-1">Total Courses</p>
                  <h4 className="fw-bold mb-0">12</h4>
                </div>

                <div style={{ fontSize: "30px" }}>
                  📚
                </div>

              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm rounded-4">
              <Card.Body className="d-flex justify-content-between align-items-center">

                <div>
                  <p className="text-muted mb-1">Students</p>
                  <h4 className="fw-bold mb-0">340</h4>
                </div>

                <div style={{ fontSize: "30px" }}>
                  👨‍🎓
                </div>

              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm rounded-4">
              <Card.Body className="d-flex justify-content-between align-items-center">

                <div>
                  <p className="text-muted mb-1">Revenue</p>
                  <h4 className="fw-bold mb-0">Rs. 25,000</h4>
                </div>

                <div style={{ fontSize: "30px" }}>
                  💰
                </div>

              </Card.Body>
            </Card>
          </Col>

        </Row>


        {/* ===== Dashboard Actions ===== */}
        <Row className="g-4">

          {/* Create Course */}
          <Col lg={4} md={6}>
            <Card className="border-0 shadow-lg rounded-4 h-100">
              <Card.Body className="text-center d-flex flex-column">

                <div style={{ fontSize: "45px" }} className="mb-3">
                  ➕
                </div>

                <Card.Title className="fw-semibold">
                  Create Course
                </Card.Title>

                <Card.Text className="text-muted flex-grow-1">
                  Build and publish a new course for your students.
                </Card.Text>

                <Button
                  as={Link}
                  to="/create-course"
                  variant="dark"
                >
                  Create Now
                </Button>

              </Card.Body>
            </Card>
          </Col>


          {/* Manage Courses */}
          <Col lg={4} md={6}>
            <Card className="border-0 shadow-lg rounded-4 h-100">
              <Card.Body className="text-center d-flex flex-column">

                <div style={{ fontSize: "45px" }} className="mb-3">
                  📚
                </div>

                <Card.Title className="fw-semibold">
                  Manage Courses
                </Card.Title>

                <Card.Text className="text-muted flex-grow-1">
                  Edit, update, or delete your existing courses.
                </Card.Text>

                <Button
                  as={Link}
                  to="/instructor/manage-courses"
                  variant="dark"
                >
                  Manage Now
                </Button>

              </Card.Body>
            </Card>
          </Col>


          {/* Upload Lessons */}
          <Col lg={4} md={6}>
            <Card className="border-0 shadow-lg rounded-4 h-100">
              <Card.Body className="text-center d-flex flex-column">

                <div style={{ fontSize: "45px" }} className="mb-3">
                  🎥
                </div>

                <Card.Title className="fw-semibold">
                  Upload Lessons
                </Card.Title>

                <Card.Text className="text-muted flex-grow-1">
                  Add videos, materials, and lessons to your courses.
                </Card.Text>

                <Button
                  as={Link}
                  to="/instructor/manage-courses"
                  variant="dark"
                >
                  Upload Now
                </Button>

              </Card.Body>
            </Card>
          </Col>

        </Row>

      </Container>
    </div>
  );
};

export default InstructorDashboard;