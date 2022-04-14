import { storeData } from "../../utils/utils";


const initiallistState = {
  list: [],
};
const datainput = (state = initiallistState, action) => {
  // ----------------------------add action reducer------------------------------//
  switch (action.type) {
    case 'ADD_DATA': {
      console.log("pyalod data", action.payload)
      const data = action.payload


      let mergeData = [...state.list, ...data]

      storeData(mergeData).then((val) => {
        console.log("my store data", val)
      })
      return {
        ...state,
        list: mergeData,

      }
    }

    // ----------------------------delete action reducer------------------------------//
    case 'DELETE_DATA': {

      const newlist = state.list.filter((elem) => elem.id !== action.id)
      return {
        ...state,
        list: newlist
      }
    }
    case 'Update_Data': {

      let data = action.payload

      let editarr = [...state.list]
      let update = state.list.findIndex((elem) => elem.userid == data.userid);

      editarr[update] = data
      console.log("-------------------data", editarr)
      storeData(editarr)
      return {
        ...state,
        list: editarr

      }
    }
    default: return state

  }
}

export default datainput