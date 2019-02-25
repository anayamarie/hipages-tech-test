import React, { Component } from 'react';
import './App.css';
import fetch from 'node-fetch';
import InvitedCard from './components/InvitedCard';
import AcceptedCard from './components/AcceptedCard';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 'invited', invitedComponent:[], acceptedComponent: []};
        this.getInvitedContents = this.getInvitedContents.bind(this);
        this.getAcceptedContents = this.getAcceptedContents.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.getInvitedContents();
    }
    //call for invited endpoint and map the results to InvitedCard component
    getInvitedContents = () => {
        fetch('http://localhost:8080/api/invited')
        .then(res => res.json())
        .then(json => {
            var self = this;
            var invitedLeads = [];
            if(json){
                invitedLeads = json.map(function (item) {
                    if(item.status === 'new'){
                        return (
                            <InvitedCard
                                id = {item.id}
                                contact_name = {item.contact_name}
                                date_created = {item.created_at}
                                job_id = {item.category_id}
                                suburb = {item.location}
                                postcode = {item.postcode}
                                category = {item.category}
                                description = {item.description}
                                price = {item.price}
                                status = {item.status}
                                changeStatus = {self.changeStatus}
                            />
                        )
                    }else{return ''}
                });
            }
            this.setState({invitedComponent: invitedLeads})
        });
    }
    //call for accepted endpoint and map the results to AcceptedCard component
    getAcceptedContents = () => {
        fetch('http://localhost:8080/api/accepted')
        .then(res => res.json())
        .then(json => {
            var acceptedLeads = [];
            if(json){
                acceptedLeads = json.map(function (item) {
                    if(item.status === 'accepted'){
                        return (
                            <AcceptedCard
                                id = {item.id}
                                contact_name = {item.contact_name}
                                date_created = {item.created_at}
                                job_id = {item.category_id}
                                suburb = {item.location}
                                postcode = {item.postcode}
                                category = {item.category}
                                description = {item.description}
                                price = {item.price}
                                status = {item.status}
                                full_name = {item.contact_name}
                                phone_number = {item.contact_phone}
                                email = {item.contact_email}
                            />
                        )
                    }else{return ''}
                });
            }
            this.setState({acceptedComponent: acceptedLeads})
        });
    }
    //edit status endpoint: get id parameter and status in the body then update the status
    changeStatus = (status, id) => {
        fetch('http://localhost:8080/api/edit/'+id, {
            method: 'post',
            body:    JSON.stringify({status:status}),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => {
            if(json.success){
                this.getInvitedContents();
                this.getAcceptedContents();
                document.getElementById('accepted').click();
            }
        });
    }
    //function that changes active tab and active child component
    changeActive = (id) => {
        var selected = document.getElementById(id);
        var list = document.getElementsByTagName("ul")[0];
        var list_child = list.getElementsByTagName("li");
        if(!selected.classList.contains('is-active')){
            for(var i =0; i<list_child.length;i++){
                list_child[i].classList.remove("is-active");
            }
            selected.classList.add("is-active");

            if(id === 'accepted'){
                this.setState({acceptedComponent: []})
                this.getAcceptedContents();
                this.setState({activeTab: 'accepted'});
            }else{
                this.setState({activeTab: 'invited'});
            }
        }
    }
    render() {
        return (
            <div className="App">
                <div className="columns is-centered">
                    <div className="column is-four-fifths">
                        <div className="tabs is-toggle is-fullwidth">
                            <ul>
                                <li id="invited" className='is-active' onClick={() => this.changeActive("invited")}>
                                    <a href="#invited">
                                        <strong>Invited</strong>
                                    </a>
                                </li>
                                <li id="accepted" onClick={() => this.changeActive("accepted")}>
                                    <a href="#accepted">
                                        <strong>Accepted</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                { 
                    this.state.activeTab === 'invited' ? this.state.invitedComponent
                    : (this.state.activeTab === 'accepted' ? this.state.acceptedComponent
                    : '')
                }
            </div>
        );
    }
}

export default App;
