import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class Aclaraciones extends React.Component {
  render() {
    return (
      <Form>
        <div className="row">
          <div className="col-md-6">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresar" />
              {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Tag o Cuenta:</Form.Label>
              <Form.Control as="select">
                <option>Tag</option>
                <option>Cuenta</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="col-md-12">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mensaje:</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </div>
        </div>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    );
  }
}
export default Aclaraciones;
