import gpl from 'graphql-tag';

export default {
    query: {
       Users: gpl `
       {
        launch(flight_number:2){
          mission_name
        }
      }
       `
    }
}