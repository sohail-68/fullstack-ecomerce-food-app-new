   <!-- qut--->  console.log([...submittedData,data]);
        console.log([...submittedData,data]);
        console.log([submittedData,data]);
        console.log(data); -->


        <!-- ans ==>   by defualt ak array banaaya he jisme submited data khud ek array hai or jo data he ek obj hai or jo data he wo obj he  use hum ek array jo kisubmited data he usme store kara rahe h  or jo aray he iske andar hum obj data jo he use dale ja rae he ?  ====== -->




  const[newdata,senewdata]=useState([])
  const context=useContext(Context)
  const {editindex,seteditindex}=context