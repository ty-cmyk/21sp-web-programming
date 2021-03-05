// new instance of the Vue class
var llamaAlpaca = new Vue({
  el: "#llamaAlpaca",
  data: {
    state: 'default',
    header: 'Llamas vs. Alpacas',
    llamaHeader: 'Llama Facts',
    alpacaHeader: 'Alpaca Facts',
    newLlamaFact: '',
    llamaFacts: [
        'Llama, (Lama glama), South American member of the camel family, Camelidae (order Artiodactyla), closely related to the alpaca, guanaco, and vicuña, which are known collectively as lamoids.',
        'Most herds of llamas are maintained by the Indians of Bolivia, Peru, Ecuador, Chile, and Argentina.',
        'The llama is primarily a pack animal but is also used as a source of food, wool, hides, tallow for candles, and dried dung for fuel.',
        'The largest of the lamoids, it averages 120 cm (47 inches) at the shoulder. A 113-kilogram (250-pound) llama can carry a load of 45–60 kg and average 25 to 30 km (15 to 20 miles) travel a day.',
        'The llama is a gentle animal, but, when overloaded or maltreated, it will lie down, hiss, spit and kick, and refuse to move.',
        'Llamas are normally sheared every two years, each yielding about 3–3.5 kg of fibre.',
        
    ],
    llamaWiki: "https://en.wikipedia.org/wiki/Llama",
    llamaTitle: "Llamas' are awesome",


    newAlpacaFact: '',
    alpacaFacts: [
        'The alpaca (Vicugna pacos) is a species of South American camelid mammal. It is similar to, and often confused with, the llama. However, alpacas are often noticeably smaller than llamas.',
        'Alpacas are kept in herds that graze on the level heights of the Andes of Southern Peru, Western Bolivia, Ecuador, and Northern Chile at an altitude of 3,500 to 5,000 metres (11,000 to 16,000 feet) above sea level.',
        'Alpacas are considerably smaller than llamas, and unlike llamas, they were not bred to be working animals but were bred specifically for their fiber.',
        'Alpaca fiber is used for making knitted and woven items, similar to sheeps wool. These items include blankets, sweaters, hats, gloves, scarves, a wide variety of textiles and ponchos in South America',
        'Alpacas communicate through body language. The most common is spitting when they are in distress, fearful, or mean to show dominance.',
        
        
    ],
    alpacaWiki: "https://en.wikipedia.org/wiki/Alpaca",
    alpacaTitle: "Alpacas' are awesome",
    btn: 'open'
    
  },
  methods: {
      //   saves facts to list
      saveLlItem: function() {
          this.llamaFacts.push(this.newLlamaFact);
          this.newLlamaFact = '';
      },
      saveAlItem: function() {
        this.alpacaFacts.push(this.newAlpacaFact);
        this.newalpacaFact = '';
    },  
    //  changes visibility of input field
      changeState: function(newState) {
          this.state = newState;
          this.newFact = '';
      },
      //   deletes facts from list
      deleteLlItem: function() {
          this.llamaFacts.pop(this.newLlamaFact);
          this.newLlamaFact = '';
      },
      deleteAlItem: function() {
        this.alpacaFacts.pop(this.newAlpacaFact);
        this.newAlpacaFact = '';
    },
    
  }
});
