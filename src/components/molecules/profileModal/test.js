import React, {  useState } from 'react';
import './test.css'
import ucliq from '../../../assets/images/card2.jpg';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";

const ModalExample = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [bankname, setBankname] = useState(props.oldDet.bankname)
    const [Account, setAccount] = useState(props.oldDet.account)
    const [iifsc, setiifsc] = useState(props.oldDet.iifsc)
    var details = ""
    let Bank = {
        bankname: bankname,
        accountnumber: Account,
        iifsc: iifsc
    }
    const updateDetail = () => {
        if (details.length > 0) {
            if (props.detailsType === "Username") {
                props.func(details, "name")
            }
            else
                if (props.detailsType === "GST Number") {
                    props.func(details, "gstin")
                }
        }
        else
            if (props.detailsType === "BankDetails") {
                props.func(Bank, "bankdetails")
            } else
                props.func(details, "pincode")
    }
    const onChange = (e) => {
        details = e.target.value
    }
    const onchangeBank = (e) => {
        if (e.target.name === 'bankname') {
            setBankname(e.target.value)
        }
        if (e.target.name === 'accountnumber') {
            setAccount(e.target.value)
        }
        if (e.target.name === 'iifsc') {
            setiifsc(e.target.value)
        }
    }
    return (
        <div> 
            <form>
                <Button color="primary" type="button" style={{ float: " right", color: "white", border: "none", padding:"10px 38px" }} onClick={toggle}>EDIT</Button>
                <Modal  isOpen={modal} toggle={toggle} className={className}>
                    <div class="ucliq-mod">
                        <img src={ucliq} className="ucliq-edit"/>
                    </div>
                    <ModalHeader toggle={toggle}>{props.detailsType}</ModalHeader>
                    <ModalBody>
                        {(() => {
                            if (props.detailsType === "Username") {
                                return (
                                    <div style={{ display: "block" }}>
                                        <div className="ucliqPoster">
                                        </div>
                                        <div className="form-group">
                                            <input id="text" onChange={onChange} placeholder={props.oldDet} class="form-control" />
                                        </div>
                                   
                                    </div>
                                );
                            } 
                        })()}
                    </ModalBody>
                    <ModalFooter>
                        <Button 
                            style={{
                                backgroundColor: "#007bff",
                                color: "#fff",
                                fontWeight: "400",
                                border: "none",
                                fontSize: "18px",
                                borderRadius: "5px",
                                position: "relative",
                                padding: '10px 23px',
                                margin: '1rem 1rem',
                                fontFamily: 'Proxima Nova Th'
                                    }} 
                            onClick={() => { updateDetail(); toggle(); }}>SUBMIT</Button>{' '}
                    </ModalFooter>
                </Modal>
            </form>
        </div>
    );
}


export default ModalExample;
