import React from 'react';
import * as yup from 'yup';



export const addStudentSchema = yup.object({
            name: yup.string()
                .required()
                .min(4),
            surname: yup.string()
                .required()
                .min(4),
            age: yup.string()
                .required()
                .test(
                    'is-num-1-100',
                    'Age must between 1 to 100 year.',
                    (value) => {
                        return parseInt(value) > 0 && parseInt(value) < 100
                    }
                ),
            rating: yup.string()
                    .required()
                    .test(
                        'is-num-1-5',
                        'Rating must between 1 to 5.',
                        (value) => {
                            return parseInt(value)>0 && parseInt(value)<6
                        }
                    ),

        })