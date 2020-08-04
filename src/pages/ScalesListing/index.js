import React from 'react';
import { ContainerHeader, Container, ContainerScale } from '../../components/Container';
import { Row, Col } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { InputDefault } from '../../components/input';
import { ButtonDefault} from '../../components/Button';

const cardInfo = [
    { name: "Escala 1", image: "https://blog.hotmart.com/blog/2017/10/BLOG_empreendedorismo-no-brasil-670x419.png" },
    { name: "Escala 2", image: "https://blog.hotmart.com/blog/2017/10/BLOG_empreendedorismo-no-brasil-670x419.png" },
    { name: "Escala 3", image: "https://blog.hotmart.com/blog/2017/10/BLOG_empreendedorismo-no-brasil-670x419.png" },
    { name: "Escala 4", image: "https://blog.hotmart.com/blog/2017/10/BLOG_empreendedorismo-no-brasil-670x419.png" },
    { name: "Escala 4", image: "https://blog.hotmart.com/blog/2017/10/BLOG_empreendedorismo-no-brasil-670x419.png" },
    { name: "Escala 5", image: "https://blog.hotmart.com/blog/2017/10/BLOG_empreendedorismo-no-brasil-670x419.png" },
]

const renderCard = (card, index) => {
    return (
        <ContainerScale margin="40px 20px 0px 10px" key={index} className="box">
            <a href="/scale/{index}" >
                <img src={card.image} />
                <h3>{card.name}</h3>
            </a>
        </ContainerScale>
    )
}

const divS = {
    margin: '10px auto auto auto',
    display: 'inline-block',
    width: '100%',
    textAlign: "initial",
};




export default function ScaleLinsting() {
    return (
        <ContainerHeader>
            <Row>
                <Col span={24}>
                    <div>
                        <InputDefault
                            prefix={<SearchOutlined className="icon-style" />}
                            minWidth="200px"
                            maxWidth="400px"
                            float="left"
                            placeholder="Nome da escala" />
                        <ButtonDefault margin="0 0 0 10px" float="left">
                            Buscar
                        </ButtonDefault>
                        <ButtonDefault href="/new_scale" float="right" icon={<PlusOutlined />}>
                            Nova escala
                        </ButtonDefault>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <div style={divS}>
                        {cardInfo.map(renderCard)}
                    </div>
                </Col>
            </Row>
        </ContainerHeader>
    );
}