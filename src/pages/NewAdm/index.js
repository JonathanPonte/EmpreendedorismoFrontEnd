import React, { Component, useState } from 'react'
import { Container, ContainerHeader } from '../../components/Container';
import { InputDefault } from '../../components/input';
import { LabelDefault } from '../../components/Label';
import { ButtonDefault } from '../../components/Button';
import { DatePickerDefault } from '../../components/DatePickerDefault';
import { Row, Col } from 'antd';
import { FormDefault } from '../../components/Form';
import { Radio } from 'antd';
import { useSelector } from "react-redux";
import { validateFormLogin } from '../../validate/validateLogin'
import api from '../../service/Api';


const button = {
    marginTop: "30px"
};


export default function NewAdm() {

    const userRedux = useSelector(state => state.user);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPessword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");

    const handleFinish = async e => {

        if (validateFormLogin(email, password) && password === confirmationPassword) {

            const adm = {
                name: name,
                user: {
                    email: email,
                    password: password
                }
            }

            await api.post("/adm", adm, {
                headers: {
                    authorization: 'Bearer ' + userRedux.session.token
                }
            }).then(response => {

                if(response.status === 201){
                    alert("Adm criado com sucesso!");
                }

            }).catch(e => {
               
                if(e.response.status == 403){
                    alert("Email já registrado");
                }

            });

        } else {
            alert("Todos os campos devem ser preenchidos e a senha deve possuir mais de 6 digitos");
        }


    }

    const handleChange = e => {

        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPessword(e.target.value);
                break;
            case "confimationPassword":
                setConfirmationPassword(e.target.value);
                break;
        }

    }

    return (
        <ContainerHeader>
            <FormDefault onFinish={e => handleFinish(e)}>
                <Row >
                    <Col span={24}>
                        <h1>Novo Administrador</h1>
                        <div>
                            <LabelDefault className="f-left">Nome:</LabelDefault >
                            <InputDefault
                                placeholder="Insira seu nome"
                                name="name"
                                type="text"
                                value={name}
                                onChange={e => handleChange(e)}
                                required />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                            <LabelDefault className="f-left">Email:</LabelDefault >
                            <InputDefault
                                placeholder="Insira seu email"
                                name="email"
                                type="text"
                                value={email}
                                onChange={e => handleChange(e)}
                                required />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                            <LabelDefault className="f-left">Senha:</LabelDefault >
                            <InputDefault
                                placeholder="Insira sua senha"
                                name="password"
                                type="password"
                                value={password}
                                onChange={e => handleChange(e)}
                                required />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                            <LabelDefault className="f-left">Confirmação de senha:</LabelDefault >
                            <InputDefault
                                placeholder="Insira sua senha novamente"
                                name="confimationPassword"
                                type="password"
                                value={confirmationPassword}
                                onChange={e => handleChange(e)}
                                required />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                            <ButtonDefault style={button} htmlType="submit">Cadastrar</ButtonDefault>
                        </div>
                    </Col>
                </Row>

            </FormDefault>
        </ContainerHeader>
    );

}

