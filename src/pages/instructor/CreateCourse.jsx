
import { useState } from "react";
import { Container, Form, Button, Card, Row, Col, Image } from "react-bootstrap";
import { toast } from "react-toastify";
import { createCourse } from "../../api/course.api";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });

  const [preview, setPreview] = useState(
    "https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-4765.jpg"
  );

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCourse(formData);
      console.log("creation course ", formData);
      toast.success("Course created successfully!");
      navigate("/manage-courses");
    } catch (error) {
      toast.error(error.response?.data?.message || "Creation failed");
    }
  };

  return (
    <div style={{ background: "#f6f8fb", minHeight: "100vh" }}>
      <Container className="py-5">

        <Row className="justify-content-center">

          {/* FORM SECTION */}
          <Col lg={6}>

            <Card className="border-0 shadow-lg rounded-4">
              <Card.Body className="p-4">

                {/* Header */}
                <div className="text-center mb-4">

                  <div
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      background: "#111",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "26px",
                      margin: "0 auto"
                    }}
                  >
                    📚
                  </div>

                  <h4 className="fw-bold mt-3">Create New Course</h4>

                  <p className="text-muted small">
                    Fill the details to publish your course
                  </p>

                </div>

                <Form onSubmit={handleSubmit}>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">
                      Course Title
                    </Form.Label>
                    <Form.Control
                      placeholder="Enter course title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">
                      Description
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Write a short description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">
                          Category
                        </Form.Label>
                        <Form.Control
                          placeholder="Web Development"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">
                          Price (PKR)
                        </Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="1000"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button
                    type="submit"
                    variant="dark"
                    className="w-100 py-2 fw-semibold rounded-3"
                  >
                    Publish Course
                  </Button>

                </Form>

              </Card.Body>
            </Card>

          </Col>

          {/* PREVIEW SECTION */}
          <Col lg={4} className="mt-4 mt-lg-0">

            <Card className="border-0 shadow-sm rounded-4">
              <Image
                src={preview}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px"
                }}
              />

              <Card.Body>

                <h5 className="fw-bold">
                  {formData.title || "Course Title"}
                </h5>

                <p className="text-muted small">
                  {formData.description || "Course description will appear here."}
                </p>

                <div className="d-flex justify-content-between">

                  <span className="badge bg-secondary">
                    {formData.category || "Category"}
                  </span>

                  <span className="fw-bold text-primary">
                    Rs. {formData.price || "0"}
                  </span>

                </div>

              </Card.Body>
            </Card>

          </Col>

        </Row>

      </Container>
    </div>
  );
};

export default CreateCourse;