import React from 'react';
import { ContainerHeader, DivButtonDeleteFile, DivInputFileDefault, DivNumberItem, DivLabelFormat } from "../../components/Container";
import { FormInformationScale, FormDefaultInformations} from '../../components/Form';
import { Row, Col } from 'antd';
import { ButtonDefault } from '../../components/Button';
import { DownloadOutlined, ExceptionOutlined, EditOutlined, PaperClipOutlined} from '@ant-design/icons';
import { InputDefault,} from '../../components/input';
import { LabelDefault } from '../../components/Label';
import { CardListDefault } from '../../components/Card'

export default function InformationScale() {

    const divHeader = {
        margin: "10px",
    }

    const h1 = {
        float: "initial",
    };

    const divInitial = {
        textAlign: "initial",
        maxWidth: "600px",
    };

    const organizationCol = {
        display: "grid",
        textAlign: "initial",
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
        return (
            <div style={divHeader} key={index}>
                <DivNumberItem className="f-left">
                    <LabelDefault>{index + 1}</LabelDefault>
                </DivNumberItem>
                <DivLabelFormat>
                    <LabelDefault>{card.question}</LabelDefault>
                </DivLabelFormat>
            </div>
        )
    }

    return (
        <ContainerHeader>
            <FormInformationScale>
                <Row>
                    <Col span={24}>
                        <div>
                            <h1 style={h1}>Nome da escala</h1>
                        </div>
                        <div style={divHeader}>
                            <ButtonDefault href="/new_scale" margin="0 10px 0 0" icon={<EditOutlined />}>
                                Editar
                            </ButtonDefault>
                            <ButtonDefault href="/new_scale" icon={<DownloadOutlined />}>
                                Download CSV
                            </ButtonDefault>
                            <ButtonDefault href="/questions" margin="0 0 0 10px" icon={<ExceptionOutlined />}>
                                Teste escala
                            </ButtonDefault>
                        </div>
                    </Col>
                </Row>
                <FormDefaultInformations>
                    <Row>
                        <Col span={24}>
                            <div>
                                <LabelDefault className="f-left">Título:</LabelDefault >
                            </div>
                        </Col>
                        <Col span={24}>
                            <div>
                                <DivLabelFormat>
                                    <LabelDefault>Escala 1</LabelDefault>
                                </DivLabelFormat>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div>
                                <LabelDefault className="f-left">Informações:</LabelDefault >
                            </div>
                        </Col>
                        <Col span={24}>
                            <div>
                                <DivLabelFormat minHeight="150px">
                                    <LabelDefault>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</LabelDefault>
                                </DivLabelFormat>
                            </div>
                        </Col>
                        <Col span={24} style={organizationCol}>
                            <LabelDefault className="f-left">Valores da escala:</LabelDefault >
                            <div>
                                <DivLabelFormat maxWidth="100px" padding="2px 2px 2px 32px">
                                    <LabelDefault textAlign="center">1 à 7</LabelDefault>
                                </DivLabelFormat>
                            </div>
                        </Col>
                        <Col span={24} style={organizationCol}>
                            <LabelDefault className="f-left">Labels dos Valores:</LabelDefault >
                            <div style={divInitial}>
                                <DivLabelFormat maxWidth="310px">
                                    <LabelDefault>Discordo Totalmente</LabelDefault>
                                </DivLabelFormat>
                                <DivLabelFormat maxWidth="310px">
                                    <LabelDefault>Concordo Totalmente</LabelDefault>
                                </DivLabelFormat>
                            </div>
                        </Col>
                        <Col span={24} style={organizationCol}>
                            <LabelDefault className="f-left">Imagem:</LabelDefault >
                            <DivButtonDeleteFile margin="none">
                                <DivInputFileDefault>
                                    <PaperClipOutlined />
                                    <InputDefault id="inputFile1" type="file" />
                                    <LabelDefault id="labelInputFile1">Foto.jpg</LabelDefault>
                                </DivInputFileDefault>
                            </DivButtonDeleteFile>
                        </Col>
                        <Col span={24}>

                        </Col>
                        <Col span={24}>
                            <div>
                                <LabelDefault className="f-left">Perguntas:</LabelDefault >
                            </div>
                        </Col>
                        <Col span={24}>
                            <div>
                                <CardListDefault margin="10px 0 0 0" >
                                    {Questions.map(renderCardItem)}
                                </CardListDefault>
                            </div>
                        </Col>
                        
                    </Row>
                </FormDefaultInformations>
            </FormInformationScale>

        </ContainerHeader>
    );
}