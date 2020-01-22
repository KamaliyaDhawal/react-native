import React from 'react';
import { ImageBackground, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, ActionSheetIOS } from 'react-native';
import { Formik } from 'formik';
import { globleStyle } from '../../../assets/styles/globleStyles';
import { addStudentSchema } from './AddStudentValidation';

export default function AddStudent( { addStudent } ) {
    return(
        <Formik
            initialValues={{ name:'', surname:'', rating:'', age:''}}
            validationSchema={addStudentSchema}
            onSubmit={(values) => {
                addStudent(values);
                resetForm({ name:'', surname:'', rating:'', age:''})
            }}
        >
            {
                (formikProps) => {
                    console.log('AddStudentSchema', addStudentSchema);
                    console.log('formikProps', formikProps);
                    return(
                    <TouchableWithoutFeedback  onPress={ ()=>{Keyboard.dismiss();} }>
                        <ImageBackground style={globleStyle.container} source={require('../../../assets/images/game_bg.png')}>
                            <TextInput
                                placeholder="Name"
                                onChangeText={formikProps.handleChange('name')}
                                style={globleStyle.input}
                            />
                            <Text> { formikProps.touched.name && formikProps.errors.name} </Text>

                            <TextInput
                                placeholder="Surname"
                                onChangeText={formikProps.handleChange('surname')}
                                style={globleStyle.input}
                                validationSchema={addStudentSchema}
                            />
                            <Text> { formikProps.touched.surname && formikProps.errors.surname} </Text>

                            <TextInput
                                placeholder="Age"
                                onChangeText={formikProps.handleChange('age')}
                                style={globleStyle.input}
                                keyboardType='numeric'
                                validationSchema={addStudentSchema}
                            />
                            <Text> { formikProps.touched.age && formikProps.errors.age} </Text>

                            <TextInput
                                placeholder="Rating (1-5)"
                                onChangeText={formikProps.handleChange('rating')}
                                style={globleStyle.input}
                                validationSchema={addStudentSchema}
                            />
                            <Text> { formikProps.touched.rating && formikProps.errors.rating} </Text>

                            <Button title='Submit' onPress={formikProps.handleSubmit} />
                        </ImageBackground>
                    </TouchableWithoutFeedback>
                )}
            }
        </Formik>
    )
}