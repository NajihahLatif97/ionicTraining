import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
    IonRouterLink, IonInput, IonList, IonItem, IonButton, IonLabel,
    IonInfiniteScroll, IonInfiniteScrollContent, IonAvatar
} from '@ionic/react';
import { Component } from "react";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import "./mypage.css"

class DBase extends Component <any, any> {

    constructor(props:any){
        super(props);
        this.state = ({
            userid:null,
            username:null,
            password:null,
            data:[],
            data2:[],
            userdata:[],
            newItems:[],
            msg:null
        })
    }
    doShowRecord = () =>{
        axios.get('https://www.vigshakri.com/ionicdatabase/fetchdata.php')
            .then((response) => {
            console.log(response.data);
            this.setState({data:response.data});
        })
    }      

    doAddRecord = () =>{
        const userdata = {
            vuserid:this.state.userid,
            vname:this.state.username,
            vpass:this.state.password
        }

        axios.post('https://www.vigshakri.com/ionicdatabase/addrecord.php',{userdata})
            .then((response) => {
            this.setState({msg:response.data})
            this.doShowRecord();
            
        })
      }

      doDeleteRecord = () => {
        const userdata = {
            vuserid:this.state.userid,
        }
      axios.post('https://vigshakri.com/ionicdatabase/deleterecord.php',{userdata})
      .then((response) => {
        if (response.data ==0){
            alert("Enter userid!");
        }else{
            this.setState({msg:response.data})
            this.doShowRecord();
        }
      })
    }

    doUpdateRecord = () => {
        const userdata ={
            vuserid:this.state.userid,
            vname:this.state.username,
            vpass:this.state.password
        }
        axios.post('https://www.vigshakri.com/ionicdatabase/updaterecord.php',{userdata})
        .then((response) => {
            if (response.data == 0) {
                alert("Enter userid!");
            }else{
                this.setState({msg:response.data})
                this.doShowRecord();
            }
        })
    }

    doShowSingleRecord = () =>{
        const userdata = {
            vuserid:this.state.userid,
        }
        axios.post('https://www.vigshakri.com/ionicdatabase/fetchsingledata.php',{userdata})
        .then((response) =>{
            console.log(response.data);
            this.setState({data:response.data});
        })
    }

    doShowThisRecord = (uid:string) =>{
        const userdata = {
            vuserid:uid,
        }
        axios.post('https://www.vigshakri.com/ionicdatabase/fetchsingledata.php',{userdata})
        .then((response) =>{
            console.log(response.data);
            this.setState({data:response.data});
        })
    }


    doChangeUserid = (v:string) => {
    this.setState({userid:v});
    
    }
    doChangeUsername = (v:string) => {
        this.setState({username:v});
        
    }
    doChangePassword = (v:string) => {
        this.setState({password:v});
    
    }
    render(){

        return (
            <IonPage>

            <IonHeader>
                <IonToolbar>
                <IonTitle>DB Two</IonTitle>
                </IonToolbar>
            </IonHeader>  
            <IonContent >

            <IonList>
            <IonItem>
                    <IonInput
                        required
                        type="text"
                        name="userid"
                        onIonChange={(e:any) => this.doChangeUserid(e.target.value)}
                        placeholder="Enter user id">
                    </IonInput>
            </IonItem>
            <IonItem>
                    <IonInput
                        required
                        type="text"
                         name="username"
                        onIonChange={(e: any) => this.doChangeUsername(e.target.value)}
                        placeholder="Enter name">
                    </IonInput>
            </IonItem>
                <IonItem>
                        <IonInput
                            required
                            type="text"
                            name="password"
                            onIonChange={(e: any) => this.doChangePassword(e.target.value)}
                            placeholder="Enter password">
                        </IonInput>
                </IonItem>
                <IonItem>
                    <IonButton color="success"  onClick={ () => this.doAddRecord() } disabled={false}>Save</IonButton>
                    <IonButton color="primary"  onClick={ () => this.doShowRecord() } disabled={false}>Show</IonButton>
                    <IonButton color="warning"  onClick={ () => this.doUpdateRecord() } disabled={false}>Update</IonButton>
                    <IonButton color="danger"  onClick={ () => this.doDeleteRecord() } disabled={false}>Delete</IonButton>
                    <IonButton color="tertiary"  onClick={ () => this.doShowSingleRecord() } disabled={false}>Show Single</IonButton>
                </IonItem>
            </IonList>
            <p>{this.state.msg}</p>
            <IonList>
                    <IonItem color="tertiary">
                            <IonLabel >User ID</IonLabel>
                            <IonLabel>Name</IonLabel>
                            <IonLabel>Password</IonLabel>
                    </IonItem>
                {
                    this.state.data.map( (user:any) => (
                        <IonItem>
                            <IonLabel onClick={() => this.doShowThisRecord(user.userid) }> {user.userid} </IonLabel>
                            <IonLabel> {user.username}   </IonLabel>
                            <IonLabel> {user.password}   </IonLabel>
                            
                            {/* <IonButton color="success"  onClick={ () => this.doAddRecord() } disabled={false}>{user.userid}Save</IonButton>
                            <IonButton color="primary"  onClick={ () => this.doShowRecord() } disabled={false}>{user.userid}Show</IonButton>
                            <IonButton color="danger"  onClick={ () => this.doDeleteRecord() } disabled={false}>{user.userid}Delete</IonButton>
                            <IonButton color="warning"  onClick={ () => this.doUpdateRecord() } disabled={false}>{user.userid}Update</IonButton> */}
                        </IonItem>
                    ))
                }  
            </IonList> 


            </IonContent>
            </IonPage>

        )
    }

}

export default DBase;