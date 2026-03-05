import { Container, Button } from "react-bootstrap";

const EmptyState = ({
  title = "No Data Found",
  message = "There is nothing to display.",
  buttonText,
  onButtonClick
}) => {
  return (
    <Container className="text-center mt-5">
      <h4 className="text-muted">{title}</h4>
      <p className="text-secondary">{message}</p>

      {buttonText && (
        <Button variant="primary" onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </Container>
  );
};

export default EmptyState;