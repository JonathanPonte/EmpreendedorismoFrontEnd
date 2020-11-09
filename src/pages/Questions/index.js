import React, { Component } from 'react'
import { Container, ContainerHeader, DivNumberItem, DivLabelFormat, DivLabelQuestion, DivNumberQuestion } from '../../components/Container';
import { InputDefault } from '../../components/input';
import { LabelDefault, LabelQuestion } from '../../components/Label';
import { ButtonDefault } from '../../components/Button';
import { DatePickerDefault } from '../../components/DatePickerDefault';
import { Row, Col } from 'antd';
import { FormDefault } from '../../components/Form';
import { Radio } from 'antd';
import { CardDefault, CardListDefault } from '../../components/Card'


const button = {
    marginTop: "30px"
};

const divAnswer = {
    marginBottom: "20px",
};

const Questions = [
    { question: "Eu acredito que os meus familiares mais próximos pensam que eu não deveria continuar uma carreira como empreendedor" },
    { question: "Eu acredito que os meus amigos mais próximos pensam que eu não deveria continuar uma carreira como empreendedor" },
    { question: "Eu acredito que as pessoas mais importantes para mim pensam que eu não deveria continuar uma carreira como empreendedor" },
    { question: "Até que ponto você se preocupa com o que seu familiar mais próximo pensa quando você deve decidir se deve ou não prosseguir uma carreira como empregado?" },
    { question: "Até que ponto você se preocupa com o que seu amigo mais próximo pensa quando você deve decidir se deve ou não prosseguir uma carreira como empregado?" },
    { question: "Até que ponto você se preocupa com a pessoa mais importante para você pensa quando você deve decidir se deve ou não prosseguir uma carreira como empregado?" },
    { question: "Até que ponto você se preocupa com a pessoa mais importante para você pensa quando você deve decidir se deve ou não prosseguir uma carreira como empregado?" },
]


const renderCardItem = (card, index) => {
    let rows = [];
    for (let i = 1; i <= 7; i++) {
        rows.push(i);
    }

    return (
        <CardDefault style={divAnswer} key={index}>
            <div>
                <DivNumberQuestion className="f-left">
                    <LabelDefault>{index + 1})</LabelDefault>
                </DivNumberQuestion>
                <DivLabelQuestion>
                    <LabelDefault>{card.question}</LabelDefault>
                </DivLabelQuestion>
            </div>
            <div style={divAnswer}>
                <LabelDefault margin="0 10px 0 0" >Não concordo</LabelDefault>
                <Radio.Group>
                    {rows.map( function(number){
                        return <Radio value={number}>{number}</Radio>
                    })}
                </Radio.Group>
                <LabelDefault>Concordo</LabelDefault>
            </div>
        </CardDefault>
    )
}

export default function Question() {

    return (
        <ContainerHeader>
            <FormDefault>
                <Row >
                    <Col span={24}>
                        <h1>Título da escala</h1>
                    </Col>
                    <Col span={24}>
                    {Questions.map(renderCardItem)}
                    </Col>
                    <Col span={24}>
                        <div>
                            <ButtonDefault style={button}>Finalizar</ButtonDefault>
                        </div>
                    </Col>
                </Row>

            </FormDefault>
        </ContainerHeader>
    );

}

