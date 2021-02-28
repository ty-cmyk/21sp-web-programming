// new instance of the Vue class
var llamaFacts = new Vue({
  el: "#llamaFacts",
  data: {
    state: 'default',
    header: 'Llama Facts',
    newFact: '',
    facts: [
        'Llama, (Lama glama), South American member of the camel family, Camelidae (order Artiodactyla), closely related to the alpaca, guanaco, and vicuña, which are known collectively as lamoids.',
        'Most herds of llamas are maintained by the Indians of Bolivia, Peru, Ecuador, Chile, and Argentina.',
        'The llama is primarily a pack animal but is also used as a source of food, wool, hides, tallow for candles, and dried dung for fuel.',
        'The largest of the lamoids, it averages 120 cm (47 inches) at the shoulder. A 113-kilogram (250-pound) llama can carry a load of 45–60 kg and average 25 to 30 km (15 to 20 miles) travel a day.',
        'The llama is a gentle animal, but, when overloaded or maltreated, it will lie down, hiss, spit and kick, and refuse to move.',
        'Llamas breed in the (Southern Hemispheric) late summer and fall, from November to May. ',
        'The gestation period for Llamas lasts about 11 months, and the female gives birth to one young.',
        'Llamas are normally sheared every two years, each yielding about 3–3.5 kg of fibre.',
        'Llama fleece consists of the coarse guard hairs of the protective outer coat (about 20 percent) and the short, crimped (wavy) fibre of the insulating undercoat. ',
        'Depending on the authority, the llama, alpaca, and guanaco may be classified as distinct species or as races of Lama glama.',
        
    ]
    
  },
  methods: {
      //   saves facts to list
      saveItem: function() {
          this.facts.push(this.newFact);
          this.newFact = '';
      }, 
    //  changes visibility of input field
      changeState: function(newState) {
          this.state = newState;
          this.newFact = '';
      },
      //   deletes facts from list
      deleteItem: function() {
          this.facts.pop(this.newFact);
          this.newFact = '';
      }
    
  }
});
