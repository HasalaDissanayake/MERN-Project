import React, { Component } from 'react';
import axios from 'axios';

class CreatePost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topic: "",
            description: "",
            price:""
        };
    }

    //see form input change update state
    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { topic, description, price } = this.state;

        const data = {
            topic: topic,
            description: description,
            price: price
        }

        console.log(data);

        axios.post('http://localhost:8000/women/post/save', data).then((res) => {
            if (res.data.success) {
                alert("Created Post Successfully")
                this.setState(
                    {
                        topic: "",
                        description: "",
                        price:""
                    }
                )
            }
        })
    }


    render() {
        return (
            <div className='col-md-8 mt-4 mx-auto'>
                <h1 className='h3 mb-3 font-weight-normal'>Create new post</h1>
                <form className='needs-validation' noValidate>
                    <div className='form-group' style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Topic</label>
                        <input type='text'
                            className='form-control'
                            name='topic'
                            placeholder='Enter Topic'
                            value={this.state.topic}
                            onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Description</label>
                        <input type='text'
                            className='form-control'
                            name='description'
                            placeholder='Enter Description'
                            value={this.state.description}
                            onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{ marginBottom: '15px' }}>
                        <label style={{ marginBottom: '5px' }}>Price</label>
                        <input type='text'
                            className='form-control'
                            name='price'
                            placeholder='Enter Price'
                            value={this.state.price}
                            onChange={this.handleInputChange}/>
                    </div>

                    <button className='btn btn-success' type='submit' style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                        <i className='far fa-check-square'></i>
                        &nbsp; Save
                    </button>
                
                </form>

            </div>
        );
    }
}

export default CreatePost;