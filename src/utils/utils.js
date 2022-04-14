import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeData = async (data) => {
    console.log(data, 'store>my>data')
    try {
        let jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('myList', jsonValue)
        // console.log(data, 'store my data')
        return { jsonValue }
    } catch (e) {
        // saving error
        console.log("error rasied to store data")
    }
}
export const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('myList')
        let jsonValue = JSON.parse(value)
        console.log(jsonValue, '------data')
        return jsonValue
    } catch (e) {
        // error reading value
    }
}