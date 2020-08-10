import React from 'react';
import { ContainerHeader, DivButtonDeleteFile, DivLabelFormat } from '../../components/Container';
import { LabelDefault } from '../../components/Label';
import { Row, Col } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { InputDefault } from '../../components/input';
import { ButtonDefault } from '../../components/Button';
import { CardListDefault } from '../../components/Card';
import { DeleteOutlined } from "@ant-design/icons";

const divName = {
    width: "20%",
}

const divTrash = {
    width: "80%",
}


export default function ListAdms() {
    return (
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
                        <ButtonDefault href="/new_scale" float="right" icon={<PlusOutlined />}>
                            Nova Adm
                        </ButtonDefault>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <div>
                        <CardListDefault margin="20px 0 0 0" >
                            <DivLabelFormat>
                                <div style={divTrash}>
                                    <LabelDefault className="f-left" marginBottom="none">Jonathan Cardoso</LabelDefault><br />
                                    <h5 className="f-left">Administrador</h5>
                                </div>
                                <div style={divTrash}>
                                    <DivButtonDeleteFile className="f-right" margin="10px">
                                        <DeleteOutlined className="deleteButton" />
                                    </DivButtonDeleteFile>
                                </div>
                            </DivLabelFormat>
                        </CardListDefault>
                    </div>
                </Col>
            </Row>
        </ContainerHeader>
    );
}