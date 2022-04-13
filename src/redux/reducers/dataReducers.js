

const initiallistState = {
  list: [],
};
const datainput = (state = initiallistState, action) => {
  // ----------------------------add action reducer------------------------------//
  switch (action.type) {
    case 'ADD_DATA': {
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            name: data.addname,
            phone: data.addphone,
            age: data.age,
            roll: data.rollnumber,
            address: data.address,

          },
        ],
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
      console.log("Updatedata", data)

      // let editarr = [...state.list]
      // let update = state.list.findIndex((index) => index.id == data.id);
      // editarr[update] = data;

      let updateArry = state.list.map((val, i) => {
        if (val?.id == data?.id) {
          return data
        }
        return val
      })
      console.log("updatearray", updateArry)

      return {
        ...state,
        list: updateArry

      }
    }
    default: return state

  }
}

export default datainput