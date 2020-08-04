import React, { Component } from 'react'
import { Container, DivButtonDeleteFile, DivInputFileDefault, ContainerHeader } from '../../components/Container';
import { InputDefault, TextArea } from '../../components/input';
import { LabelDefault } from '../../components/Label';
import { ButtonDefault } from '../../components/Button';
import {FormDefault} from '../../components/Form';
import { Row, Col } from 'antd';
import { CardDefault } from '../../components/Card'
import { PaperClipOutlined, DeleteOutlined } from "@ant-design/icons";


const button = {
    marginTop: "30px"
};

const divInitial = {
    textAlign: "initial",
    maxWidth: "600px",
};

const divValMaxMin = {
    display: "flex",
};


export default function NewScale() {
    return (
        <ContainerHeader>
            <FormDefault>
                <Row >
                    <Col span={24}>
                        <h1>Nova Escala</h1>
                        <div>
                            <LabelDefault className="f-left">Título:</LabelDefault >
                            <InputDefault placeholder="Insira o título da escala" />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                            <LabelDefault className="f-left">Informações:</LabelDefault >
                            <TextArea rows={5}></TextArea>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                            <LabelDefault className="f-left">Valores da escala:</LabelDefault >
                        </div>
                    </Col>
                    <Col span={24}>
                        <div style={divValMaxMin}>
                            <InputDefault placeholder="Valor máximo" maxWidth="150px" margin="0 10px 0 0" />
                            <h3>à</h3>
                            <InputDefault placeholder="Valor minimo" maxWidth="150px" margin="0 0 0 10px" />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                            <LabelDefault className="f-left">Labels dos  Valores:</LabelDefault >
                        </div>
                    </Col>
                    <Col span={24}>
                        <div style={divInitial}>
                            <InputDefault placeholder="Label máximo" maxWidth="310px" />
                            <InputDefault placeholder="Label minimo" maxWidth="310px" margin="10px 0 0 0" />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                            <LabelDefault className="f-left">Imagem:</LabelDefault >
                        </div>
                    </Col>
                    <Col span={24}>
                        <DivButtonDeleteFile>
                            <DivInputFileDefault>

                                <PaperClipOutlined />
                                <InputDefault id="inputFile1" type="file" />
                                <LabelDefault id="labelInputFile1"></LabelDefault>
                            </DivInputFileDefault>
                            <DeleteOutlined className="deleteButton"/>
                        </DivButtonDeleteFile>
                    </Col>
                    <Col span={24}>
                        <div>
                            <LabelDefault className="f-left">Perguntas:</LabelDefault >
                        </div>
                    </Col>
                    <Col span={24}>
                        <div style={divInitial}>
                            <InputDefault placeholder="Insira uma pergunta" maxWidth="300px" margin="0 10px 0 0" />
                            <ButtonDefault>Adicionar</ButtonDefault>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                            <CardDefault margin="20px 0 0 0">

                            </CardDefault>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                            <ButtonDefault style={button}>Salvar</ButtonDefault>
                        </div>
                    </Col>
                </Row>

            </FormDefault>
        </ContainerHeader>
    );
}