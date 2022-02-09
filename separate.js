const Users = [
    {
        id:1,
        name:"Leanne Graham",
        username:"Bret",
        company:"VM Ware",
        Position:"Director",
        JoiningYear:"2010",
    },
      {
        id:2,
        name:"Clementine Bauch",
        username:"Clementine",
        company:"VM Ware",
        Position:"Asst.Director",
        JoiningYear:"2010",
    },
      {
        id:3,
        name:"Kurtis Weissnat",
        username:"Kurtis",
        company:"Dell",
        Position:"Manager",
        JoiningYear:"2012",
    },
      {
        id:4,
        name:"Nicholas Runolfsdottir V",
        username:"Nicholas",
        company:"Dell",
        Position:"Asst.Director",
        JoiningYear:"2012",
    },
      {
        id:5,
        name:"Glenna Reichert",
        username:"Glenna",
        company:"Dell",
        Position:"Team Leader",
        JoiningYear:"2012",
    },
      {
        id:6,
        name:"John Beckam",
        username:"Beckam",
        company:"Dell",
        Position:"Team Leader",
        JoiningYear:"2014",
    },
      {
        id:7,
        name:"Harry Potter",
        username:"Harry",
        company:"Dell",
        Position:"Senior Software Engineer",
        JoiningYear:"2014",
    },
    {
        id:8,
        name:"John snow",
        username:"snow",
        company:"VM Ware",
        Position:"Senior Software Engineer",
        JoiningYear:"2014",
    },
    ]
    const company1 = Users.filter((user => user.company === "VM Ware"))
    console.log("VM Ware Company Members =",company1);
    const yr = Users.filter((user => user.JoiningYear === "2010"))
    console.log("Based on Joining Year in VM Ware =",yr)
    const company2 = Users.filter((user => user.company === "Dell"))
    console.log("Dell Company Members =",company2);
    const yrs = company2.filter((user => user.JoiningYear === "2012"))
    console.log("Based on Joining Year in Dell =",yrs)
    const Yrs = company2.filter((user => user.JoiningYear === "2014"))
    console.log("Based on Joining Year in Dell =",Yrs)