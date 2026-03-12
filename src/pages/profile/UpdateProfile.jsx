
import { useEffect, useState, useContext } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import Loader from "../../components/common/Loader";
import { toast } from "react-toastify";
import { getCurrentUser, updateProfile } from "../../api/user.api";
import { AuthContext } from "../../context/AuthContext";

const UpdateProfile = () => {
  const { setUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await getCurrentUser();
      const user = res.data.data;

      setFormData({
        name: user.name,
        email: user.email
      });

      setUser(user);
    } catch {
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      const res = await updateProfile(formData);
      toast.success("Profile updated successfully");
      setUser(res.data.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <Loader message="Loading profile..." />;

  return (
    <div style={{ background: "#f8f9fc", minHeight: "100vh" }}>
      <Container className="py-5">

        <Row className="justify-content-center">
          <Col md={6} lg={5}>

            <Card className="border-0 shadow-lg rounded-4">
              <Card.Body className="p-4">

                {/* Profile Avatar */}
                <div className="text-center mb-4">
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: "#111",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "28px",
                      fontWeight: "bold",
                      margin: "0 auto",
                    }}
                  >
                    {formData.name?.charAt(0).toUpperCase()}
                  </div>

                  <h4 className="fw-bold mt-3 mb-1">Update Profile</h4>
                  <p className="text-muted small">
                    Keep your information up to date
                  </p>
                </div>

                {/* Form */}
                <Form onSubmit={handleSubmit}>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">
                      Full Name
                    </Form.Label>
                    <Form.Control
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="py-2"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="py-2"
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="dark"
                    className="w-100 py-2 fw-semibold rounded-3"
                    disabled={updating}
                  >
                    {updating ? "Updating..." : "Update Profile"}
                  </Button>

                </Form>

              </Card.Body>
            </Card>

          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default UpdateProfile;