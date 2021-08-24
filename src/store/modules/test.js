import storage from 'store'

const test={
  state:{
    testname:"",
    testid:"",
    testreason:""
  },
  mutations:{
    SET_INFO:(sate,info)=>{
      state.testname=info.testname;
      state.testid=info.testid;
      state.testreason=info.testreason;
    }
  },
  actions:{
    GetTestInfo(){
      
    }
  }
}

export default test