const { createApp } = Vue;

import usersList from './usersList.js';

createApp({
  
  data () {
    
    return {

      dateTime: luxon.DateTime,
      usersList,
      selectedUserIndex:0,
      newMessage: '',
      search: '',

       
      
      
    };
  },
  methods:{
    pushNewMessage(){
      this.usersList[this.selectedUserIndex].messages.push({
        date: this.dateTime.now().toFormat("hh:mm"),
        message: this.newMessage,
        status: 'sent'
      
      })
      this.newMessage = ""
      this.responseTimer()



    },
    responseTimer(){
      setTimeout(()=>{this.usersList[this.selectedUserIndex].messages.push({
        date: this.dateTime.now().toFormat("hh:mm"),
        message: "ok boomer",
        status: 'received'
      })

      },2000);

    },
    deleteMsg(indexMsg){
      this.usersList[this.selectedUserIndex].messages.splice(indexMsg, 1);

    },
    
  },
  computed:{
    filteredUser(){
  
      return this.usersList.filter(contatto =>{
        return contatto.name.toLowerCase().includes(this.search.toLowerCase())
      })
      
    }
  },
}).mount("#app");



