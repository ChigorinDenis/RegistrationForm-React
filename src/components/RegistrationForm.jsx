// label-has-associated-control: 0
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
    .matches(/\+?[0-9]\(?[0-9]{3}\)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}/, 'Введено не корректное значение')
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
      <div className='container-form'>
        <div className='header-form'>
          <h2>Регистрация</h2>
          <span>
            Уже есть аккаунт?&ensp;
            <a href='/#'>Войти</a>
          </span>
        </div>
        <div className='input-group'>
          <label htmlFor='name'>
            Имя
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Введите Ваше имя'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </label>
          {formik.errors.name && formik.touched.name && <span className='in-valid'>{formik.errors.name}</span>}
        </div>
        <div className='input-group'>
          <label htmlFor='email'>
            Email
            <input
              type='email'
              name='email'
              placeholder='Введите Ваш email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </label>
          {formik.errors.email && formik.touched.email && <span className='in-valid'>{formik.errors.email}</span>}
        </div>
        <div className='input-group'>
          <label htmlFor='phone'>
            Номер телефона
            <input
              type='phone'
              name='phone'
              placeholder='Введите номер телефона'
              onChange={formik.handleChange}
              value={formik.values.phone}
              onBlur={formik.handleBlur}
            />
          </label>
          {formik.errors.phone && formik.touched.phone && <span className='in-valid'>{formik.errors.phone}</span>}
        </div>
        <div className='input-group'>
          <label htmlFor='select-lang'>
            Язык
            <CustomSelect id='select-lang' options={langs} placeholder='Язык' />
          </label>
        </div>
        <div className='input-group'>
          <label
            className='custom-checkbox'
            htmlFor='custom-checkbox'
          >
            Принимаю
            &ensp;
            <a href='/#'>условия</a>
            &ensp;
            использования
            <input type='checkbox' id='custom-checkbox' />
            <span className='checkmark' />
          </label>
        </div>
        <button
          type='submit'
          disabled={!formik.isValid || !formik.dirty}
        >
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
