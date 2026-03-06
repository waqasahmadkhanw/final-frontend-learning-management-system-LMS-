
// import { useEffect, useState } from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import Loader from "../../components/common/Loader";
// import { deleteCourse, getInstructorCourses } from "../../api/course.api";

// const ManageCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const { data } = await getInstructorCourses();
//       setCourses(data?.data || []);
//     } catch (error) {
//       toast.error("Failed to fetch courses");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     const confirm = window.confirm("Are you sure you want to delete this course?");
//     if (!confirm) return;

//     try {
//       await deleteCourse(id);
//       toast.success("Course deleted successfully");
//       setCourses((prev) => prev.filter((course) => course._id !== id));
//     } catch (error) {
//       toast.error("Failed to delete course");
//     }
//   };

//   if (loading) return <Loader message="Loading courses..." />;

//   return (
//     <Container className="py-5">

//       {/* Header */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h3 className="fw-bold">📚 Manage Courses</h3>

//         <Button
//           variant="dark"
//           onClick={() => navigate("/create-course")}
//         >
//           + Create Course
//         </Button>
//       </div>

//       {/* Empty State */}
//       {courses.length === 0 && (
//         <div className="text-center py-5">
//           <h5>No courses found</h5>
//           <p className="text-muted">Start by creating your first course.</p>

//           <Button
//             variant="dark"
//             onClick={() => navigate("/create-course")}
//           >
//             Create Course
//           </Button>
//         </div>
//       )}

//       {/* Courses List */}
//       <Row className="g-4">
//         {courses.map((course) => (
//           <Col md={6} lg={4} key={course._id}>
//             <Card className="shadow-sm border-0 h-100">

//               {/* Course Thumbnail */}
//               {course.thumbnail && (
//                 <Card.Img
//                   variant="top"
//                   src={course.thumbnail}
//                   style={{ height: "180px", objectFit: "cover" }}
//                 />
//               )}

//               <Card.Body className="d-flex flex-column">

//                 <Card.Title className="fw-semibold">
//                   {course.title}
//                 </Card.Title>

//                 <Card.Text className="text-muted flex-grow-1">
//                   {course.description?.substring(0, 90)}...
//                 </Card.Text>

//                 {/* Buttons */}
//                 <div className="d-flex flex-wrap gap-2">

//                   <Button
//                     variant="dark"
//                     size="sm"
//                     onClick={() =>
//                       navigate(`/instructor/edit-course/${course._id}`)
//                     }
//                   >
//                     Edit
//                   </Button>

//                   <Button
//                     variant="secondary"
//                     size="sm"
//                     onClick={() =>
//                       navigate(`/lessons/create-lesson/${course._id}`)
//                     }
//                   >
//                     Add Lesson
//                   </Button>

//                   <Button
//                     variant="danger"
//                     size="sm"
//                     onClick={() => handleDelete(course._id)}
//                   >
//                     Delete
//                   </Button>

//                 </div>

//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//     </Container>
//   );
// };

// export default ManageCourses;
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/common/Loader";
import { deleteCourse, getAllCourses, getInstructorCourses, } from "../../api/course.api";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  // Fetch Instructor Courses
  const fetchCourses = async () => {
    setLoading(true);

    try {
      const response = await getAllCourses();

      const instructorCourses = response?.data?.data || [];

      setCourses(instructorCourses);

    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch instructor courses");
    } finally {
      setLoading(false);
    }
  };

  // Delete Course
  const handleDelete = async (courseId) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {
      await deleteCourse(courseId);

      toast.success("Course deleted successfully");

      // Update state without refetch
      setCourses((prevCourses) =>
        prevCourses.filter((course) => course._id !== courseId)
      );

    } catch (error) {
      console.error(error);
      toast.error("Failed to delete course");
    }
  };

  if (loading) return <Loader message="Loading courses..." />;

  return (
    <Container className="py-5">

      <h3 className="mb-4">Manage Courses</h3>

      {/* If Instructor Has No Courses */}
      {courses.length === 0 ? (

        <div className="text-center py-5">
          <h5>No courses found</h5>

          <p className="text-muted">
            You haven't created any courses yet.
          </p>

          <Button
            variant="dark"
            onClick={() => navigate("/create-course")}
          >
            Create Your First Course
          </Button>
        </div>

      ) : (

        <Row>
          {courses.map((course) => (
            <Col md={4} key={course._id} className="mb-3">

              <Card className="shadow-sm h-100">

                {course.thumbnail && (
                  <Card.Img
                    variant="top"
                    src={course.thumbnail}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                )}

                <Card.Body>

                  <Card.Title>
                    {course.title}
                  </Card.Title>

                  <Card.Text>
                    {course.description?.substring(0, 80)}...
                  </Card.Text>

                  <Button
                    variant="dark"
                    className="me-2"
                    onClick={() =>
                      navigate(`/instructor/edit-course/${course._id}`)
                    }
                  >
                    Edit
                  </Button>

                  <Button
                    variant="secondary"
                    className="me-2"
                    onClick={() =>
                      navigate(`/lessons/create-lesson/${course._id}`)
                    }
                  >
                    Add Lesson
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => handleDelete(course._id)}
                  >
                    Delete
                  </Button>

                </Card.Body>

              </Card>

            </Col>
          ))}
        </Row>

      )}

    </Container>
  );
};

export default ManageCourses;