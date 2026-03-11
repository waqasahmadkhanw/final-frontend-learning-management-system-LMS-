
// import { useEffect, useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   Button,
//   Alert,
//   Badge,
//   ProgressBar,
// } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import Loader from "../../components/common/Loader";
// import { getMyCourses } from "../../api/enrollment.api";

// const MyCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchMyCourses();
//   }, []);

//   const fetchMyCourses = async () => {
//     try {
//       setLoading(true);

//       const response = await getMyCourses();

//       console.log("Full API Response:", response);

//       const enrollments = response?.data?.data || [];

//       //  Extract course data from enrollment
//       const extractedCourses = enrollments.map((enrollment) => ({
//         enrollmentId: enrollment._id,
//         progress: enrollment.progress || 0,
//         ...enrollment.course,
//       }));

//       console.log("Processed Courses:", extractedCourses);

//       setCourses(extractedCourses);

//     } catch (error) {
//       console.error("Fetch My Courses Error:", error);

//       toast.error(
//         error?.response?.data?.message || "Failed to fetch enrolled courses"
//       );

//       setCourses([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <Loader message="Fetching your enrolled courses..." />;
//   }

//   return (
//     <Container className="py-5">

//       {/* ===== Header ===== */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2 className="fw-bold">🎓 My Courses</h2>
//         <Badge bg="secondary">{courses.length} Enrolled</Badge>
//       </div>

//       {/* ===== Empty State ===== */}
//       {courses.length === 0 ? (
//         <Alert variant="info" className="text-center">
//           You are not enrolled in any courses yet.
//         </Alert>
//       ) : (
//         <Row className="g-4">

//           {courses.map((course) => (

//             <Col md={4} sm={6} key={course.enrollmentId}>
//               <Card className="shadow-sm border-0 h-100 course-card">

//                 <Card.Body className="d-flex flex-column">

//                   {/* Course Title */}
//                   <Card.Title className="fw-semibold mb-2">
//                     {course.title}
//                   </Card.Title>

//                   {/* Description */}
//                   <Card.Text className="text-muted flex-grow-1">
//                     {course.description
//                       ? course.description.length > 100
//                         ? course.description.substring(0, 100) + "..."
//                         : course.description
//                       : "No description available."}
//                   </Card.Text>

//                   {/* Instructor */}
//                   <div className="mb-2">
//                     <small className="text-muted">
//                       Instructor:{" "}
//                       <strong>
//                         {course.instructor?.name || "Unknown"}
//                       </strong>
//                     </small>
//                   </div>

//                   {/* Progress */}
//                   <div className="mb-3">
//                     <small className="text-muted">
//                       Progress: {course.progress}%
//                     </small>

//                     <ProgressBar
//                       now={course.progress}
//                       label={`${course.progress}%`}
//                       variant="success"
//                       className="mt-1"
//                     />
//                   </div>

//                   {/* Price + Button */}
//                   <div className="d-flex justify-content-between align-items-center mt-auto">
//                     <span className="fw-bold text-primary">
//                       Rs. {course.price || 0}
//                     </span>

//                     <Button
//                       variant="dark"
//                       size="sm"
//                       onClick={() => navigate(`/lesson/${course._id}`)}
//                     >
//                       Continue Learning
//                     </Button>
//                   </div>

//                 </Card.Body>

//               </Card>
//             </Col>

//           ))}

//         </Row>
//       )}
//     </Container>
//   );
// };

// export default MyCourses;


import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Alert,
  Badge,
  ProgressBar,
  Form
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/common/Loader";
import { getMyCourses } from "../../api/enrollment.api";

const MyCourses = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    fetchMyCourses();
  }, []);

  const fetchMyCourses = async () => {

    try {

      setLoading(true);

      const response = await getMyCourses();

      const enrollments = response?.data?.data || [];

      const extractedCourses = enrollments.map((enrollment) => ({
        enrollmentId: enrollment._id,
        progress: enrollment.progress || 0,
        ...enrollment.course,
      }));

      setCourses(extractedCourses);

    } catch (error) {

      toast.error(
        error?.response?.data?.message ||
        "Failed to fetch enrolled courses"
      );

      setCourses([]);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {
    return <Loader message="Fetching your enrolled courses..." />;
  }

  /* ===== FILTER COURSES ===== */

  const filteredCourses = courses.filter((course) => {

    const matchSearch =
      course.title.toLowerCase().includes(search.toLowerCase());

    if (filter === "completed") {
      return matchSearch && course.progress === 100;
    }

    if (filter === "progress") {
      return matchSearch && course.progress < 100;
    }

    return matchSearch;

  });

  return (

    <Container className="py-5">

      {/* ===== Header ===== */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2 className="fw-bold">
          🎓 My Learning Dashboard
        </h2>

        <Badge bg="dark" className="px-3 py-2">
          {courses.length} Courses
        </Badge>

      </div>

      {/* ===== Search + Filter ===== */}

      <Row className="mb-4">

        <Col md={6}>

          <Form.Control
            placeholder="Search your courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </Col>

        <Col md={3}>

          <Form.Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >

            <option value="all">All Courses</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>

          </Form.Select>

        </Col>

      </Row>

      {/* ===== Empty State ===== */}

      {filteredCourses.length === 0 ? (

        <Alert variant="info" className="text-center">

          No matching courses found.

        </Alert>

      ) : (

        <Row className="g-4">

          {filteredCourses.map((course) => (

            <Col lg={4} md={6} key={course.enrollmentId}>

              <Card className="border-0 shadow-lg h-100 rounded-4">

                {/* Course Image */}

                <Card.Img
                  variant="top"
                  src={
                    course.image ||
                    "https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg"
                  }
                  style={{
                    height: "180px",
                    objectFit: "cover"
                  }}
                />

                <Card.Body className="d-flex flex-column">

                  {/* Title */}

                  <Card.Title className="fw-semibold">

                    {course.title}

                  </Card.Title>

                  {/* Instructor */}

                  <small className="text-muted mb-2">

                    Instructor:{" "}
                    <strong>
                      {course.instructor?.name || "Unknown"}
                    </strong>

                  </small>

                  {/* Description */}

                  <Card.Text className="text-muted flex-grow-1">

                    {course.description
                      ? course.description.length > 90
                        ? course.description.substring(0, 90) + "..."
                        : course.description
                      : "No description available."}

                  </Card.Text>

                  {/* Progress */}

                  <div className="mb-3">

                    <div className="d-flex justify-content-between">

                      <small>Progress</small>

                      <small className="fw-semibold">
                        {course.progress}%
                      </small>

                    </div>

                    <ProgressBar
                      now={course.progress}
                      variant="success"
                    />

                  </div>

                  {/* Footer */}

                  <div className="d-flex justify-content-between align-items-center mt-auto">

                    <span className="fw-bold text-primary">

                      Rs. {course.price || 0}

                    </span>

                    <Button
                      variant="dark"
                      size="sm"
                      onClick={() =>
                        navigate(`/lesson/${course._id}`)
                      }
                    >

                      Continue Learning

                    </Button>

                  </div>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      )}

    </Container>

  );

};

export default MyCourses;