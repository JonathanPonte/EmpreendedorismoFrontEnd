import React from 'react';
import { ContainerHeader } from "../../components/Container";
import { FormInformationScale } from '../../components/Form';
import { Row, Col } from 'antd';
import { ButtonDefault } from '../../components/Button';
import { DownloadOutlined, ExceptionOutlined, EditOutlined} from '@ant-design/icons';

export default function InformationScale() {

    const divHeader = {
        margin: "10px",
    }


    return (
        <ContainerHeader>
            <FormInformationScale>
                <Row>
                    <Col span={24}>
                        <h1>Nome da escala</h1>
                        <div style={divHeader}>
                            <ButtonDefault href="/new_scale" float="right" margin="0 0 0 10px" icon={<EditOutlined />}>
                                Editar
                            </ButtonDefault>
                            <ButtonDefault href="/new_scale" float="right" icon={<DownloadOutlined />}>
                                Download CSV
                            </ButtonDefault>
                            <ButtonDefault href="/new_scale" float="right" margin="0 10px 0 0" icon={<ExceptionOutlined />}>
                                Teste escala
                            </ButtonDefault>
                        </div>
                    </Col>
                </Row>
            </FormInformationScale>
        </ContainerHeader>
    );
}