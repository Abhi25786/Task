

const initiallistState = {
  list: [],
};
const datainput = (state = initiallistState, action) => {
  // ----------------------------add action reducer------------------------------//
  switch (action.type) {
    case 'ADD_DATA':
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
    // ----------------------------delete action reducer------------------------------//
    case 'DELETE_DATA':

      const newlist = state.list.filter((elem) => elem.id !== action.id)
      return {
        ...state,
        list: newlist
      }
    case 'Update_Data': {
      const index = state.list.findIndex((elem) => elem.id !== action.payload); //finding index of the item
      const newArray = [...state.list]; //making a new array
      newArray[index].completed = true//changing value in the new array
      return {
        ...state, //copying the orignal state
        list: newArray, //reassingning todos to new array
      }
    }
    default: return state

  }
}

export default datainput