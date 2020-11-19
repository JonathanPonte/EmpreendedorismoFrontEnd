import React, { Component, useState } from 'react'
import { withRouter } from 'react-router';
import { Container, ContainerHeader } from '../../components/Container';
import { InputDefault } from '../../components/input';
import { LabelDefault } from '../../components/Label';
import { ButtonDefault } from '../../components/Button';
import { DatePickerDefault } from '../../components/DatePickerDefault';
import { FormDefault } from '../../components/Form';
import { SelectDefault, OptionDefault } from '../../components/Select';
import { Row, Col, Alert } from 'antd';
import api from '../../service/Api';
import { validateFormLogin } from "../../validate/validateLogin";


const organizationCol = {
    display: "grid",
    textAlign: "initial",
};

const button = {
    marginTop: "30px"
};

const select = {
    borderRadius: "20px",
    border: "1px solid #000"
};

function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}


export default function SingUp() {


    const [name, setName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [academicEducation, setAcademicEducation] = useState("");
    const [profession, setProfession] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChange = e => {
        if (e.target.name === "name") {
            setName(e.target.value);
        }

        if (e.target.name === "email") {
            setEmail(e.target.value);
        }

        if (e.target.name === "password") {
            setPassword(e.target.value);
        }

        if (e.target.name === "confirmatioPassword") {
            setConfirmPassword(e.target.value);
        }

    }

    function isFilledFields() {
        if (name == "" || birthdate == "" || academicEducation == "" || profession == "" || email == "" || password == "") {
            return false;
        }
        return true;
    }

    function getData(date, dateString) {
        console.log(date, dateString);
        setBirthdate(dateString);
    }

    function getAcademicEducation(valor) {
        setAcademicEducation(valor);
    }

    function getProfission(valor) {
        setProfession(valor);
    }

    const handleSubmit = async e => {

        const people = {
            "name": name,
            "birthdate": birthdate,
            "academicEducation": academicEducation,
            "profession": profession,
            "user": {
                "email": email,
                "password": password
            }
        }

        if (!isFilledFields()) {
            alert("Todos os campos devem ser preenchidos");
        } else {
            if (password == confirmPassword && validateFormLogin(email, password)) {

                const response = await api.post('auth/register', people).then(response => {

                    if (response.status == 201) {
                        alert("Usuário criado");
                        window.location.href = "/";
                    }

                }).catch(e => {

                    if (e.response.status == 403) {
                        alert("Usuario já existe");
                    }

                });

                //    console.log(response);

            } else {
                alert("A senhas devem ser iguais");
            }
        }

    }

    return (
        <ContainerHeader>
            <FormDefault onFinish={e => handleSubmit(e)}>
                <Row >
                    <Col span={24}>
                        <h1>Cadastro</h1>
                        <div>
                            <LabelDefault className="f-left">Nome:</LabelDefault >
                            <InputDefault
                                placeholder="Insira seu nome"
                                type="text"
                                name="name"
                                value={name}
                                onChange={e => handleChange(e)}
                                required />
                        </div>
                    </Col>
                    <Col span={6} style={organizationCol}>
                        <div>
                            <LabelDefault className="f-left">Data de nascimento:</LabelDefault >
                        </div>
                        <div>
                            <DatePickerDefault
                                placeholder="Selecione a data"
                                className="f-left"
                                format="DD/MM/YYYY"
                                onChange={getData}
                                required/>
                        </div>
                    </Col>
                    <Col span={8} style={organizationCol}>
                        <div>
                            <LabelDefault className="f-left">Formação:</LabelDefault >
                        </div>
                        <div className="f-left">
                            <SelectDefault
                                style={{ width: 200 }}
                                showSearch
                                placeholder="Selecione a formação"
                                optionFilterProp="children"
                                name="academicEducation"
                                value={academicEducation}
                                onChange={getAcademicEducation}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                required>
                                <OptionDefault value="jack">Jack</OptionDefault>
                                <OptionDefault value="lucy">Lucy</OptionDefault>
                                <OptionDefault value="tom">Tom</OptionDefault>
                            </SelectDefault>
                        </div>
                    </Col>
                    <Col span={8} style={organizationCol}>
                        <div>
                            <LabelDefault className="f-left">Profissão:</LabelDefault >
                        </div>
                        <div className="f-left">
                            <SelectDefault
                                style={{ width: 200 }}
                                showSearch
                                placeholder="Selecione a profissão"
                                optionFilterProp="children"
                                name="profession"
                                value={profession}
                                onChange={getProfission}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }>
                                <OptionDefault value="jack">Jack</OptionDefault>
                                <OptionDefault value="lucy">Lucy</OptionDefault>
                                <OptionDefault value="tom">Tom</OptionDefault>
                            </SelectDefault>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div>
                            <LabelDefault className="f-left">Email:</LabelDefault >
                            <InputDefault
                                placeholder="Insira seu email"
                                name="email"
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
                                type="password"
                                name="password"
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
                                name="confirmatioPassword"
                                type="password"
                                value={confirmPassword}
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

