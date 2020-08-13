import * as Yup from "yup";

export const schema: any = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  photo: Yup.string().required("Campo obrigatório"),
  whatsapp: Yup.string().required("Campo obrigatório"),
  biography: Yup.string().required("Campo obrigatório"),
  // subject: Yup.string().required("Campo obrigatório"),
  price: Yup.number()
    .required("Campo obrigatório")
    .typeError("Esolha um numero"),

});

export const optionsDay = [
  { id: 0, name: "Domingo" },
  { id: 1, name: "Segunda" },
  { id: 2, name: "Terça" },
  { id: 3, name: "Quarta" },
  { id: 4, name: "Quinta" },
  { id: 5, name: "Sexta" },
  { id: 6, name: "Sabado" },
];
export const subject = [
  { id: "Artes", name: "Artes" },
  { id: "Biologia", name: "Biologia" },
  { id: "Ciencias", name: "Ciencias" },
  { id: "Educação Física", name: "Educação Física" },
  { id: "Português", name: "Português" },
  { id: "Geografia", name: "Geografia" },
  { id: "Historia", name: "Historia" },
  { id: "Quimica", name: "Quimica" },
  { id: "Fisíca", name: "Fisíca" },
  { id: "Matemática", name: "Matemática" },
];
export const fields: any = [
  [
    {
      placeholder: "Digite seu nome",
      label: "Nome Completo *",
      name: "name",
      width: 100,
    },
    {
      placeholder: "Link da sua foto",
      label: "Link da sua foto *",
      name: "photo",
      width: 50,
    },
    {
      placeholder: "Digite seu whatsapp",
      label: "Whatsapp *",
      name: "whatsapp",
      width: 48,
    },
    {
      placeholder: "",
      label: "Biografia",
      name: "biography",
      width: 100,
      multiline: true,
    },
  ],
  [
    {
      placeholder: "R$",
      label: "Custo da sua hora por aula",
      name: "price",
      width: 100,
      type: "number",
      defaultValue: 0,
      min: 0,
    },
  ],
  [
    {
      placeholder: "",
      label: "Das",
      name: "from",
      width: 24,
      type: "time",
    },
    {
      placeholder: "",
      label: "Até",
      name: "to",
      width: 24,
      type: "time",
    },
  ],
];

export const selects: any = [
  {
    placeholder: "",
    label: "Matéria",
    name: "subject",
    select: true,
    options: subject,
    width: 100,
  },
  {
    placeholder: "Selecione o dia",
    label: "Dia da semana *",
    name: "week_day",
    select: true,
    options: optionsDay,
    width: 46,
  },
];
