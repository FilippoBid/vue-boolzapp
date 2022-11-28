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
      this.usersList[this.selectedUserIndex].messages.push({
        date: '10/01/2020 16:15:22',
        message: this.newMessage,
        status: 'sent'
      })
      this.newMessage = ""
s


    },
   
  },
}).mount("#app");



