import React from 'react';;
class Add extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            age:18,
            email:'',
            slot:'',
            isPaid: false,
            paidOn: new Date().getMonth(),
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
        this.getCookie=this.getCookie.bind(this);
    }
    
    getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
        
    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Submit Form
    submitForm(){
        this.state.isPaid = true
        var csrftoken = this.getCookie('csrftoken')
        fetch('http://127.0.0.1:8000/api/bookings/',{
            method:'POST',
            headers:{
                'Content-type': 'application/json',
                'X-CSRFTOKEN': csrftoken,
            },
            body:JSON.stringify(this.state),
        })
        .then(
            response=>response.json(),
            console.log(this.state)
        )
        .catch(error=>{
            console.log("here")
            alert("Already paid")
        });

        this.setState({
            name:'',
            age:18,
            email:'',
            slot:'',
            isPaid:true,
            paidOn: '',
        });
    }

    render(){
        return (
            <>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Full Name</th>
                        <td>
                            <input value={this.state.name} name="name" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>
                            <input value={this.state.age} name="age" onChange={this.changeHandler} type="text" className="form-control" min="18"/>
                            {this.state.age < 18 && alert("Age limit of 18-65")} 
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                            <input value={this.state.email} name="email" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>slot</th>
                        <td>
                        <label>
                            <select id="slot" name="slot" onChange={this.changeHandler} value={this.state.slot}>
                                <option value="6-7AM">6-7AM</option>
                                <option value="7-8AM">7-8AM</option>
                                <option value="8-9AM">8-9AM</option>
                                <option value="5-6PM">5-6PM</option>
                            </select>
                        </label><br/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="submit" value="Pay" onClick={this.submitForm} className="btn btn-dark" href="" />        
                        </td>
                    </tr>
                </tbody>
            </table>
            {this.state.isPaid && <div class="container">
                <div class="row">
                    <div class="col-md-6 mx-auto mt-5">
                        <div class="payment">
                            <div class="payment_header">
                            <div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>
                            </div>
                            <div class="content">
                            <h1>Payment Success !</h1>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
            }
            </>
        );
    }
}

export default Add;