import React, { useState, useEffect } from "react";
import { Heading, Flex, Button, Select, Textarea } from "@chakra-ui/core";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";

import ChakraInput from "./components/ChakraInput";

import api from "./services/api";

import DocHelper from "./utils/docValidate";

import logo from "./assets/logo.png";

export default function Home() {
  const [area, setArea] = useState([]);
  const [subarea, setSubarea] = useState([]);
  const [areaValue, setAreaValue] = useState(0);

  useEffect(() => {
    handleArea();
  }, []);

  async function handleArea() {
    const responseArea = await api.get(`/problem/area`);
    setArea(responseArea.data);
  }

  useEffect(() => {
    handleSubArea(areaValue);
  }, [areaValue]);

  async function handleSubArea(data) {
    const responseSubarea = await api.get(`problem/area/${data}/subarea`);
    setSubarea(responseSubarea.data);
  }

  async function validateCpf(document) {
    const validDoc = DocHelper.validateDoc(document);
    if (validDoc) {
      return true;
    }
    return false;
  }

  const initialValues = {
    doc: "",
    areaValue: "",
    subarea: "",
    comments: "",
    rating: ""
  };

  const validationSchema = yup.object().shape({
    doc: yup
      .string()
      .required("O seu cpf é obrigatório")
      .test("doc", "Esse CPF está inválido", async document => {
        if (document && document.length === 14) {
          const existDoc = await validateCpf(document);

          return existDoc === true;
        }
      }),
    // areaValue: yup.string().required("A área é obrigatório"),
    // subarea: yup.string().required("A sub-área é obrigatório"),
    rating: yup
      .number()
      .required("A sua avaliação é obrigatória")
      .test("doc", "O número deve estar entre 1 e 10", async document => {
        if (document >= 1 && document <= 10) {
          return true;
        }
      })
  });

  async function onSubmit(data) {
    await api.post(`problem`, {
      doc: data.doc,
      problems: [
        {
          areaId: Number(areaValue),
          subareaId: Number(data.subarea),
          comment: data.comments
        }
      ],
      appRating: data.rating
    });

    toast.success("Cadastro Realizado com Sucesso");
    alert("Cadastro Realizado com Sucesso");

    window.location.reload();
    return false;
  }

  function handleAreaValue(e) {
    setAreaValue(e);
  }

  return (
    <Flex align="center" height="100vh" direction="column">
      <Flex padding={6} direction="row" width="200px]" justify="center">
        <img src={logo} width="100%" alt="bella-conecta" />
      </Flex>

      <Heading margin={10} color="gray.700">
        Cadastro de Atendimento
      </Heading>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Flex direction="column" align="flex-start" width="350px">
              <Heading marginBottom={-5} color="gray.600" size="md">
                Digite o CPF
              </Heading>

              <ChakraInput
                name="doc"
                align="center"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.doc}
                type="text"
                placeholder="555.555.555-55"
                errorBorderColor="crimson"
                width="350px"
              />

              <Heading marginTop={5} color="gray.600" size="md">
                Área
              </Heading>

              <Select
                errors={errors.areaValue}
                onChange={e => handleAreaValue(e.target.value)}
                placeholder="Selecione a Área"
                borderColor="gray.600"
                focusBorderColor="pink.500"
                name="area"
                value={areaValue}
                marginBottom={5}
              >
                {area.map(item => (
                  <option key={item.id} id="area" name="area" value={item.id}>
                    {item.description}
                  </option>
                ))}
              </Select>

              <Heading color="gray.600" size="md">
                Sub-área
              </Heading>
              <Select
                id="subarea"
                name="subarea"
                placeholder="Selecione a Sub-área"
                width="350px"
                borderColor="gray.600"
                focusBorderColor="pink.500"
                value={values.subarea}
                onChange={handleChange}
                marginBottom={5}
              >
                {subarea.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.description}
                  </option>
                ))}
              </Select>

              <Heading color="gray.600" size="md" htmlFor="comments">
                Comentários
              </Heading>
              <Textarea
                name="comments"
                id="comments"
                value={values.comments}
                onChange={handleChange}
                placeholder="Digite seu comentário"
                size="sm"
                height="50px"
                borderColor="gray.600"
                focusBorderColor="pink.500"
                marginBottom={5}
              />

              <Heading marginBottom={-5} color="gray.600" size="md">
                Sua avaliação do app
              </Heading>

              <ChakraInput
                name="rating"
                id="rating"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.doc}
                type="number"
                placeholder="10"
                errorBorderColor="crimson"
                focusBorderColor="pink.500"
                borderColor="gray.600"
                maxLength={2}
                align="center"
              />

              <Button
                marginTop={5}
                type="submit"
                _hover={{ bg: "pink.500" }}
                color="white"
                variant="solid"
                bg="pink.600"
                onClick={handleSubmit}
                alignSelf="stretch"
              >
                Cadastrar
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Flex>
  );
}
