import React from 'react'
import * as yup from 'yup';

const Schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().min(4).max(10).required()
});
