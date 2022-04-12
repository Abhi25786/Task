import React, { useState } from 'react'
import { Text, View, Button, SafeAreaView } from 'react-native'
import { useDispatch } from 'react-redux'
import TextInputComponent from '../../components/TextInput'
import { updateData } from '../../redux/actions/auth'
function Update({ route }) {
    dispatch = useDispatch()
    const allData = route?.params?.paramData

    // const [update, setUpdate] = useState(allData.name)
    // const [number, setnum] = useState(allData.name)
    // const [ageset, setUpdate] = useState(allData.name)
    // const [update, setUpdate] = useState(allData.name)
    // const [update, setUpdate] = useState(allData.name)
    const Click = () => {
        dispatch(updateData({ allData, update }))
    }
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>

                <TextInputComponent placeholder='Enter Update Name' value={update} onchnagetext={(event) => setUpdate(event)} style={{ flex: 0.5 }} />
                <TextInputComponent placeholder='Enter Update number' value={update} onchnagetext={(event) => setUpdate(event)} style={{ flex: 0.5 }} />
                <TextInputComponent placeholder='Enter Update age' value={update} onchnagetext={(event) => setUpdate(event)} style={{ flex: 0.5 }} />
                <TextInputComponent placeholder='Enter Update roll' value={update} onchnagetext={(event) => setUpdate(event)} style={{ flex: 0.5 }} />
                <TextInputComponent placeholder='Enter Update address' value={update} onchnagetext={(event) => setUpdate(event)} style={{ flex: 0.5 }} />

                <Button title='go' onPress={Click} />
            </SafeAreaView>


        </>
    )
}

export default Update