import React, { Component, useReducer, useState, useEffect } from 'react'
import { ContainerHeader, DivButtonDeleteFile, DivLabelFormat } from '../../components/Container';
import { LabelDefault } from '../../components/Label';
import { Row, Col } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { InputDefault } from '../../components/input';
import { ButtonDefault } from '../../components/Button';
import { CardListDefault } from '../../components/Card';
import { DeleteOutlined } from "@ant-design/icons";
import { FormDefault } from '../../components/Form';
import api from "../../service/Api";
import { useSelector } from "react-redux";

const divName = {
    width: "20%",
}

const divTrash = {
    width: "80%",
}

// const cardAdms = [
//     { name: "Jonathan Cardoso", cargo: "Administrador" },
//     { name: "Miqueias Rodrigues", cargo: "Administrador" },
//     { name: "Juliana Alves", cargo: "Administrador" },
//     { name: "Ronaldo Almeida", cargo: "Administrador" },
//     { name: "Plinio Feitosa", cargo: "Administrador" },
//     { name: "Rodrigo Lins", cargo: "Administrador" },
//     { name: "Rodrigo Lins", cargo: "Administrador" },
// ]

const renderCard = (card, index) => {
    return (
        <DivLabelFormat key={index}>
            <div style={divTrash} >
                <LabelDefault className="f-left" marginBottom="none">{card.name}</LabelDefault><br />
                <h5 className="f-left">{card.cargo}</h5>
            </div>
            <div style={divTrash}>
                <DivButtonDeleteFile className="f-right" margin="10px">
                    <DeleteOutlined className="deleteButton" />
                </DivButtonDeleteFile>
            </div>
        </DivLabelFormat>
    )
}



export default function ListAdms() {

    const userRedux = useSelector(state => state.user);
    const [cardAdms, setCardAdms] = useState("");


    useEffect(() => {
      api.get("/adm", {
            headers: {
                authorization: 'Bearer ' + userRedux.session.token
            }

        }).then( response => {

            var listAdms = [];

            listAdms = response.data;

            setCardAdms(listAdms);

        }).catch( e =>{

            console.log("Erro: " + e.response);

        })
    }, [])



    return cardAdms ? (
        <ContainerHeader margin="0 100px 0 100px">
            <Row>
                <Col span={24}>
                    <div>
                        <InputDefault
                            prefix={<SearchOutlined className="icon-style" />}
                            minWidth="200px"
                            maxWidth="400px"
                            float="left"
                            placeholder="Nome do Administrador" />
                        <ButtonDefault margin="0 0 0 10px" float="left">
                            Buscar
                        </ButtonDefault>
                        <ButtonDefault href="/new_adm" float="right" icon={<PlusOutlined />}>
                            Nova Adm
                        </ButtonDefault>
                    </div>
                </Col>
                <Col span={24}>
                    <div>
                        <CardListDefault margin="20px 0 0 0">
                            {cardAdms.map(renderCard)}
                        </CardListDefault>
                    </div>
                </Col>
            </Row>
        </ContainerHeader>
    ) : (
        <div>Loading...</div>
    );
}