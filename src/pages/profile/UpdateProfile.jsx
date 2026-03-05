
import { useEffect, useState, useContext } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
// import { AuthContext } from "../../context/AuthContext";
import Loader from "../../components/common/Loader";
import { toast } from "react-toastify";
import { getCurrentUser, updateProfile } from "../../api/user.api";
import { AuthContext } from "../../context/AuthContext";
// import { getCurrentUser, updateUserDetails } from "../../api/user.api";

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
      console.log("current user details",res)
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
    <Container className="py-5">
      <Card className="shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
        <Card.Body>
          <h4 className="fw-bold mb-4 text-center">Update Profile</h4>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button
              type="submit"
              variant="dark"
              className="w-100"
              disabled={updating}
            >
              {updating ? "Updating..." : "Update Profile"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UpdateProfile;