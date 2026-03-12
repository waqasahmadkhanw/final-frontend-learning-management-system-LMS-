
import { useState } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import { changePassword } from "../../api/user.api";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.oldPassword || !formData.newPassword) {
      toast.warning("All fields are required");
      return;
    }

    setLoading(true);

    try {
      await changePassword(formData);
      toast.success("Password changed successfully");
      setFormData({ oldPassword: "", newPassword: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Password change failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "#f8f9fc", minHeight: "100vh" }}>
      <Container className="py-5">

        <Row className="justify-content-center">
          <Col md={6} lg={5}>

            <Card className="border-0 shadow-lg rounded-4">
              <Card.Body className="p-4">

                {/* Header */}
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
                      margin: "0 auto"
                    }}
                  >
                    🔒
                  </div>

                  <h4 className="fw-bold mt-3 mb-1">Change Password</h4>
                  <p className="text-muted small">
                    Update your account password to keep it secure
                  </p>

                </div>

                <Form onSubmit={handleSubmit}>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">
                      Current Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="oldPassword"
                      value={formData.oldPassword}
                      onChange={handleChange}
                      placeholder="Enter current password"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">
                      New Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      placeholder="Enter new password"
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="dark"
                    className="w-100 py-2 fw-semibold rounded-3"
                    disabled={loading}
                  >
                    {loading ? "Updating..." : "Change Password"}
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

export default ChangePassword;