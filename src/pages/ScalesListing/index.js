import React from 'react';
import { ContainerHeaderSearch, Container, ContainerScale } from '../../components/Container';
import { Row, Col } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { InputDefault } from '../../components/input';
import { ButtonDefault } from '../../components/Button';
import { CardScale } from '../../components/Card';

const cardInfo = [
    { name: "Escala 1", image: "https://blog.hotmart.com/blog/2017/10/BLOG_empreendedorismo-no-brasil-670x419.png" },
    { name: "Escala 2", image: "https://blog.hotmart.com/blog/2017/10/BLOG_empreendedorismo-no-brasil-670x419.png" },
    { name: "Escala 3", image: "https://blog.hotmart.com/blog/2017/10/BLOG_empreendedorismo-no-brasil-670x419.png" },
    { name: "Escala 4", image: "https://blog.hotmart.com/blog/2017/10/BLOG_empreendedorismo-no-brasil-670x419.png" },
    { name: "Escala 4", image: "https://blog.hotmart.com/blog/2017/10/BLOG_empreendedorismo-no-brasil-670x419.png" },
]

const renderCard = (card, index) => {
    return (
        <ContainerScale margin="40px 20px 0px 10px" key={index} className="box">
            <img src={card.image} />
            <h3>{card.name}</h3>
        </ContainerScale>
    )
}

const divS = {
    margin: '10px auto',
    display: 'inline-block',
    width: '100%',
};




export default function ScaleLinsting() {
    return (
        <ContainerHeaderSearch>
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
                        <ButtonDefault float="right" icon={<PlusOutlined />}>
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
        </ContainerHeaderSearch>
    );
}