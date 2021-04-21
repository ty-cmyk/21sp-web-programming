
var myVue = new Vue({
  el: "#myBookshelf",
  data: {
    newBookObj: {
        date: '',  
        title: "",
        link: "",
        author: "",
        publisher: "",
        summary: "",
        image: ""
    },
    books: [
      {
        title: "The Photograph as Contemporary Art (World of Art)",
        link: "https://www.amazon.com/gp/product/0500204489/ref=ox_sc_act_title_1?smid=ATVPDKIKX0DER&psc=1",
        author: "Charlotte Cotton",
        publisher: "Thames & Hudson; 4th edition",
        date: '2020',
        summary: "In the twenty-first century, photography has come of age as a contemporary art form. Almost two centuries after photographic technology was  first invented, the art world has fully embraced it as a legitimate medium, equal in status to painting and sculpture. The Photograph as Contemporary Art introduces the extraordinary range of contemporary art photography, from portraits of intimate life to highly staged directorial spectacles.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41Gj1qMYU7L._SX355_BO1,204,203,200_.jpg"
      }, 
      {
        title: "Camera Lucida: Reflections on Photography",
        link: "https://www.amazon.com/Camera-Lucida-Reflections-Roland-Barthes/dp/0374532338/ref=sr_1_1?dchild=1&keywords=camera+lucida&qid=1615169454&s=books&sr=1-1",
        author: "Roland Barthes",
        publisher: "HILL & WANG",
        date: '2010',
        summary: "A graceful, contemplative volume, Camera Lucida was first published in 1979. Commenting on artists such as Avedon, Clifford, Mapplethorpe, and Nadar, Roland Barthes presents photography as being outside the codes of language or culture, acting on the body as much as on the mind, and rendering death and loss more acutely than any other medium. This groundbreaking approach established Camera Lucida as one of the most important books of theory on the subject, along with Susan Sontag's On Photography.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41C8JZMDGhL._SX331_BO1,204,203,200_.jpg"
      },
      {
        title: "Decolonising the Camera: Photography in Racial Time",
        link: "https://www.amazon.com/gp/product/1912064758/ref=ox_sc_act_title_1?smid=ATVPDKIKX0DER&psc=1",
        author: "Mark Sealy",
        publisher: "Lawrence & Wishart",
        date: '2019',
        summary: "Decolonising the Camera trains Mark Sealy's sharp critical eye on the racial politics at work within photography, in the context of heated discussions around race and representation, the legacies of colonialism, and the importance of decolonising the university. Sealy analyses a series of images within and against the violent political reality of Western imperialism, and aims to extract new meanings and develop new ways of seeing that bring the Other into focus.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41u+7sqLDzL._SX322_BO1,204,203,200_.jpg"
      },
      {
        title: "The Colors of Photography (Studies in Theory and History of Photography)",
        link: "https://www.amazon.com/gp/product/3110650282/ref=ox_sc_saved_title_1?smid=ATVPDKIKX0DER&psc=1",
        author: "Bettina Gockel",
        publisher: "De Gruyter",
        date: '2020',
        summary: "The Colors of Photography aims to provide a deeper understanding of what color is in the field of photography. Until today, color photography has marked the 'here and now,' while black and white photographs have been linked to our image of history and have formed our collective memory. However, such general dichotomies start to crumble when considering the aesthetic, cultural, and political complexity of color in photography.",
        image: "https://images-na.ssl-images-amazon.com/images/I/41U7cny03VL._SX352_BO1,204,203,200_.jpg"
      },
      {
        title: "The Form Of The Book Book",
        link: "https://www.amazon.com/gp/product/0956260578/ref=ox_sc_saved_image_6?smid=ATVPDKIKX0DER&psc=1",
        author: "Fraser Muggeridge and Ed Sara De Bondt",
        publisher: "Occasional Papers",
        date: '2012',
        summary: "Now it in its second printing, The Form of the Book Book brings together essential essays on the book its history, present, and possible futures by preeminent graphic designers and graphic design theorists/historians including Chrissie Charlton, Catherine de Smet, James Goggin, Jennie Eneqvist, Roland Früh & Corina Neuenschwander, Sarah Gottlieb, Richard Hollis and Armand Mevis. In a nod to Jan Tschicholds famous collection of essays The Form of the Book, first published in 1975, this book offers in-depth analyses of key moments in the history of book design in order to better imagine the many forms the book will take, and is already taking, in our digital age.",
        image: "https://images-na.ssl-images-amazon.com/images/I/31qd+NxlZAL._SX306_BO1,204,203,200_.jpg"
      }, 
    ]
  },
  
  // // computed: {
  // //   numBooks: function () {
  // //     myVue.books = myVue.books.concat(myVue.newBookObj);
  // //     return this.books.length;
      
  // //   }
  // },
  methods: { 
    submitHandler: () => {
      console.log('submitted');
      myVue.books = myVue.books.concat(myVue.newBookObj);
      myVue.resetForm();
    },
    resetForm: () => {
      myVue.newBookObj = {
        date: '',  
        title: "",
        link: "",
        author: "",
        publisher: "",
        summary: "",
        image: ""
      };
    },
    deleteItem: item => {
      myVue.books = myVue.books.filter(book => {
        return book !== item;
      });
    },
    isDisable (title) {
      return title.length > 0;
    }
  }
});

