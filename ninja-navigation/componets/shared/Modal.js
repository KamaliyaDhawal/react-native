import React, { useState } from 'react';
import { Modal, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CustomModal(props) {
    const [modalStatus, setModalStatus] = useState(true);
    function toggleModal(status) {
        setModalStatus(status);
    }
    return(
        <Modal visible={modalStatus}>
            <MaterialIcons
                name="close"
                size={20}
                onPress={() => { setModalStatus(false)  }}
            />
            { props.children }
        </Modal>
    )
}