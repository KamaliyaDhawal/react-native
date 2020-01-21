import React from 'react';
import { ImageBackground, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Formik } from 'formik';
import { globleStyle } from '../../assets/styles/globleStyles';

// export default function AddStudent() {
//     return(
//         <Formik
//             initialValues = {{ name: '', surname: '', rating:''}}
//             onSubmit = {(values) => {
//                 console.log(values)
//             }}
//         >
//             {
//                 (formikProps) => (
//                     <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
//                         <View style={globleStyle.container}>
//                             <TextInput
//                                 placeholder="Name"
//                                 onChangeText={formikProps.handleChange('name')}
//                                 value={formikProps.values.name}
//                                 style={globleStyle.input}
//                             />
//                             <TextInput
//                                 placeholder="Surname"
//                                 onChangeText={formikProps.handleChange('surname')}
//                                 value={formikProps.values.surname}
//                                 style={globleStyle.input}
//                             />
//                             <TextInput
//                                 placeholder="Rating (1-5)"
//                                 onChangeText={formikProps.handleChange('rating')}
//                                 value={formikProps.values.rating}
//                                 keyboardType='numeric'
//                                 style={globleStyle.input}
//                             />
//                             <Button title="Submit" onPress={formikProps.handleSubmit} style={globleStyle.button} color="green" />
//                         </View>
//                     </TouchableWithoutFeedback>
//                 )
//             }
//         </Formik>
//     )
// }
export default function AddStudent() {
    return(
        <Formik
            initialValues={{ name:'', surname:'', rating:''}}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {
                (formikProps) => (
                    <TouchableWithoutFeedback  onPress={ ()=>{Keyboard.dismiss();} }>
                        <ImageBackground style={globleStyle.container} source={require('../../assets/images/game_bg.png')}>
                            <TextInput
                                placeholder="Name"
                                onChangeText={formikProps.handleChange('name')}
                                style={globleStyle.input}
                            />
                            <TextInput
                                placeholder="Surname"
                                onChangeText={formikProps.handleChange('surname')}
                                style={globleStyle.input}
                            />
                            <TextInput
                                placeholder="Rating (1-5)"
                                onChangeText={formikProps.handleChange('rating')}
                                style={globleStyle.input}
                                keyboardType='numeric'
                            />
                            <Button title='Submit' onPress={formikProps.handleSubmit} />
                        </ImageBackground>
                    </TouchableWithoutFeedback>
                )
            }
        </Formik>
    )
}