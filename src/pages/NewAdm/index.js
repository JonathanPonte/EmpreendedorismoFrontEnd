import React, { Component } from 'react'
import { Container, ContainerHeader } from '../../components/Container';
import { InputDefault } from '../../components/input';
import { LabelDefault } from '../../components/Label';
import { ButtonDefault } from '../../components/Button';
import { DatePickerDefault } from '../../components/DatePickerDefault';
import { Row, Col } from 'antd';
import { FormDefault } from '../../components/Form';
import { Radio } from 'antd';


const button = {
    marginTop: "30px"
};


export default function NewAdm() {

    return (
        <ContainerHeader>
            <FormDefault>
                <Row >
                    <Col span={24}>
                        <h1>Novo Administrador</h1>
                        <div>
                            <LabelDefault className="f-left">Nome:</LabelDefault >
                            <InputDefault placeholder="Insira seu nome" />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                            <LabelDefault className="f-left">Email:</LabelDefault >
                            <InputDefault placeholder="Insira seu email" />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                            <LabelDefault className="f-left">Senha:</LabelDefault >
                            <InputDefault placeholder="Insira sua senha" />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                            <LabelDefault className="f-left">Confirmação de senha:</LabelDefault >
                            <InputDefault placeholder="Insira sua senha novamente" />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                        <ButtonDefault style={button}>Cadastrar</ButtonDefault>
                        </div>
                    </Col>
                </Row>

            </FormDefault>
        </ContainerHeader>
    );

}

