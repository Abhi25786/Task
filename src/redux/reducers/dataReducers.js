

const initiallistState = {
  list: [],
};
const datainput = (state = initiallistState, action) => {
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
    case 'DELETE_DATA':
      // const newlist = [...state.list];

      // const index = state.list.findIndex((newlist) => newlist.id === action.id);
      // console.log(index)

      // if (index > 0) {
      //   newlist.slice(index, 1);
      // } else {
      //   console.warn(
      //     `Can't remove product (id: ${action.id} ) as its not in cart.`
      //   )
      // }
      const newlist = state.list.filter((elem) => elem.id !== action.id)
      return {
        ...state,
        list: newlist
      }

    default: return state

  }
}

export default datainput