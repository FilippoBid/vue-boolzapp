const { createApp } = Vue;

import usersList from './usersList.js';

createApp({
  
  data () {
    
    return {
    
      usersList,
      selectedUserIndex:0,
      newMessage: '',

       
      
      
    };
  },
  methods:{
    pushNewMessage(){

    },
   
  },
}).mount("#app");



