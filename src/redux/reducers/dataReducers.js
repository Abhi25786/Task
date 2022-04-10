

const initiallistState = {
  list: [],
};
 const datainput = (state = initiallistState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      const {id, data} = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            name: data.addname,
            phone:data.addphone,
          
           age :data.age,
            roll:data.rollnumber,
            address:data.address,
         
          },
        ],
      }

    default :return state
     
  }
}

export default datainput