import React, {Component} from 'react';
import moment from 'moment';
import '../App.css';

class InvitedCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact_name: this.props.contact_name ? (this.props.contact_name).split(" ")[0] : '',
            date_created: this.props.date_created ? moment(this.props.date_created).format("MMMM DD") : '',
            time: this.props.date_created ? moment(this.props.date_created).format("hh:mm a") : '',
            suburb: this.props.suburb ? this.props.suburb : '',
            category: this.props.category ? this.props.category : '',
            id: this.props.id ? this.props.id : '',
            description: this.props.description ? this.props.description : '',
            price: this.props.price ? this.props.price : '',
            status: this.props.status ? this.props.status : '',
            postcode: this.props.postcode ? this.props.postcode : '',
            job_id: this.props.job_id ? this.props.job_id : ''
        }
    }
    render() {
        return (
            <div className="columns is-centered" key={this.state.id}>
                <div className="column is-four-fifths">
                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Invited"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">{this.state.contact_name}</p>
                                    <p className="subtitle is-6">
                                        <span>{this.state.date_created}</span> @&nbsp;
                                        <span>{this.state.time}</span>
                                    </p>
                                </div>
                            </div>
                            <hr className="hr" style={{"marginTop": "0"}}></hr>
                            <div className="has-text-left" id="job">
                                <span className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </span>
                                <span>{this.state.suburb}&nbsp;</span>
                                <span>{this.state.postcode}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span className="icon">
                                    <i className="fas fa-toolbox"></i>
                                </span>
                                <span>{this.state.category}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span>JOB ID:&nbsp;</span>
                                <span>{this.state.job_id}</span>
                            </div>
                            <hr className="hr" style={{"marginTop": "0"}}></hr>
                            <div className="has-text-left" id="description">
                                {this.state.description}
                            </div>
                            <hr className="hr" style={{"marginTop": "0"}}></hr>
                            <div className="has-text-left">
                                <button className="button" id="accept" onClick={()=>{this.props.changeStatus("accepted", this.state.id)}}>Accept</button>
                                <button className="button" id="decline" onClick={()=>{this.props.changeStatus("declined", this.state.id)}}>Decline</button>
                                <span className="lead-invitation"><strong>${this.state.price}</strong> Lead Invitation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InvitedCard;
