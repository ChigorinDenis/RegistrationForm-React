import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import CustomSelect from './CustomSelect';

const langs = ['Русский', 'Английский', 'Французский', 'Испанский'];

const SignupSchema = yup.object().shape({
  name: yup.string()
    .matches(/\D/, 'Введено не корректное значение')
    .required('Поле не должно быть пустым'),
  phone: yup.string()
    .matches(/\+?[0-9]\(?[0-9]{3}\)?[0-9]{3}\-?[0-9]{2}-?[0-9]{2}/, 'Введено не корректное значение')
    .required('Поле не должно быть пустым'),
  email: yup.string().email('Invalid email')
    .required('Поле не должно быть пустым'),
});
function RegistrationForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      lang: '',
    },
    validationSchema: SignupSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container-form">
        <div className="header-form">
          <h2>Регистрация</h2>
          <span>
            Уже есть аккаунт?&ensp;
            <a href="#">Войти</a>
          </span>
        </div>
          <div className="input-group">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              name="name"
              placeholder="Введите Ваше имя"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name && <span className="in-valid">{formik.errors.name}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Введите Ваш email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            /> 
            {formik.errors.email && formik.touched.email  && <span className="in-valid">{formik.errors.email}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="phone">Номер телефона</label>
            <input
              type="phone"
              name="phone"
              placeholder="Введите номер телефона"
              onChange={formik.handleChange}
              value={formik.values.phone}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phone && formik.touched.phone && <span className="in-valid">{formik.errors.phone}</span>}
          </div>
          <div className="input-group">
            <label>Язык</label>
            <CustomSelect  options={langs} placeholder="Язык"/>
          </div>
          
          <div className="input-group">
            <label className="custom-checkbox">
              Принимаю <a href="#">условия</a> использования
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>   
          </div>
          <button
            type="submit"
            disabled={!formik.isValid || !formik.dirty}
          >
            Зарегистрироваться
          </button>
      </div>
    </form>
  );
}

export default RegistrationForm;