
var myVue = new Vue({
  el: "#calcApp",
  data: {
    firstNum: null,
    secondNum: null,
    operation: 'add',
    total: null,
  },
  methods: {
    calculate: (num1, num2) =>{
      switch (myVue.operation) {
        case 'add' : 
          myVue.total = num1 + num2;
          break;
        case 'subtract' :
          myVue.total = num1 - num2;
          break;
        case 'multiply' :
          myVue.total = num1 * num2;
          break;
        case 'divide' :
          myVue.total = num1 / num2;
          break;

        default: 
          window.alert('unexpected operator')
          break;

      }
      myVue.firstNum = myVue.secondNum = null;
    }
  }
});

