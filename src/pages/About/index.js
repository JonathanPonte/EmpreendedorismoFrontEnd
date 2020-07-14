import React, { Component } from 'react';
import { Container } from '../../components/Container';
import { LabelDefault } from '../../components/Label';
import { CardDefault } from '../../components/Card';
import { Row, Col } from 'antd';
import Logo from '../../assets/images/logo512.png';

const img = {
    width: 200,
    height: 200
}

const div = {
    margin: 10
}

export default function About() {
    return (
        <Container>
            <Row>
                <Col span={8}>
                    <img src={Logo} style={img} />
                </Col>
                <Col span={16}>
                    <div>
                        <LabelDefault>Sobre:</LabelDefault>
                        <CardDefault>
                            <LabelDefault>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</LabelDefault>
                        </CardDefault>
                    </div>
                </Col>
                <Col span={8}/>
                <Col span={8}>
                    <div style={div}>
                        <LabelDefault>Professores:</LabelDefault>
                        <CardDefault>
                            <LabelDefault>Milton</LabelDefault>
                        </CardDefault>
                    </div>
                </Col>
                <Col span={8}>
                    <div style={div}>
                        <LabelDefault>Alunos:</LabelDefault>
                        <CardDefault>
                            <LabelDefault>Jonathan</LabelDefault>
                        </CardDefault>
                    </div>
                </Col>
                
            </Row>

        </Container>
    );
}
