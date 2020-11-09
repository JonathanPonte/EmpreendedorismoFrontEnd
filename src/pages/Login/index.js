import React, { useState } from 'react';
import Logo from '../../assets/images/logo512.png';
import Face from '../../assets/images/face.png'
import Google from '../../assets/images/google.png'
import { Container } from '../../components/Container';
import { InputDefault } from '../../components/input';
import { LabelDefault } from '../../components/Label';
import { ModalRecoverPassword } from '../../components/Modal'
import { ButtonLogin, ButtonRecoverEmail, ButtonDefault } from '../../components/Button';
import Form from 'antd/lib/form/Form';


const form = {
    width: "300px",
    height: "500px",
    margin: "auto",
};

const img = {
    width: 200,
    height: 200
}

const imgSocialMedia = {
    width: 30,
    height: 30,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 10
}

export default function Login() {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = e => {
        setLoading(true);
        setTimeout(() => {
            setVisible(false);
            setLoading(false);
        }, 3000);
    }

    const handleCancel = e => {
        setVisible(false);
    }

    return (
        <Container>

            <Form style={form}>

                <img src={Logo} style={img} />
                <br />
                <LabelDefault className="f-left">
                    Email
                </LabelDefault>
                <InputDefault
                    placeholder="Insira seu email"
                />
                <LabelDefault className="f-left">
                    Senha
                </LabelDefault>
                <InputDefault
                    placeholder="Insira sua senha"
                />

                <ButtonRecoverEmail className="f-left" onClick={showModal}>
                    Esqueceu sua senha?
                </ButtonRecoverEmail>
                <ModalRecoverPassword
                    title="ESQUECI MINHA SENHA"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={
                        <ButtonLogin key="submit" type="primary" loading={loading} onClick={handleOk} >
                            Enviar
                    </ButtonLogin>
                    }
                >
                    <Form>
                        <h3>Informe seu email.</h3>
                        <InputDefault
                            type="email"
                            placeholder="Insira seu email"
                        />
                    </Form>
                </ModalRecoverPassword>
                <br />
                <br />

                <ButtonLogin>
                    <a href="/scales_listing" >Entrar</a>
                </ButtonLogin>

                <br />

                <a href="https://www.facebook.com/"> <img src={Face} style={imgSocialMedia} /> </a>
                <a href="https://www.google.com/"><img src={Google} style={imgSocialMedia} /></a>

            </Form>
        </Container>
    );

}
