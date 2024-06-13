AFRAME.registerComponent("poster", {
    init: function () {
      this.coverContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "super-man",
          title: "Superman",
          url: "download.jpg",
        },
        {
          id: "spider-man",
          title: "Spiderman",
          url: "spiderman.jpg",
        },
  
        {
          id: "captain-aero",
          title: "Captain Aero",
          url: "cap_aero.jpg",
        },
        {
          id: "outer-space",
          title: "Outer Space",
          url: "outer_space.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id)
        // Thumbnail Element
        const thumbnailEl = this.createThumbnail(item)
        borderEl.appendChild(thumbnailEl)
      }
    },
  
    createBorder: function(position, id){
      const element = document.createElement('a-entity')
      element.setAttribute("visible", true)
      element.setAttribute("geometry", {primitive: 'ring', radiusInner: 9, radiusOuter: 10})
      element.setAttribute("position", position)
      element.setAttribute("id", id)
      element.setAttribute("material", {color: "#0077CC", opacity: 1})
      return element
    },
  
    createThumbnail: function(item){
      const element = document.createElement('a-entity')
      element.setAttribute("visible", true)
      element.setAttribute("geometry", {primitive: 'circle', radius: 9})
      element.setAttribute("material", {src: item.url})
      return element
    }
    
  });
  