import { storeData } from "../../utils/utils";


const initiallistState = {
  list: [],
};
const datainput = (state = initiallistState, action) => {
  // ----------------------------add action reducer------------------------------//
  switch (action.type) {
    case 'ADD_DATA': {
      // console.log("pyalod data", action.payload)
      const data = action.payload


      let mergeData = [...state.list, ...data]

      storeData(mergeData).then((val) => {
        // console.log("my store data", val)
      })
      return {
        ...state,
        list: mergeData,

      }
    }

    // ----------------------------delete action reducer------------------------------//
    case 'DELETE_DATA': {

      const newList1 = [...state.list]
      const index = state.list.findIndex((items) => items.userId === action.userId)
      if (index >= 0) {
        newList1.splice(index, 1)
      }
      storeData(newList1).then((val) => {
        console.log("delete store data", val)
      })
      return {
        ...state,
        list: newList1
      }
    }
    case 'Update_Data': {

      let data = action.payload
      console.log("---my id--------sdsdv", data)

      let editArr = [...state.list]
      let editUserIndex = state.list.findIndex((elem) => elem.userId === data.id);


      editArr[editUserIndex] = data
      console.log("update id=====", editUserIndex)
      storeData(editArr).then((val) => {
        console.log("my store data", val)
      })
      return {
        ...state,
        list: editArr

      }
    }
    default: return state

  }
}

export default datainput