import React from 'react';
import { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getToDos, getUserDetails } from '../Services/api';
import Modal from 'react-bootstrap/Modal';


class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: [],
            show: false,
            userDetails: {}
        }
    }

    componentDidMount() {

        getToDos().then(result => {
            this.setState({ toDos: result });
        })

    }

    onClickHandler = (e) => {
        const id = e.target.value;
        console.log("Id of element is : ", e.target.value);
        getUserDetails(id).then(result => {
            this.setState({ userDetails: result });
        })
        this.setState({ show: true })
    }

    handleClose = () => {
        this.setState({ show: false })
    }

    render() {

        console.log("State : ", this.state);

        const toDos = this.state.toDos.map(element => {
            return (
                <>
                    <tr>
                        <td>{element.id}</td>
                        <td>{element.title}</td>
                        <td>{element.completed ? 'Complete' : 'Incomplete'}</td>
                        <td>
                            <Button variant="outline-secondary" value={element.id} onClick={e => this.onClickHandler(e)}>View User</Button>
                        </td>
                    </tr>
                </>
            )
        })

        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ToDo ID</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toDos}
                    </tbody>
                </Table>


                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>User Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>ToDo ID</td>
                                    <td>{this.state.userDetails.id}</td>
                                </tr>
                                <tr>
                                    <td>ToDo Title</td>
                                    <td>{this.state.userDetails.title}</td>
                                </tr>
                                <tr>
                                    <td>User Id</td>
                                    <td>{this.state.userDetails.id}</td>
                                </tr>
                                <tr>
                                    <td>User Name</td>
                                    <td>{this.state.userDetails.name}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{this.state.userDetails.email}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}

export default ToDo;